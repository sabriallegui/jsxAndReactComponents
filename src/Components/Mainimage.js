import React from "react";
import logo from '../logo.svg'
const Mainimage = () => {
    return (
        <>
            <section id="about-me">
                <h1>
                    Hello, my name is
                    <span className="rotate text-important">John doe</span>,<br />
                    and i make horrible websites.
                </h1>
                {/* t3mlou dux tags images src w lokhra mil public */}
                <img className="avatar" src="John-Doe.jpg" alt="jhon-doe" />
            </section>        </>
    )
}
export default Mainimage