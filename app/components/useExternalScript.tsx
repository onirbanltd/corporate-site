"use client"
import React from "react";
import { useEffect, useState } from "react";

export const useExternalScript = (src: string) => {

    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const checkExistingScript = document.querySelector('script[src="${src}"] async');

        if (checkExistingScript) {
            setIsLoaded(true);
            return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => setIsLoaded(true);
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script)
        }
    }, [src])

    return isLoaded;
}