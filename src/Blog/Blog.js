import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>what is `cors`?</h2>
            <p>Cross-Origin Resource Sharing CORS is an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>

            <h2>  Why are you using `firebase`? </h2>
            <p> Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. </p>

            <h2> What other options do you have to implement authentication? </h2>
            <p> Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. </p>

            <h2>  How does the private route work?</h2>
            <p> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). </p>

            <h2> What is Node?</h2>
            <p> Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications </p>

            <h2> How does Node work? </h2>
            <p> It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. </p>
        </div>
    );
};

export default Blog;