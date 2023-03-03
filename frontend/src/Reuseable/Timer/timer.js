import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useStopwatch({ autoStart: true });
  return (
    <div style={{textAlign: 'center'}}>
      <h1>ON SALE!</h1>
      <div style={{fontSize: '15px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      
      
    </div>
  );
}

export default function App() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}