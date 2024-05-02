import React from 'react';
import { useCalendlyEventListener, InlineWidget } from 'react-calendly';
import { useEffect, useState } from 'react';

export default function Calendly() {
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setRootElement(document?.getElementById("__next"));
    }, []);
    useCalendlyEventListener({
        onProfilePageViewed: () => console.log("onProfilePageViewed"),
        onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
        onEventTypeViewed: () => console.log("onEventTypeViewed"),
        onEventScheduled: (e) => console.log(e.data.payload),
    });
    return (
        <div className='w-1/2 p-lengthMd2 '>
            <h2 className='font-roboto text-h2 text-purple  pt-lengthSm2 text-center'>Book a 30 mins call <br /></h2>
            <InlineWidget
                url="https://calendly.com/onirbanltd/30min" />
        </div>
    );
}