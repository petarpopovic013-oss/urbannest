import Image from "next/image";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";

const promiseImages = [
  {
    src: "/images/apartment-living.jpg",
    alt: "Svetao i moderno uređen dnevni boravak",
  },
  {
    src: "/images/apartment-warm.jpg",
    alt: "Topao enterijer savremenog apartmana",
  },
  {
    src: "/images/apartment-kitchen.jpg",
    alt: "Uredna kuhinja spremna za dolazak gostiju",
  },
];

export function BrandPromise() {
  return (
    <section id="kako-radimo" className="brand-promise section section-dark">
      <div className="promise-intro container">
        <Reveal>
          <Logo variant="light" className="promise-logo" />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title promise-title">
            Vi imate stan.
            <br />
            Mi vodimo ceo posao.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="body-copy promise-copy">
            Od prvog upita do poslednje provere nakon odlaska gosta, Urban Nest
            preuzima svakodnevnu operativu kratkoročnog najma.
          </p>
        </Reveal>
      </div>

      <div className="promise-gallery" aria-label="Primeri savremeno uređenih apartmana">
        {promiseImages.map((image, index) => (
          <Reveal key={image.src} delay={90 + index * 80} className="promise-image-reveal">
            <div className="promise-image image-frame">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 759px) 50vw, 34vw"
              />
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`
        .brand-promise {
          overflow: hidden;
          padding-bottom: clamp(106px, 10vw, 154px);
        }

        .promise-intro {
          display: flex;
          max-width: 900px;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }

        .promise-intro > .reveal:first-child {
          display: flex;
          justify-content: center;
        }

        .promise-logo {
          width: 138px;
          max-height: 92px;
          margin: 0 auto 35px;
        }

        .promise-title {
          max-width: 850px;
          color: var(--sand-light);
        }

        .promise-copy {
          max-width: 620px;
          margin: 31px auto 0;
        }

        .promise-gallery {
          display: grid;
          margin-top: clamp(70px, 8vw, 112px);
          gap: 7px;
          grid-template-columns: repeat(3, 1fr);
        }

        .promise-image-reveal,
        .promise-image {
          min-width: 0;
          height: clamp(310px, 32vw, 510px);
        }

        .promise-image::after {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(255, 255, 255, 0.08);
          content: "";
          pointer-events: none;
        }

        @media (max-width: 759px) {
          .brand-promise {
            padding-top: 96px;
            padding-bottom: 94px;
          }

          .promise-logo {
            width: 116px;
            max-height: 78px;
            margin-bottom: 28px;
          }

          .promise-title {
            font-size: clamp(44px, 14vw, 62px);
            line-height: 1.07;
          }

          .promise-copy {
            margin-top: 25px;
            font-size: 14px;
          }

          .promise-gallery {
            margin-top: 62px;
            gap: 6px;
            grid-template-columns: 1fr 1fr;
          }

          .promise-image-reveal,
          .promise-image {
            height: 230px;
          }

          .promise-image-reveal:first-child {
            height: 370px;
            grid-column: 1 / -1;
          }

          .promise-image-reveal:first-child .promise-image {
            height: 370px;
          }

          .promise-image-reveal:first-child img {
            object-position: center 58%;
          }
        }
      `}</style>
    </section>
  );
}
