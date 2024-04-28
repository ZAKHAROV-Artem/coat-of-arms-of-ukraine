"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Intro() {
  const introContainer = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [intro, setIntro] = useState<boolean>(true);
  const [introAppeared, setIntoAppeared] = useState<boolean>(false);
  const [showPage, setShowPage] = useState<boolean>(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  useGSAP(
    () => {
      gsap
        .timeline()
        .fromTo(
          ".show-me",
          { y: "100%", opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.5 },
        )
        .fromTo(
          ".tridents",
          { y: "10%", opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: -2, stagger: 0.5 },
        )
        .then(() => {
          setIntoAppeared(true);
        });
    },
    { scope: introContainer },
  );

  useGSAP(
    () => {
      if (loaded && introAppeared) {
        gsap
          .timeline()
          .to(".show-me", {
            y: "100%",
            opacity: 0,
            delay: 2,
            duration: 1,
            stagger: -0.5,
          })
          .to(".tridents", {
            y: "10%",
            opacity: 0,
            delay: -2,
            duration: 1,
            stagger: -0.5,
          })
          .then(() => {
            setIntro(false);
            setTimeout(() => {
              setShowPage(true);
            }, 500);
          });
      }
    },
    { dependencies: [loaded, introAppeared], scope: introContainer },
  );
  if (showPage) return null;
  return (
    <div
      ref={introContainer}
      className={cn("absolute z-50 h-screen w-full bg-primary duration-500", {
        "opacity-0": !intro,
      })}
    >
      <div className="absolute flex h-full flex-col justify-between overflow-hidden md:gap-y-20">
        <Image
          className="tridents max-h-[240px] grow object-cover opacity-0 md:max-h-[400px]"
          src="/tridents-01.png"
          alt="Group of tridents 1"
          width={3029}
          height={470}
        />
        <Image
          className="tridents max-h-[240px] grow object-cover opacity-0 md:max-h-[400px]"
          src="/tridents-02.png"
          alt="Group of tridents 2"
          width={3029}
          height={470}
        />
        <Image
          className="tridents max-h-[240px] grow object-cover opacity-0 md:max-h-[400px]"
          src="/tridents-03.png"
          alt="Group of tridents 3"
          width={3029}
          height={470}
        />
      </div>
      <div className="relative z-10 grid h-screen place-content-center place-items-center gap-y-5">
        <div className="overflow-hidden">
          <svg
            className="show-me opacity-0"
            width="297"
            height="296"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M148.425 291.319C66.3905 291.319 45.1729 287.32 26.9864 269.082C8.70214 251.039 4.69329 230.168 4.69329 148.049C4.69329 66.2221 8.70214 45.1558 26.9864 26.918C45.0751 8.68007 66.3905 4.68138 148.425 4.68138C230.46 4.68138 251.678 8.68007 269.864 26.918C288.148 45.0583 292.157 65.9295 292.157 148.049C292.157 230.168 288.148 251.039 269.864 269.18C251.678 287.417 230.362 291.319 148.425 291.319ZM148.425 296C231.536 296 253.927 291.806 273.286 272.496C292.744 253.087 296.851 230.851 296.851 147.951C296.851 65.0517 292.744 42.9127 273.286 23.4069C253.829 4.19374 231.438 0 148.425 0C65.315 0 42.924 4.19374 23.5642 23.5044C4.20441 42.9127 0 65.1493 0 148.049C0 230.948 4.10663 253.087 23.5642 272.593C42.924 291.806 65.315 296 148.425 296Z"
              fill="#EAC91C"
            />
            <path
              d="M141.825 249.66C131.03 241.471 123.251 229.189 120.625 214.956H85.9081V65.028C104.482 74.3863 117.902 94.8576 119.361 116.109L124.612 158.221L122.084 157.929C116.541 157.929 111.678 163.193 111.678 168.359C111.678 173.234 115.374 177.328 120.236 178.4L126.557 179.862C136.963 160.073 142.895 140.674 142.895 121.665C142.895 104.508 140.658 87.3515 140.269 69.8046C140.269 62.006 143.284 54.8898 148.049 49.3333C152.911 54.8898 155.828 62.006 155.828 69.8046C155.828 87.3515 153.203 104.508 153.203 121.665C153.203 140.674 159.135 160.073 169.54 179.862L175.861 178.4C180.723 177.328 184.419 173.136 184.419 168.359C184.419 163.095 179.557 157.929 174.013 157.929L171.388 158.319L176.639 116.206C179.265 94.9551 191.518 74.3863 210.092 65.1255V215.054H175.472C172.847 229.189 165.456 241.959 154.272 249.757C151.647 251.61 149.41 253.852 147.951 256.874C146.59 253.852 144.353 251.61 141.825 249.66ZM102.343 163.193C103.801 157.636 107.886 152.762 113.137 149.74L109.053 115.037C107.594 104.216 103.121 94.5652 96.4107 86.6691V163.095H102.343V163.193ZM119.847 204.525C119.847 199.261 120.625 194.485 121.695 189.611L116.832 188.441C109.733 186.199 104.19 180.642 102.343 173.526H96.4107V204.525H119.847ZM142.895 204.525C142.895 198.189 138.032 192.633 131.711 191.853C130.641 195.947 129.864 200.041 129.864 204.525H142.895ZM142.895 215.054H131.322C133.17 223.242 137.254 230.748 142.895 237.085V215.054ZM159.232 182.592C154.759 174.403 150.674 165.825 148.049 156.857C145.423 165.825 141.339 174.403 136.865 182.592C141.339 183.664 145.034 186.686 148.049 190.098C151.063 186.686 154.759 183.664 159.232 182.592ZM166.331 204.525C166.331 200.041 165.553 195.947 164.483 191.853C158.162 192.633 153.3 198.189 153.3 204.525H166.331ZM164.872 215.054H153.3V237.085C158.94 230.651 163.025 223.242 164.872 215.054ZM199.784 204.525V173.526H193.852C192.004 180.642 186.364 186.199 179.362 188.441L174.5 189.611C175.569 194.485 176.347 199.261 176.347 204.525H199.784ZM199.784 163.193V86.6691C193.074 94.4677 188.211 104.216 187.142 115.037L183.057 149.74C188.309 152.762 192.393 157.539 193.852 163.193H199.784Z"
              fill="#EAC91C"
            />
          </svg>
        </div>
        <div className="space-y-3 text-center text-light-gray">
          <div className="overflow-hidden">
            <h1 className="show-me px-3 py-2 text-4xl opacity-0 sm:text-5xl md:text-6xl">
              Український тризуб
            </h1>
          </div>
          <div className="overflow-hidden">
            <h2 className="show-me text-2xl opacity-0 sm:text-3xl md:text-4xl">
              Coat of arms of Ukraine
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
