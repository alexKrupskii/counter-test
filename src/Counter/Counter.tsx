import React, {useState} from "react";
import Button from "./../Button/Button";
import style from "./../Button/Button.module.scss"


type PropsType = {
    count: number
    changeCount: () => void
    resetCount: () => void
    maxValue: number
    startValue: number
    message: string
}

function Counter(props: PropsType) {


    return (
        <div className="counter">
            <div className="title__wrapper">
                <span className={props.count === props.maxValue
                    || props.maxValue < 0
                    || props.startValue > props.maxValue
                    || props.startValue < 0
                    || props.maxValue === props.startValue

                    ? "error__message" : ""}>{props.message ? props.message : props.count}</span>
            </div>
            <div className="counter__btn">
                <Button disabled={props.count === props.maxValue}
                        onClick={props.changeCount}
                        className={props.count === props.maxValue ? style.btnBlock : style.btn} title="inc" />
                <Button disabled={props.count === 0}
                        onClick={props.resetCount}
                        className={props.count === 0 ? style.btnBlock : style.btn} title="reset" />
            </div>
        </div>
    );
}

export default Counter;