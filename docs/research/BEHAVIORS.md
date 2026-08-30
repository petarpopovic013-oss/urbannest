# Screenshot-derived behavior specification

- Header links smooth-scroll to page anchors. Desktop navigation is inline; below 760px it becomes a button-controlled menu.
- Calls to action use `tel:+381615141213`.
- Section content reveals once on viewport entry with opacity `0 -> 1` and translateY `24px -> 0` over `700ms cubic-bezier(.22,1,.36,1)`.
- Images scale from `1` to `1.035` on pointer hover over `700ms`.
- Text links receive a 1px underline sweep; pill buttons invert foreground/background over `240ms`.
- Decorative masks are CSS-only and never affect reading order.
- `prefers-reduced-motion: reduce` disables reveal transforms, smooth scrolling, and image scaling.
- Responsive checks: 1440px desktop, 1024px reference width, 768px tablet, and 390px mobile.
