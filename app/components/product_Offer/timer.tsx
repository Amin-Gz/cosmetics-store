import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const [countdown, setCountdown] = useState<string>("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 12);
    endTime.setMinutes(endTime.getMinutes() + 24);
    endTime.setSeconds(endTime.getSeconds() + 35);

    timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const time: any = hours + ":" + minutes + ":" + seconds;
      setCountdown(time.toString());

      if (distance < 0) {
        clearInterval(timer);
        setCountdown("EXPIRED");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <p className="text-[64px] text-white font-semibold -rotate-90 mt-12">
      {countdown}
    </p>
  );
};

export default CountdownTimer;
