import React from 'react';
// import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const Fag = () => {

    const data = {
        title: " Do you know Web development.",
        rows: [
            {
                title: "what is `cors`?,",
                content: `Cross-Origin Resource Sharing CORS is an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.`,
            },
            {
                title: " Why are you using firebase?",
                content:
                    "Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.",
            },
            {
                title: "What other options do you have to implement authentication?",
                content: `Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. `,
            }
        ],
    };

    const styles = {
        // bgColor: 'white',
        titleTextColor: "blue",
        rowTitleColor: "blue",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };

    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
};

export default Fag;