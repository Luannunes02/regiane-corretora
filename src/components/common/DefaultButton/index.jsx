import React from "react";

import "./button.scss";

export default function DefaultButton({ content, className }) {
    return (
        <button id="DefaultButton" className={className}>
            <span>{content}</span>
            <div className="top"></div>
            <div className="left"></div>
            <div className="bottom"></div>
            <div className="right"></div>
        </button>

    )
}