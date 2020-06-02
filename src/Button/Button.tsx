import React from 'react';
import style from "./Button.module.scss";


export type ButtonType = {
    title: string
    onClick: () => void
    disabled?: boolean
    className: string

}

const Button = (props:ButtonType) => {
    return (
        <div className={style.button}>
            <button onClick={props.onClick} disabled={props.disabled} className={props.className}>
                {props.title}
            </button>
        </div>
    )
}

export default Button;