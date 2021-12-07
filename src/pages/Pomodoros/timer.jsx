import React from 'react';
import { useTimer } from 'react-timer-hook';

// eslint-disable-next-line react/prop-types
const Timer = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp,autoStart: false , onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
          <span>{minutes}</span>:<span>{(seconds === 0) ? `0${seconds}` : seconds}</span>
      </div>
      <p>{isRunning ? 'Corriendo' : 'Detenido'}</p>
      <button type='button' onClick={start}>Iniciar</button>
      <button type='button' onClick={pause}>Pausa</button>
      <button type='button' onClick={resume}>Reanudar</button>
      <button type='button' onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 1500);
        restart(time,false)
      }}>Reiniciar</button>
    </div>
  );
}

export default Timer;
