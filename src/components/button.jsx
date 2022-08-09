import React from "react";
import './button.css'

const STYLES = [
    "btn--primary--solid"
    "btn--warning--solid"
    "btn--danger--solid"
    "btn--success--solid"
    "btn--primary--outline"
    "btn--warning--outline"
    "btn--danger--outline"
    "btn--success--outline"
]

const SIZE = ["btn--medium", "btn--small"]


export const button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) 
        ? buttonStyle 
        : STYLES[0]

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZE[0] 

    return (
        <button onClick={onClick} type={type}>
            {children}
        </button>
    )
}    

