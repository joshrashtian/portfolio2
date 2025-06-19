"use client";
import Image from "next/image";

export default function ImageStack() {
  return (
    <div className="no-scrollbar flex h-full w-full snap-x snap-mandatory flex-row items-center justify-start gap-x-2 overflow-x-scroll pt-20 lg:justify-center xl:overflow-x-visible">
      <Image
        src={require("../../(assets)/images/IMG_9034.png")}
        alt="Joshua Rashtian"
        width={190}
        height={190}
        priority
        className="snap-center rounded-3xl shadow-slate-700 duration-500 hover:shadow-2xl lg:scale-100 lg:hover:scale-105"
      />
      <Image
        src={require("../../(assets)/images/STNAward.png")}
        alt="Joshua Rashtian"
        width={250}
        height={250}
        priority
        className="snap-center rounded-3xl shadow-stone-300 duration-500 hover:shadow-2xl lg:scale-100 lg:hover:scale-105"
      />
      <Image
        src={require("../../(assets)/images/DSC00182.JPEG")}
        alt="Joshua Rashtian"
        width={500}
        height={300}
        priority
        className="snap-center rounded-3xl shadow-green-700 duration-500 hover:shadow-2xl lg:scale-100 lg:hover:scale-[1.02]"
      />
      <Image
        src={require("../../(assets)/images/IMG_0810.jpg")}
        alt="Joshua Rashtian"
        width={250}
        height={250}
        priority
        className="snap-center rounded-3xl shadow-slate-400 duration-500 hover:shadow-2xl lg:scale-100 lg:hover:scale-105"
      />
    </div>
  );
}
