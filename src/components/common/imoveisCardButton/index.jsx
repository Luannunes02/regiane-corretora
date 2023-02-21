import React from "react";

import "./button.scss";

export default function ImoveisCardButton({ content, className }) {
    return (
        <button className={`shadow__btn ${className}`}>
            {content}
        </button>

    )
}