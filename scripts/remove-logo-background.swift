import AppKit

enum Mode: String {
  case lightBackground
  case darkBackground
}

guard CommandLine.arguments.count == 4,
      let mode = Mode(rawValue: CommandLine.arguments[1]) else {
  fputs("Usage: remove-logo-background.swift <lightBackground|darkBackground> <input> <output>\n", stderr)
  exit(1)
}

let input = CommandLine.arguments[2]
let output = CommandLine.arguments[3]

guard let image = NSImage(contentsOfFile: input),
      let sourceData = image.tiffRepresentation,
      let source = NSBitmapImageRep(data: sourceData) else {
  fputs("Unable to read input image\n", stderr)
  exit(1)
}

let width = source.pixelsWide
let height = source.pixelsHigh
guard let result = NSBitmapImageRep(
  bitmapDataPlanes: nil,
  pixelsWide: width,
  pixelsHigh: height,
  bitsPerSample: 8,
  samplesPerPixel: 4,
  hasAlpha: true,
  isPlanar: false,
  colorSpaceName: .deviceRGB,
  bytesPerRow: 0,
  bitsPerPixel: 0
) else {
  fputs("Unable to allocate output image\n", stderr)
  exit(1)
}

var minX = width
var minY = height
var maxX = 0
var maxY = 0

for y in 0..<height {
  for x in 0..<width {
    guard let color = source.colorAt(x: x, y: y)?.usingColorSpace(.deviceRGB) else { continue }
    let r = color.redComponent
    let g = color.greenComponent
    let b = color.blueComponent
    let alpha: CGFloat
    let outputRed: CGFloat
    let outputGreen: CGFloat
    let outputBlue: CGFloat

    switch mode {
    case .lightBackground:
      let distance = 1 - min(r, g, b)
      alpha = max(0, min(1, (distance - 0.035) / 0.13))
      if alpha > 0.001 {
        outputRed = max(0, min(1, (r - (1 - alpha)) / alpha))
        outputGreen = max(0, min(1, (g - (1 - alpha)) / alpha))
        outputBlue = max(0, min(1, (b - (1 - alpha)) / alpha))
      } else {
        outputRed = 0
        outputGreen = 0
        outputBlue = 0
      }
    case .darkBackground:
      let brightness = max(r, g, b)
      alpha = max(0, min(1, (brightness - 0.025) / 0.12))
      if alpha > 0.001 {
        outputRed = max(0, min(1, r / alpha))
        outputGreen = max(0, min(1, g / alpha))
        outputBlue = max(0, min(1, b / alpha))
      } else {
        outputRed = 0
        outputGreen = 0
        outputBlue = 0
      }
    }

    result.setColor(
      NSColor(deviceRed: outputRed, green: outputGreen, blue: outputBlue, alpha: alpha),
      atX: x,
      y: y
    )

    if alpha > 0.4 {
      minX = min(minX, x)
      minY = min(minY, y)
      maxX = max(maxX, x)
      maxY = max(maxY, y)
    }
  }
}

guard minX <= maxX, minY <= maxY else {
  fputs("No visible logo pixels found\n", stderr)
  exit(1)
}

let padding = 24
minX = max(0, minX - padding)
minY = max(0, minY - padding)
maxX = min(width - 1, maxX + padding)
maxY = min(height - 1, maxY + padding)

let cropWidth = maxX - minX + 1
let cropHeight = maxY - minY + 1
guard let cropped = NSBitmapImageRep(
  bitmapDataPlanes: nil,
  pixelsWide: cropWidth,
  pixelsHigh: cropHeight,
  bitsPerSample: 8,
  samplesPerPixel: 4,
  hasAlpha: true,
  isPlanar: false,
  colorSpaceName: .deviceRGB,
  bytesPerRow: 0,
  bitsPerPixel: 0
) else {
  fputs("Unable to allocate cropped output image\n", stderr)
  exit(1)
}

for y in 0..<cropHeight {
  for x in 0..<cropWidth {
    if let color = result.colorAt(x: x + minX, y: y + minY) {
      cropped.setColor(color, atX: x, y: y)
    }
  }
}

guard let png = cropped.representation(using: .png, properties: [:]) else {
  fputs("Unable to encode PNG\n", stderr)
  exit(1)
}

try png.write(to: URL(fileURLWithPath: output))
