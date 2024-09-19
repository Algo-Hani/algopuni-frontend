import React, { useEffect } from 'react';
import styled from 'styled-components';

type Timer = {
  timer: {
    minute: number;
    seconds: number;
  };
  setTimer: React.Dispatch<
    React.SetStateAction<{
      minute: number;
      seconds: number;
    }>
  >;
  startTimer: boolean;
};

const Timer = ({ timer, setTimer, startTimer }: Timer) => {
  useEffect(() => {
    if (startTimer) {
      const intervalTimer = setInterval(() => {
        setTimer((prev) => {
          const { minute, seconds } = prev;

          if (minute > 0 && seconds === 0) {
            return {
              minute: minute - 1,
              seconds: 59,
            };
          }

          if (seconds > 0) {
            return {
              minute,
              seconds: seconds - 1,
            };
          }

          return prev;
        });
      }, 1000);

      setTimeout(() => {
        clearInterval(intervalTimer);
      }, 1000 * 60 * 5);

      return () => {
        clearInterval(intervalTimer);
      };
    }
  }, [timer, startTimer]);

  const displayTimer = `0${timer.minute}:${
    timer.seconds.toString().length === 1 ? `0${timer.seconds}` : timer.seconds
  }`;
  return <Time className='timer'>{displayTimer}</Time>;
};

const Time = styled.div`
  ${({ theme }) => theme.font.regular_12};
  color: ${({ theme }) => theme.color.primary};
`;
export default Timer;
