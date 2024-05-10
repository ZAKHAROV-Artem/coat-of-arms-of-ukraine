"use client";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { FaLink, FaCircleInfo, FaRocket } from "react-icons/fa6";
import Link from "next/link";
import FloatingNavbarItem from "./floating-navbar-item";
export default function FloatingNavbar() {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>();
  const [show, setShow] = useState<boolean>(false);
  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .fromTo(
          ".fm-item",
          {
            y: 112,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.2,
            stagger: {
              from: "start",
              amount: 0.3,
            },
          },
        )
        .reversed(true);
    },
    { scope: container },
  );
  const toggleTimeline = contextSafe(() => {
    if (!tl.current) return;
    tl.current.reversed(!tl.current.reversed());
    setShow(!tl.current.reversed());
  });
  return (
    <div ref={container} className="fixed bottom-3 right-2 lg:hidden">
      <button
        onClick={toggleTimeline}
        className="absolute bottom-0 right-0 z-10 grid h-14 w-14 place-content-center rounded-full bg-wheat"
      >
        {show ? (
          <IoClose className="h-7 w-7 text-black" />
        ) : (
          <IoIosMenu className="h-7 w-7 text-black" />
        )}
      </button>

      <FloatingNavbarItem
        href="/service"
        onClick={toggleTimeline}
        bottom="bottom-16"
      >
        <FaCircleInfo className="h-6 w-6 text-wheat" />
      </FloatingNavbarItem>
      <FloatingNavbarItem
        href="/links"
        onClick={toggleTimeline}
        bottom="bottom-32"
      >
        <FaLink className="h-6 w-6 text-wheat" />
      </FloatingNavbarItem>
      <FloatingNavbarItem
        href="/about"
        onClick={toggleTimeline}
        bottom="bottom-48"
      >
        <svg
          width="17"
          height="28"
          viewBox="0 0 17 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.34534 27.0268C10.823 25.922 11.888 24.2649 12.2475 22.3448H17V2.11743C14.4573 3.37999 12.6202 6.14185 12.4205 9.00892L11.7016 14.6905L12.0478 14.651C12.8066 14.651 13.4722 15.3612 13.4722 16.0582C13.4722 16.7158 12.9663 17.2682 12.3007 17.4129L11.4354 17.6101C10.011 14.9403 9.1989 12.3232 9.1989 9.75857C9.1989 7.44387 9.50509 5.12917 9.55834 2.76186C9.55834 1.70972 9.14565 0.749648 8.49334 0C7.82772 0.749648 7.42835 1.70972 7.42835 2.76186C7.42835 5.12917 7.78778 7.44387 7.78778 9.75857C7.78778 12.3232 6.97572 14.9403 5.55129 17.6101L4.68598 17.4129C4.02036 17.2682 3.51449 16.7027 3.51449 16.0582C3.51449 15.3481 4.18011 14.651 4.93892 14.651L5.29836 14.7036L4.57948 9.02208C4.22005 6.155 2.54268 3.37999 -2.12134e-07 2.13058V22.3579H4.73923C5.09867 24.2649 6.11041 25.9878 7.64135 27.0399C8.00078 27.2898 8.30697 27.5923 8.50666 28C8.69303 27.5923 8.99922 27.2898 9.34534 27.0268ZM14.7502 15.3612C14.5505 14.6116 13.9914 13.954 13.2725 13.5463L13.8316 8.86426C14.0313 7.40442 14.6437 6.1024 15.5623 5.03711V15.3481H14.7502V15.3612ZM12.354 20.9375C12.354 20.2273 12.2475 19.5829 12.101 18.9253L12.7666 18.7675C13.7385 18.465 14.4973 17.7154 14.7502 16.7553H15.5623V20.9375H12.354ZM9.1989 20.9375C9.1989 20.0827 9.86453 19.333 10.7298 19.2278C10.8763 19.7802 10.9828 20.3326 10.9828 20.9375H9.1989ZM9.1989 22.3579H10.7831C10.5301 23.4627 9.97103 24.4753 9.1989 25.3302V22.3579ZM6.96241 17.9784C7.57479 16.8737 8.13391 15.7163 8.49334 14.5063C8.85278 15.7163 9.4119 16.8737 10.0243 17.9784C9.4119 18.1231 8.90603 18.5308 8.49334 18.9911C8.08066 18.5308 7.57479 18.1231 6.96241 17.9784ZM5.9906 20.9375C5.9906 20.3326 6.0971 19.7802 6.24354 19.2278C7.10885 19.333 7.77447 20.0827 7.77447 20.9375H5.9906ZM6.19029 22.3579H7.77447V25.3302C7.00235 24.4622 6.44323 23.4627 6.19029 22.3579ZM1.41112 20.9375V16.7553H2.22318C2.47612 17.7154 3.24824 18.465 4.20674 18.7675L4.87236 18.9253C4.72592 19.5829 4.61942 20.2273 4.61942 20.9375H1.41112ZM1.41112 15.3612V5.03711C2.32968 6.08924 2.9953 7.40442 3.14174 8.86426L3.70086 13.5463C2.98199 13.954 2.42287 14.5984 2.22318 15.3612H1.41112Z"
            fill="#EAC91C"
          />
        </svg>
      </FloatingNavbarItem>
      <FloatingNavbarItem
        href="/about"
        onClick={toggleTimeline}
        bottom="bottom-64"
      >
        <FaRocket className="h-6 w-6 text-wheat" />
      </FloatingNavbarItem>
    </div>
  );
}
