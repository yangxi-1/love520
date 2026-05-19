"use client";

import FireworksBackground from "./components/FireworksBackground";
import FlipCard from "./components/FlipCard";
import { useState } from "react";

const photos = Array.from({ length: 35 }, (_, index) => ({
  id: index + 1,
  image: `/photo_wall/image${index + 1}.webp`,
}));

export default function Love520Page() {

  const [openedIndex, setOpenedIndex] = useState(-1);

  const handleOpen = () => {

    let current = 0;

    const interval = setInterval(() => {

      setOpenedIndex(current);

      current++;

      if (current >= photos.length) {
        clearInterval(interval);
      }

    }, 180);
  };


  const timeline = [
    {
      date: "2025.08.21",
      title: "第一次见面！",
      desc: `那天其实很普通，但我们在一起了。
    我们一起拘谨地玩了游戏，还给你买了个小狗机`,
      images: [
        "/images/first-meet.webp",
        "/images/doll.webp"
      ]


    },
    {
      date: "2025.08.29",
      title: "第一次一起过七夕！",
      desc: `好巧的是，七夕刚好在我开学前。

    我们一起敲了一对“经历曲折”的戒指。

    一起看了电影！谁都别想抢我爆米花！

    音乐喷泉也很浪漫！

    “我还不想回去，宝宝……”`,
      images: [
        "/images/our-ring.webp",
        "/images/first-film.webp",
        "/images/first-nightwalk.webp"
      ]
    },
    {
      date: "2025.09.20",
      title: "第一次来苏州找男朋友的小小只……",
      desc: `小小一只勇敢地从扬州来找我~

    收到！

    -“啊啊啊啊啊（大声嚎叫）！
      我不想回去了，呜呜。” （哭）
    -“不行！”（坏笑，偷偷拿出手机拍照）`,
      images: ["images/first-train.webp",
        "images/little-one.webp"
      ]
    },
    {
      date: "2025.10.05",
      title: "国庆节到啦！",
      desc: `
    -“我们永远不会分开的，宝宝！”
    -“好！”

    我们结婚啦！

    -“我们明年这个时候还要再来这里一趟！”
    `,
      images: [
        "/images/love-library.webp",
        "/images/write-in-museum.webp",
        "/images/marry-me.webp"
      ]
    },
    {
      date: "2025.11-2025.12.18",
      title: "考研——背水一战！",
      desc: `
    -“宝宝，我想你了！”
    -“我也想你！等我考完研，我去找你，宝宝！”
    
    一只茂密偷看了一眼屏幕……
    
    -坏狗心里话：嘿嘿，在你脸上画画！
    
    “宝宝认真学习的样子真帅！”`,
      images: ["images/video-shot1.webp",
        "images/video-shot2.webp",
        "images/video-shot3.webp",
        "images/video-shot4.webp",
      ]
    },
    {
      date: "2025.12.21",
      title: "快速等待——考研结束啦！",
      desc: `
    -“宝宝，你回宿舍的时候去拿一下快递哇！”（神秘兮兮）
    -“哈？”（那就原谅你没来找我吧！

    谢谢你一直以来的坚持和陪伴，宝宝！
    `,
      images: ["images/victory.webp",
      ]
    },
    {
      date: "2025.12.27",
      title: "鸭溪空降！",
      desc: `
    -“宝宝，你看高德地图，我们在靠近哦！”
    -“我已经等不及了，宝宝！”

    -“我要喝酒！我就要！”
    -“好吧，只能我在的时候喝哦！”

    一只茂密半夜爬到了某人的身上，蹭蹭~
    `,
      images: [
        "images/ticket.webp",
        "images/first-night.webp",
      ]
    },
    {
      date: "2026.01.19",
      title: "鸡鸭在昆山的第一次会晤——见陆老师！",
      desc: `
    -“哼，你刚刚见面的时候感觉你都没有很高兴！”（欺负病号ing
    -“我感觉有点不舒服，宝宝……”

    -“你俩是我想的那种关系吗？”
    -“……”
    
    再次回到震川，故地重游，何尝不是刻舟求剑呢？
    好在，时隔三年后，我们在一起了……
    `,
      images: [
        "images/first-meet-in-ks.webp",
        "images/first-meet-in-ks-2.webp",
        "images/zc.webp",

      ]
    },
    {
      date: "2026.01.20-2026.03.01",
      title: "图书馆约会！",
      desc: `
    虽然刮风下雨，但风雨无阻……

    每天短暂的约会
    但一起学习、一起吃午饭、一起散步吃板栗……
    那段时光真的很幸福
    `,
      images: [
        "images/sleep-happy.webp",
        "images/after-school-kiss.webp",
        "images/iloveu.webp",
      ]
    },
    {
      date: "2026.03.02",
      title: "第一次陪茂密过生日！",
      desc: `
    -“我肯定拼的比你快！”

    -某勾：“拼累了，休息一会……”
    茂密拿走某勾拼豆盘……
    -茂密：“对，你累了，要休息一会！”

    寒假过得好快……
    美好的时光都好短暂啊……
    `,
      images: [
        "images/birthday.webp",
        "images/cry-bye.webp",
      ]
    },
    {
      date: "2026.04.10",
      title: "看望西瑶茂！",
      desc: `
    -“西瑶茂！”
    -“诶！”
    
    -“gogogo，出发咯！”

    看到你没什么事情，心里放心了不少……
    陪你好好放松两天叭
    `,
      images: [
        "images/ride-cat.webp",
        "images/kiss-hotel.webp",
        "images/your-school.webp"
      ]
    },

  ];

  return (

    <div
      className="
        min-h-screen
        bg-black
        text-white
        overflow-x-hidden
        relative
      "
    >

      <FireworksBackground />

      {/* 背景光晕 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            top-[-100px]
            left-[-100px]
            w-[400px]
            h-[400px]
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

      {/* Hero */}
      <section
        className="
          h-screen
          flex
          flex-col
          justify-center
          items-center
          px-6
          text-center
          relative
          z-10
        "
      >

        <p
          className="
            text-sm
            tracking-[0.3em]
            uppercase
            text-white/50
            mb-4
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
            max-w-4xl
          "
        >
          遇见你之后，
          <br />
          时间开始有了具体的形状。
        </h1>

        <p
          className="
            mt-8
            text-white/60
            max-w-xl
            leading-8
            text-lg
          "
        >
          这是一个偷偷收藏我们回忆的小宇宙，送给我最爱的——崽崽！
        </p>

        <div
          className="
            absolute
            bottom-10
            animate-bounce
            text-white/40
            text-sm
          "
        >
          向下滑动 ↓
        </div>

      </section>

      {/* 时间轴 */}
      <section
        className="
          relative
          max-w-6xl
          mx-auto
          px-6
          py-32
          z-10
        "
      >

        <div
          className="
            absolute
            left-1/2
            top-0
            bottom-0
            w-[1px]
            bg-white/10
            -translate-x-1/2
            hidden
            md:block
          "
        />

        <div className="space-y-40">

          {timeline.map((item, index) => (

            <div
              key={index}

              className={`
                grid
                md:grid-cols-2
                gap-16
                items-center

                ${index % 2 !== 0
                  ? "md:[&>*:first-child]:order-2"
                  : ""
                }
              `}
            >

              {/* 图片 */}
              <div
                className="
                  columns-2
                  gap-4
                  space-y-4
                "
              >

                {item.images.map((img, idx) => (

                  <img
                    key={idx}
                    src={img}
                    alt={item.title}

                    className={`
                      rounded-[2rem]
                      w-full
                      object-cover
                      shadow-2xl
                      hover:scale-[1.02]
                      transition
                      duration-700

                      ${idx % 2 === 0
                        ? "rotate-[-2deg]"
                        : "rotate-[2deg]"
                      }

                      ${idx % 3 === 0
                        ? "translate-y-4"
                        : ""
                      }
                    `}
                  />

                ))}

              </div>

              {/* 文案 */}
              <div>

                <p
                  className="
                    text-pink-300
                    tracking-[0.3em]
                    uppercase
                    text-sm
                    mb-6
                  "
                >
                  {item.date}
                </p>

                <h2
                  className="
                    text-4xl
                    md:text-5xl
                    font-light
                    mb-8
                    leading-tight
                  "
                >
                  {item.title}
                </h2>

                <p
                  className="
                    text-white/70
                    leading-9
                    text-lg
                    whitespace-pre-line
                  "
                >
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* 漂浮照片墙 */}
      <section
        className="
          relative
          z-10
          py-32
          px-6
          max-w-7xl
          mx-auto
        "
      >

        <div className="text-center mb-24">

          <h2
            className="
              text-5xl
              md:text-6xl
              font-light
              mb-8
            "
          >
            还有一些随手记录下的瞬间
          </h2>

          <p
            className="
              text-white/50
              leading-8
              text-lg
              max-w-2xl
              mx-auto
            "
          >
            有些照片甚至已经有点模糊了，
            但那天晚上的风好像还在。
          </p>

        </div>

        <div
          className="
            columns-2
            md:columns-3
            xl:columns-4
            gap-8
            [column-fill:_balance]
          "
        >

          {photos.map((photo, index) => (

            <div
              key={photo.id}

              className={`
                break-inside-avoid
                mb-10
                transition-all
                duration-700

                ${index % 2 === 0 ? "rotate-[-2deg]" : ""}
                ${index % 3 === 0 ? "rotate-[2deg]" : ""}
                ${index % 5 === 0 ? "translate-y-10" : ""}
                ${index % 7 === 0 ? "-translate-y-6" : ""}
                ${index % 4 === 0 ? "scale-[0.96]" : ""}
                ${index % 6 === 0 ? "scale-[1.04]" : ""}
                ${index === 10 ? "scale-[1.12]" : ""}
              `}
            >

              <FlipCard

                image={photo.image}

                index={index}

                flipped={index <= openedIndex}

                onClick={() => {

                  if (openedIndex === -1) {
                    handleOpen();
                  }

                }}

              />

            </div>

          ))}

        </div>



        {/* Ending */}
        <section
          className="
          h-screen
          flex
          flex-col
          justify-center
          items-center
          text-center
          px-6
          relative
          z-10
        "
        >

          <p
            className="
            text-white/40
            tracking-[0.3em]
            uppercase
            mb-6
            text-sm
          "
          >
            The End?
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            font-light
            leading-tight
            max-w-4xl
          "
          >
            谢谢你愿意出现在
            <br />
            我的人生里。
          </h2>

          <button

            onClick={() => {

              document
                .getElementById("final-message")
                ?.scrollIntoView({
                  behavior: "smooth"
                });

            }}

            className="
            mt-16
            px-10
            py-5
            rounded-full
            bg-white
            text-black
            hover:scale-105
            transition
            duration-500
          "
          >
            继续一起往后看
            <br />
            我还想对你说
          </button>

        </section>

      </section>
      {/* Hidden Final Message */}
      <section
        id="final-message"
        className="
    min-h-screen
    flex
    items-center
    justify-center
    px-6
    relative
    z-10
  "
      >

        <div
          className="
      max-w-3xl
      text-center
      backdrop-blur-2xl
      bg-white/5
      border
      border-white/10
      rounded-[3rem]
      p-12
      shadow-2xl
    "
        >

          <p
            className="
        text-pink-300
        tracking-[0.3em]
        uppercase
        text-sm
        mb-6
      "
          >
            Final Hidden Message
          </p>

          <h2
            className="
        text-4xl
        md:text-6xl
        font-light
        leading-tight
        mb-10
      "
          >
            遇见你以后，
            <br />
            我开始期待未来了。
          </h2>

          <p
            className="
        text-white/70
        leading-9
        text-lg
      "
          >
            谢谢你愿意陪我经历这些平凡又闪闪发光的日子。

            <br /><br />

            其实我还想和你一起：

            <br />

            去更多城市，
            <br />
            看更多日落，
            <br />
            养一只小猫，
            <br />
            然后慢慢变老……


            <br /><br />

            所以，

            <br />

            以后继续多多指教吧！
            <br />
            ——from “雪仗”
          </p>

        </div>

      </section>

    </div>
  );
}