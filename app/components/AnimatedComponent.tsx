"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedComponent() {
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Create a timeline for the main container
    const mainTl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "power1.inOut" },
    });

    // Shadow breathing effect
    mainTl
      .to(svgRef.current, {
        filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.2))",
        duration: 2,
        ease: "sine.inOut",
      })
      .to(svgRef.current, {
        filter: "drop-shadow(0 15px 12px rgba(0, 0, 0, 0.15))",
        duration: 2,
        ease: "sine.inOut",
      });

    // After the SVG loads, animate individual parts
    const svgElement = svgRef.current.querySelector("svg");
    if (svgElement) {
      // Get all paths and groups in the SVG
      const paths = svgElement.querySelectorAll("path");
      const groups = svgElement.querySelectorAll("g");

      // Animate each path with a slight delay
      paths.forEach((path, index) => {
        gsap.to(path, {
          scale: 1.02,
          duration: 2 + Math.random(),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.1,
        });
      });

      // Animate groups with different effects
      groups.forEach((group, index) => {
        const tl = gsap.timeline({
          repeat: -1,
          yoyo: true,
          defaults: { ease: "sine.inOut" },
        });

        tl.to(group, {
          scale: 1.03,
          duration: 2.5,
          ease: "sine.inOut",
        })
          .to(
            group,
            {
              rotation: 1,
              duration: 3,
              ease: "sine.inOut",
            },
            "-=2"
          )
          .to(
            group,
            {
              y: -5,
              duration: 2,
              ease: "sine.inOut",
            },
            "-=2"
          );
      });

      return () => {
        mainTl.kill();
        gsap.killTweensOf(paths);
        gsap.killTweensOf(groups);
      };
    }
  }, []);

  return (
    <div
      ref={svgRef}
      className="relative w-full h-full"
      style={{ transformOrigin: "center center" }}
    >
      <svg
        width="642"
        height="609"
        viewBox="0 0 642 609"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_26)">
          <rect
            x="100"
            y="67"
            width="442"
            height="442"
            fill="url(#pattern0_1_26)"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_26"
            x="0"
            y="-33"
            width="642"
            height="642"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="50" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.697085 0 0 0 0 0.277447 0 0 0 0 0.729365 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_26"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_26"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern0_1_26"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="scale(0.0005)" />
          </pattern>
          <image
            id="image0_1_26"
            width="2000"
            height="2000"
            preserveAspectRatio="none"
          />
        </defs>
      </svg>
    </div>
  );
}
