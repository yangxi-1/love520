"use client";

import { useEffect, useState, useRef } from "react";
import FireworksBackground from "../components/FireworksBackground";
import FlipCard from "../components/FlipCard";
import BGM from "../components/BGM";
import HeartRain from "../components/HeartRain";

const photos = Array.from({ length: 34 }, (_, index) => ({
    id: index + 1,
    image: `/photo_wall/image${index + 1}.webp`,
}));




export default function Love520Page() {

    const [pageReveal, setPageReveal] = useState(false);

    const [openedIndex, setOpenedIndex] = useState(-1);


    const handleOpen = () => {

        let current = 0;

        const interval = setInterval(() => {

            setOpenedIndex(current);

            current++;

            if (current >= photos.length) {
                clearInterval(interval);
            }

        }, 1000);
    };


    const timeline = [
        {
            date: "2025.08.21",
            title: "第一次见面！",
            desc: `那天其实很普通，但我们在一起了。
    我们一起拘谨地玩了游戏，还给你买了个小狗机。
    
    小小一只的可爱学妹，
    临走之前没忍住亲了你。`,
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

    一起看了电影！抱紧爆米花的样子真可爱。
    仿佛在说：“谁都别想抢我爆米花！”

    音乐喷泉也很浪漫！
    “我还不想回去，宝宝……”

    那晚的金鸡湖的晚风好甜……`,
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

    还记得当时给你做了一张表情包：收到！

    -“啊啊啊啊啊（大声嚎叫）！
      我不想回去了，呜呜。” （哭）
    -“不行！”（坏笑，偷偷拿出手机拍照）
    
    仿佛又看到那晚背起你
    穿梭在人群中的身影。`,
            images: ["/images/first-train.webp",
                "/images/little-one.webp"
            ]
        },
        {
            date: "2025.10.05",
            title: "国庆节到啦！",
            desc:
                `-“我们永远不会分开的，宝宝！”
    -“好！”

    我们结婚啦！

    -“我们明年这个时候还要再来这里一趟！”

    十月份了，还是很热，
    但真的很开心！
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
            desc: `-“宝宝，我想你了！”
    -“我也想你！等我考完研，我去找你，宝宝！”
    
    一只茂密偷看了一眼屏幕……
    
    -坏狗心里话：嘿嘿，在你脸上画画！
    
    “宝宝认真学习的样子真帅！”
    
    “考研古战场”很冷，
    但崽崽给我买的帽子很温暖……`,
            images: ["/images/video-shot1.webp",
                "/images/video-shot2.webp",
                "/images/video-shot3.webp",
                "/images/video-shot4.webp",
            ]
        },
        {
            date: "2025.12.21",
            title: "快速等待——考研结束啦！",
            desc: `-“宝宝，你回宿舍的时候去拿一下快递哇！”（神秘兮兮）
    -“哈？”（幸福、开心……崽崽真的一直在背后支持着我……

    谢谢你一直以来的坚持和陪伴，宝宝！
    `,
            images: ["/images/victory.webp",
            ]
        },
        {
            date: "2025.12.27",
            title: "鸭溪空降！",
            desc: `-“宝宝，你看高德地图，我们在靠近哦！”
    -“我已经等不及了，宝宝！”

    -“我要喝酒！我就要！”
    -“好吧，只能我在的时候喝哦！”

    一只茂密半夜爬到了某人的身上，蹭蹭~

    那晚的猪骨汤很好喝，
    喝完有两只小猪找不到回酒店的路了……
    `,
            images: [
                "/images/ticket.webp",
                "/images/first-night.webp",
            ]
        },
        {
            date: "2026.01.19",
            title: "鸡鸭在昆山的第一次会晤——见陆老师！",
            desc: `-“哼，你刚刚见面的时候感觉你都没有很高兴！”（欺负病号ing
    -“我感觉有点不舒服，宝宝……”

    -“你俩是我想的那种关系吗？”
    -“……”
    
    再次回到震川，故地重游，何尝不是刻舟求剑呢？
    好在，时隔三年后，我们在一起了……
    `,
            images: [
                "/images/first-meet-in-ks.webp",
                "/images/first-meet-in-ks-2.webp",
                "/images/zc.webp",

            ]
        },
        {
            date: "2026.01.20-2026.03.01",
            title: "图书馆约会！",
            desc: `虽然刮风下雨，但风雨无阻……

    每天短暂的约会
    但一起学习、一起吃午饭、一起散步吃板栗……

    冬天的风好大，我们靠的好紧，
    我们经历了好多……
    `,
            images: [
                "/images/sleep-happy.webp",
                "/images/after-school-kiss.webp",
                "/images/iloveu.webp",
            ]
        },
        {
            date: "2026.03.02",
            title: "第一次陪茂密过生日！",
            desc: `-“我肯定拼的比你快！”

    -某勾：“拼累了，休息一会……”
    茂密拿走某勾拼豆盘……
    -茂密：“对，你累了，要休息一会！”

    寒假过得好快……
    美好的时光都好短暂啊……
    `,
            images: [
                "/images/birthday.webp",
                "/images/cry-bye.webp",
            ]
        },
        {
            date: "2026.04.10",
            title: "看望西瑶茂！",
            desc: `-“西瑶茂！”
    -“诶！”
    
    -“gogogo，出发咯！”

    悄悄告诉你：
    顶着关心你的身体为理由，
    其实只是想你啦~
    `,
            images: [
                "/images/ride-cat.webp",
                "/images/kiss-hotel.webp",
                "/images/your-school.webp"
            ]
        },

    ];
    const [openLetter, setOpenLetter] = useState(false);
    const [openEnvelope, setOpenEnvelope] = useState(false);
    const [shown, setShown] = useState("");
    const letterRef = useRef<HTMLDivElement>(null);
    const [closingLetter, setClosingLetter] = useState(false);
    const [showEnding, setShowEnding] = useState(false);


    const fullText = `遇见你以后，时间忽然不再只是日历上翻过去的数字。

  它开始有了温度。
  有时候是晚风的温度，
  有时候是你掌心的温度。
  
  它也开始有了颜色。
  原本那些平淡到几乎快被遗忘的日子，
  因为你，慢慢染上了黄昏、灯光、晚霞，还有心动的颜色。
  
  我偶尔也会想，
  如果没有遇见你，现在的我会是什么样子。
  
  也许还是一个人安安静静地生活，
  习惯沉默，习惯把所有情绪藏起来。
  日子会照常向前走，只是少了一些期待，少了一些牵挂。
  那样的人生，大概像一场没有光影的电影，安静、平淡，只有黑白。
  
  可命运偏偏让你闯进了我的世界。
  
  时间说长不长，说短也不短。
  就在这将近一年的时光里，我们一起经历了好多事情。
  
  一起在南苏骑着电瓶车看晚霞，
  一起在恋爱博物馆热烈拥吻，
  一起在深夜里互相深情告白，
  一起在寒冬学习到深夜，
  一起在夜晚压着马路吹风，
  一起在人潮里紧紧牵着手，
  一起在分别的时候偷偷红了眼眶。
  
  有时候我甚至会想，
  在另一个平行时空里，2025年8月21日那天的我，会不会做出了另一个选择。
  
  如果那天我没有吻你，
  或许我们的故事，就会像两条短暂交汇后又渐渐远离的线。
  我们依然会各自生活，
  只是偶尔在某个深夜忽然想起彼此，
  然后带着一点遗憾，
  继续走向不同的人生。
  
  可幸运的是，
  在这个宇宙里，我吻了你。
  
  于是后来的一切都开始变得不一样了。
  
  现在的我，只想陪你向着未来慢慢走下去。
  想陪你去更多地方，看更多风景。
  想陪你度过一个又一个普通却闪闪发光的日子。
  
  因为你出现以后，
  我开始真正期待“以后”这两个字了。
  我爱你，今天，明天，每一天……  

  ———— from 鸭溪雪仗
  鸭溪的温馨提示：点击空白处关闭信件哦！
    `;
    const handleCloseLetter = () => {

        setClosingLetter(true);

        setTimeout(() => {

            setOpenLetter(false);

            setClosingLetter(false);

            // 🌙 片尾文字
            setShowEnding(true);

            setTimeout(() => {

                setShowEnding(false);

            }, 9999);

        }, 500);

    };
    useEffect(() => {

        setPageReveal(true);

    }, []);
    useEffect(() => {

        if (!openLetter) return;

        let i = 0;

        setShown("");

        const interval = setInterval(() => {

            setShown(fullText.slice(0, i));

            i++;

            if (i > fullText.length) {
                clearInterval(interval);
            }

        }, 150);

        return () => clearInterval(interval);

    }, [openLetter]);
    useEffect(() => {

        if (!letterRef.current) return;

        letterRef.current.scrollTo({

            top: letterRef.current.scrollHeight,

            behavior: "smooth",

        });


    }, [shown]);


    return (



        <div
            className="
        min-h-screen
        bg-[#0a0a0a]
        text-white/90
        overflow-x-hidden
        relative
      "
        >
            <div
                className={`
    fixed
    inset-0

    bg-black

    z-[999]

    pointer-events-none

    transition-opacity
    duration-[6000ms]
    ease-out

    ${pageReveal
                        ? "opacity-0"
                        : "opacity-100"
                    }
  `}
            />
            <BGM>

            </BGM>
            <HeartRain />
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

                <div className="space-y-52 md:space-y-64">

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
                      animate-[float_6s_ease-in-out_infinite]

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
            grid
            grid-cols-2
            md:grid-cols-3
            xl:grid-cols-4
            gap-8
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

                            // setOpenEnvelope(true);

                            setTimeout(() => {

                                setOpenLetter(true);

                            }, 1200);

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
                        💌 你有一封未读的信
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
                {openEnvelope && !openLetter && (

                    <div
                        className="
    fixed inset-0
    z-50
    flex items-center justify-center
    bg-black/70
    backdrop-blur-md
  "
                    >

                        <div className="relative w-[320px] h-[220px]">

                            {/* 信封主体 */}
                            <div
                                className="
        absolute bottom-0
        w-full h-[180px]
        bg-gradient-to-br
        from-pink-100
        to-pink-200
        rounded-xl
        shadow-2xl
      "
                            />

                            {/* 信封盖 */}
                            <div
                                className="
    absolute top-0 left-0
    w-full h-[140px]
    origin-top
  "

                                style={{
                                    clipPath: "polygon(0 0, 50% 100%, 100% 0)",

                                    background:
                                        "linear-gradient(to bottom right, #fbcfe8, #f9a8d4)",

                                    animation:
                                        "envelopeOpen 1.2s ease forwards",
                                }}
                            />

                            {/* 小爱心 */}
                            <div
                                className="
        absolute inset-0
        flex items-center justify-center
        text-4xl
      "
                            >
                                💌
                            </div>

                        </div>

                    </div>

                )}
                {(openLetter || closingLetter) && (

                    <div
                        className="
    fixed inset-0
    z-50

    flex items-center justify-center

    bg-black/70
    backdrop-blur-md
  "

                        onClick={handleCloseLetter}
                    >

                        <div

                            onClick={(e) => e.stopPropagation()}

                            className={`
      relative

      w-[95%]
      max-w-2xl

      h-[80vh]

      rounded-3xl

      p-10

      bg-gradient-to-br
      from-[#fffaf0]
      to-[#f7efe3]

      border border-[#e8dccb]

      shadow-2xl

      text-black

      overflow-hidden

      flex flex-col

      transition-all
      duration-500
      ease-in-out

      ${closingLetter
                                    ? "scale-75 opacity-0"
                                    : "scale-100 opacity-100"}
    `}
                        >

                            {/* 装饰角 */}
                            <div className="absolute top-4 left-4 text-pink-200">
                                ❀
                            </div>

                            <div className="absolute top-4 right-4 text-pink-200">
                                ❀
                            </div>

                            {/* 标题 */}
                            <div className="text-center mb-8">

                                <div className="text-3xl mb-4">
                                    💌
                                </div>

                                <h2 className="text-3xl font-light">
                                    给崽崽的一封信
                                </h2>

                            </div>

                            {/* 内容 */}
                            <div
                                ref={letterRef}

                                className="
        flex-1
        overflow-y-auto
        pr-2
      "
                            >

                                <p
                                    className="
          leading-10
          text-gray-700
          whitespace-pre-line
          text-lg
          font-light
        "
                                >
                                    {shown}

                                    {shown.length < fullText.length && (
                                        <span className="animate-pulse">
                                            |
                                        </span>
                                    )}

                                </p>

                            </div>

                        </div>

                    </div>

                )}

            </section>

            {showEnding && (

                <div
                    className="
    fixed inset-0
    z-[100]

    flex items-center justify-center

    bg-black/40
    backdrop-blur-sm

    animate-endingFade
    pointer-events-none
  "
                >

                    <div className="text-center px-8">

                        <p
                            className="
        text-white/90
        text-2xl
        md:text-4xl

        leading-[2.4]

        font-light
      "
                        >
                            卿似人间惊鸿，
                            <br />
                            世间万般景，
                            <br />
                            唯卿入我心。
                            <br /><br />

                            执子之手，
                            与子偕老，
                            <br />
                            不负韶华，
                            不负卿……
                        </p>

                    </div>

                </div>

            )}

        </div>

    );
}