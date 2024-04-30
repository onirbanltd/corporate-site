import React from "react";
import { useState, useEffect } from "react";

export async function getStaticProps() {
    const scriptContent = await fetch('https://assets.calendly.com/assets/external/widget.js').then(res => res.text());

    return {
        props: {
            scriptContent,
        },
    };
}
interface CalendlyEmbedProps {
    url: string;
    scriptContent?: string; // Optional prop for server-side rendered script
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url, scriptContent }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (!scriptContent) {
            // Handle case where scriptContent is not available (optional)
            console.error("Script content not provided for Calendly embed");
            setHasError(true);
        }
    }, [scriptContent]);

    if (hasError) {
        return <div>Error loading Calendly widget. Please try again later.</div>;
    }

    if (!scriptContent) {
        return null; // Or display a loading message
    }

    return (
        <>
            <script dangerouslySetInnerHTML={{ __html: scriptContent }} />
            <div className="calendly-inline-widget" data-url={url}></div>
        </>
    );
};

export default CalendlyEmbed;