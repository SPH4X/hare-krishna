"use client";

import { cn } from "../libs/utils";
import NextImage from "next/image";
import { useEffect, useState } from "react";

// Ensure it's a named export
export function Image({ src, fill = false, className = "", loadingAnimation = true, alt = "", onLoad = null, ...props }) {
    const [loaded, setLoaded] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        setLoaded(false);
        setHidden(false);
    }, [src]);

    useEffect(() => {
        if (!loaded) return;
        setTimeout(() => setHidden(true), 3000);
    }, [loaded]);

    return (
        <NextImage
            src={src}
            fill={fill}
            className={cn(
                "bg-cover bg-center bg-transparent",
                loadingAnimation && !loaded && "bg-on-background/20 animate-pulse",
                className
            )}
            alt={alt ?? ""}
            onLoad={() => {
                if (typeof onLoad === "function") onLoad();
                setLoaded(true);
            }}
            {...props}
        />
    );
}
