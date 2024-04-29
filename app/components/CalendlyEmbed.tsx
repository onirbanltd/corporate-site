"use client"
import React, { useState, useEffect } from "react";
import { useExternalScript } from "./useExternalScript";

const CalendlyEmbed = ({ url }: { url: string }) => {

    const isScriptLoaded = useExternalScript(
        "https://assets.calendly.com/assets/external/widget.js"
    )
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        if (!isScriptLoaded) {

            const timeout = setTimeout(() => setHasError(true), 10000);
            return () => clearTimeout(timeout);
        }
    }, [isScriptLoaded]);

    if (hasError) {
        return <div>Error loading Calendly widget. Please try again later.</div>;
    }

    if (!isScriptLoaded) {
        return <div>Please wait for Calendly to be loaded...</div>;
    }


    return (
        <>

            <div className="calendly-inline-widget" data-url={url}
            ></div>

        </>
    )

}
export default CalendlyEmbed;