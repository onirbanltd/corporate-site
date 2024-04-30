
import React from "react";
import { useEffect, useState } from "react";

export interface ScriptProps {
    src: string;
}


export const useExternalScript = (src: string) => {

    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const checkExistingScript = document.querySelector('script[src="${src}"]');

        if (checkExistingScript) {
            setIsLoaded(true);
            return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => setIsLoaded(true);
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script)
        }
    }, [src])

    return isLoaded;
}