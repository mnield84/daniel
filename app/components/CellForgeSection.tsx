import React from "react";
import { motion } from "framer-motion";
// import segmentAsset from "../assets/segment.svg";
const segmentAsset = "/assets/segment.svg";
import scope from "../assets/unique/scope.svg";
import gen from "../assets/unique/gen.svg";
import scalable from "../assets/unique/scalable.svg";

const deg2rad = (d: number) => (d * Math.PI) / 180;

type Seg = {
  id: number | string;
  title: string;
  description: string;
  icon: string;
  startAngle?: number;
  topOffset?: number; // Custom top positioning adjustment
};

type Props = {
  segments?: Seg[];
  gapDeg?: number;
  rotationOffsetDeg?: number;
  colors?: {
    centerText: string;
    title: string;
    body: string;
  };
};

function donutPath(
  cx: number,
  cy: number,
  rInner: number,
  rOuter: number,
  startDeg: number,
  endDeg: number
) {
  const a = (d: number) => (d * Math.PI) / 180;
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;

  const p1 = {
    x: cx + rOuter * Math.cos(a(startDeg)),
    y: cy + rOuter * Math.sin(a(startDeg)),
  };
  const p2 = {
    x: cx + rOuter * Math.cos(a(endDeg)),
    y: cy + rOuter * Math.sin(a(endDeg)),
  };
  const p3 = {
    x: cx + rInner * Math.cos(a(endDeg)),
    y: cy + rInner * Math.sin(a(endDeg)),
  };
  const p4 = {
    x: cx + rInner * Math.cos(a(startDeg)),
    y: cy + rInner * Math.sin(a(startDeg)),
  };

  return [
    `M ${p1.x} ${p1.y}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 0 ${p4.x} ${p4.y}`,
    "Z",
  ].join(" ");
}

export default function CellForgeSection({
  segments,
  gapDeg = 8,
  rotationOffsetDeg = -90,
  colors = {
    centerText: "#4B2A4B",
    title: "#D745B2",
    body: "#4B2A4B",
  },
}: Props) {
  const defaultSegments: Seg[] = [
    {
      id: 1,
      title: "Reproducible",
      description: "Every batch meets the desired profile",
      icon: scope,
      topOffset: 190,
    },
    {
      id: 2,
      title: "Scalable",
      description: "iOB can deliver desired cells at unprecedented volume",
      icon: scalable,
      topOffset: 170,
    },
    {
      id: 3,
      title: "Generalizable",
      description: "CellForge™ can access any cell or organoid type",
      icon: gen,
      topOffset: 170,
    },
    {
      id: 4,
      title: "Adaptable",
      description: "CellForge™ can use any cells as input",
      icon: scope,
      topOffset: 170,
    },
    {
      id: 5,
      title: "Digitally Defined Cell Profile",
      description: "Every batch meets a fully defined biological profile",
      icon: gen,
      topOffset: 190,
    },
  ];
  const items = Array.isArray(segments) ? segments : defaultSegments;

  // drawing space
  const size = 900;
  const cx = size / 2;
  const cy = size / 2;

  // how much of the segment.svg to reveal (acts like a mask)
  const wedgeOuterR = 420; // outer radius of the visible wedge
  const wedgeInnerR = 120; // inner radius (bigger -> thinner wedge)

  const labelR = 255; // label orbit radius

  const N = items.length;
  const step = 360 / N;

  const withAngles = items.map((seg, i) => {
    const base = seg.startAngle ?? rotationOffsetDeg + i * step; // where the wedge starts
    const start = base + gapDeg / 2;
    const end = base + step - gapDeg / 2;
    const mid = (start + end) / 2;
    return { ...seg, base, start, end, mid, i };
  });

  return (
    <>
      <style>{`
        .segment-content {
          top: calc(var(--mobile-top) * 1px);
        }
        @media (min-width: 768px) {
          .segment-content {
            top: calc(var(--desktop-top) * 1px) !important;
          }
        }
      `}</style>
      <section className="w-full bg-white py-16 font-poppins md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <h2 className="mb-4 text-center text-3xl font-medium text-[#4B2A4B] md:text-4xl">
            CellForge: Accelerating Breakthroughs Through AI-Powered Cell
            Manufacturing
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
            You have bold ideas. We have the cells to match your pace. CellForge
            uses AI-powered manufacturing to produce reliable, ready-to-use
            cells when you need them so your projects never wait on production.
          </p>

          <div className="relative mx-auto aspect-square w-full max-w-[1000px]">
            <svg
              viewBox={`0 0 ${size} ${size}`}
              className="absolute inset-0 h-full w-full"
            >
              {/* center ring + label */}
              <motion.circle
                cx={cx}
                cy={cy}
                fill="none"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transform-origin={`${cx}px ${cy}px`}
                transition={{ duration: 1 }}
              />
              <text
                x={cx}
                y={cy + 10}
                textAnchor="middle"
                className="font-bold"
                style={{ fontSize: 48, fill: colors.centerText }}
              >
                CellForge
              </text>
            </svg>

            {/* HTML labels at mid-angle */}
            <div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              {withAngles.map((s) => {
                const x = cx + labelR * Math.cos(deg2rad(s.mid));
                const y = cy + labelR * Math.sin(deg2rad(s.mid));

                // Calculate specific rotation for each segment to create the circle
                const segmentRotations = [216, 288, 0, -288, -216]; // 360/5 = 72 degrees per segment
                const segmentRotation = segmentRotations[s.i];

                return (
                  <motion.div
                    key={`label-${s.id}`}
                    className="absolute flex w-[170px] h-[120px] md:w-[476px] md:h-[424px] flex-col items-center justify-center text-center"
                    style={{
                      left: `${(x / size) * 100}%`,
                      top: `${(y / size) * 100}%`,
                      backgroundImage: `url(${segmentAsset})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    initial={{
                      opacity: 0,
                      y: 8,
                      rotate: segmentRotation,
                      x: "-50%",
                    }}
                    animate={{
                      opacity: 1,
                      y: "-50%",
                      rotate: segmentRotation,
                      x: "-50%",
                    }}
                    transition={{ duration: 0.4, delay: 0.15 + s.i * 0.05 }}
                  >
                    <div
                      className="absolute z-10 flex max-w-[190px] md:max-w-[190px] flex-col items-center segment-content"
                      style={
                        {
                          transform: `rotate(${-segmentRotation}deg)`,
                          "--mobile-top": s.topOffset
                            ? Math.round(s.topOffset * 0.3)
                            : 0,
                          "--desktop-top": s.topOffset || 0,
                        } as React.CSSProperties
                      }
                    >
                      <div className="mb-1 md:mb-3 inline-flex h-6 w-6 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#47284D] border-2 border-[#fff]">
                        <img
                          src={s.icon}
                          alt=""
                          className="h-3 w-3 md:h-6 md:w-6"
                          draggable={false}
                        />
                      </div>
                      <h3
                        className="mb-0.5 md:mb-1 text-[10px] md:text-[16px] font-bold leading-tight hidden md:block"
                        style={{ color: colors.title }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="text-[8px] md:text-[12px] leading-tight hidden md:block"
                        style={{ color: colors.body }}
                      >
                        {s.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
