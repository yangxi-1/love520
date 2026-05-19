"use client";

export default function FlipCard({

    image,
    flipped,
    onClick,
    index

}) {

    return (

        <div
            className="perspective cursor-pointer"
            onClick={onClick}
        >

            <div
                className={`
                    relative
                    w-full

                    ${index % 5 === 0
                        ? "h-[520px]"
                        : index % 4 === 0
                            ? "h-[280px]"
                            : index % 3 === 0
                                ? "h-[420px]"
                                : "h-[360px]"
                    }

                    duration-700
                    transform-style-preserve-3d

                    ${flipped ? "rotate-y-180" : ""}
                `}
            >

                {/* Front */}
                <div
                    className="
                        absolute
                        inset-0
                        backface-hidden
                        rounded-[2rem]
                        overflow-hidden

                        bg-white/10
                        border
                        border-white/10

                        backdrop-blur-xl

                        flex
                        items-center
                        justify-center

                        text-white/60
                        text-lg

                        shadow-2xl
                    "
                >

                    ✨ Click To Open

                </div>

                {/* Back */}
                <div
                    className="
                        absolute
                        inset-0
                        rotate-y-180
                        backface-hidden
                        rounded-[2rem]
                        overflow-hidden
                        shadow-2xl
                        bg-black
                    "
                >

                    <img
                        src={image}
                        alt="memory"

                        className="
                            w-full
                            h-full
                            object-contain

                            hover:scale-[1.03]

                            transition
                            duration-700
                        "
                    />

                </div>

            </div>

        </div>
    );
}