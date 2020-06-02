import React, {useEffect, useState} from 'react';
import './App.scss';
import Counter from './Counter/Counter';
import CounterSettings from './CounterSettings/CounterSettings';

function App() {


    let [count, setCount] = useState<number>(0)

    let [maxValue, setMaxValue] = useState(0)

    let[startValue, setStartValue] = useState(0);

    let [maximum, setMaximum] = useState(0)

    let [message, setMessage] = useState<string>('')





    let minAndMax = () => {
        reWriteMax(maxValue);
        reWriteCounter(startValue)
        setMessage('')
    };

    let reWriteMax = (maxValue:number) => {
      setMaximum(maxValue)
    };

    let reWriteCounter = (startValue:number) => {
        setCount(startValue)
    };

    let changeCount = () => {
        setCount(count + 1);
    };

    let resetCount = () => {
        setCount(startValue)
    };

    useEffect(() => {
        if (startValue === maxValue ||
        startValue < 0 || maxValue < 0
        || startValue > maxValue) {
            setMessage('Incorrect value')
        } else {
            setMessage('Enter values and press Set')
        }
    }, [startValue, maxValue])


  return (
    <div className="App">
      <CounterSettings
          startValue={startValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          setStartValue={setStartValue}
          minAndMax={minAndMax}/>
      <Counter
          message={message}
          startValue={startValue}
          maxValue={maxValue}
          count={count}
          changeCount={changeCount}
          resetCount={resetCount}
          />
    </div>
  );
}

export default App;
