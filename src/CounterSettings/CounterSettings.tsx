import React from "react";
import Button from "../Button/Button";
import style from "../Button/Button.module.scss"


type PropsType = {
    setMaxValue: (valueAsNumber: number)=> void
    setStartValue: (valueAsNumber: number)=> void
    minAndMax: () => void
    maxValue: number
    startValue: number
}

function CounterSettings(props:PropsType) {

    const styleForMaxValue = props.maxValue === props.startValue
        || props.maxValue < 0
        || props.startValue > props.maxValue

    const styleForStartValue = props.maxValue === props.startValue
        || props.startValue < 0
        || props.startValue > props.maxValue
        || props.maxValue < 0

    return (
        <div className="counter">
            <div className="title__wrapper">
                <div className="item">
                    <span>max value:</span>
                    <input className={styleForMaxValue ? style.startInputError : style.maxInput}
                           type="number"
                           value={props.maxValue}
                           onChange={event => {props.setMaxValue(event.currentTarget.valueAsNumber)}} />
                </div>
                <div className="item">
                    <span>start value:</span>
                    <input className={ styleForStartValue ? style.startInputError : style.maxInput}
                           type="number"
                           value={props.startValue}
                           onChange={event => {props.setStartValue(event.currentTarget.valueAsNumber)}}/>
                </div>

            </div>
            <div className="counter__btn">
                <Button disabled={props.startValue === props.maxValue || props.startValue <= -1 || props.maxValue <= -1}
                        onClick={() => {props.minAndMax()}}
                        className={props.startValue === props.maxValue || props.startValue <= -1 || props.maxValue <= -1 ? style.btnBlock : style.btn} title="set" />
            </div>
        </div>
    );
}

export default CounterSettings;