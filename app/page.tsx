"use client";


import { useRouter } from "next/navigation";
import Link from "next/link";

import HeartRain from "./components/HeartRain";
import BGM from "./components/BGM";
import { useEffect, useState, useRef } from "react";

export default function HomePage() {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);

  return (

    <main
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-black
        text-white

        flex
        items-center
        justify-center
      "
    >

      <BGM />

      <HeartRain />

      {/* 转场黑幕 */}
      <div
        className={`
    fixed inset-0
    bg-black
    z-[100]

    transition-all
    duration-[2500ms]

    pointer-events-none

    ${transitioning
            ? "opacity-100"
            : "opacity-0"
          }
  `}
      />



      {/* 背景光晕 */}
      <div className="fixed inset-0 -z-10">

        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]

            w-[420px]
            h-[420px]

            bg-pink-500/20
            blur-3xl
            rounded-full
          "
        />


        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]

            w-[500px]
            h-[500px]

            bg-purple-500/20
            blur-3xl
            rounded-full
          "
        />

      </div>


      {/* 中央内容 */}
      <section className="text-center px-6 z-10 relative z-10">

        <p
          className="
            text-sm
            tracking-[0.4em]
            uppercase
            text-white/40
            mb-6
          "
        >
          For My Love
        </p>

        <h1
          className="
            text-5xl
            md:text-7xl

            font-light
            leading-tight

            max-w-5xl
          "
        >
          遇见你以后，
          <br />
          时间开始有了具体的形状。
        </h1>

        <p
          className="
            mt-10
            text-white/60
            leading-9
            text-lg
            max-w-2xl
            mx-auto
          "
        >
          这是一个偷偷收藏我们回忆的小宇宙。
          <br />
          里面藏着晚风、黄昏、心跳，
          <br />
          还有我很喜欢很喜欢你。
        </p>

        <button

          onClick={async () => {

            // 🌙 开始转场
            setTransitioning(true);

            // 🎵 解锁音频权限
            const audio = new Audio("/bgm.mp3");

            audio.volume = 0;

            try {

              await audio.play();

              audio.pause();

            } catch (e) { }

            // ✨ 等动画播放完
            setTimeout(() => {

              router.push("/memory");

            }, 2500);

          }}

          className="
              mt-16

              px-10
              py-5

              rounded-full

              bg-white
              text-black

              text-lg

              hover:scale-105
              hover:bg-pink-100

              transition-all
              duration-500

              shadow-2xl
            "
        >
          💌 进入我们的回忆
        </button>






      </section>

    </main>

  );

}