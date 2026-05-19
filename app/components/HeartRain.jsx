"use client";

import { useEffect, useState } from "react";

export default function HeartRain() {

    const [hearts, setHearts] = useState([]);

    useEffect(() => {

        const icons = [
            "💗",
            "💗",
            "💗",
            "🤍",
            "✨",
            "❀",
        ];

        const generated = Array.from({ length: 30 }).map((_, i) => ({

            id: i,

            icon: icons[Math.floor(Math.random() * icons.length)],

            left: Math.random() * 100,

            delay: Math.random() * 10,

            duration: 8 + Math.random() * 8,

            size: 12 + Math.random() * 18,

            opacity: 0.25 + Math.random() * 0.15,

        }));

        setHearts(generated);

    }, []);

    return (

        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

            {hearts.map((heart) => (

                <div
                    key={heart.id}

                    className="absolute top-[-10%] animate-heartRain"

                    style={{
                        left: `${heart.left}%`,
                        animationDelay: `${heart.delay}s`,
                        animationDuration: `${heart.duration}s`,
                        fontSize: `${heart.size}px`,
                        opacity: heart.opacity,
                    }}
                >
                    {heart.icon}
                </div>

            ))}

        </div>

    );
}