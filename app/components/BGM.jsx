"use client";

import { useEffect, useRef, useState } from "react";

export default function BGM() {

  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(true);

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.4;

    audio.play().catch(() => {

      console.log("自动播放失败");

    });

  }, []);

  return (
    <>

      <audio
        ref={audioRef}
        id="bgm"
        src="/bgm.mp3"
        loop
      />

      <button

        onClick={() => {

          const audio = audioRef.current;

          if (!audio) return;

          if (audio.paused) {

            audio.play();

            setPlaying(true);

          } else {

            audio.pause();

            setPlaying(false);

          }

        }}

        className="
          fixed
          bottom-6
          left-6
          z-50

          px-4
          py-2

          rounded-full

          bg-white/10
          backdrop-blur-md

          text-white
        "
      >
        {playing ? "🎵 音乐开" : "🔇 音乐关"}
      </button>

    </>
  );

}