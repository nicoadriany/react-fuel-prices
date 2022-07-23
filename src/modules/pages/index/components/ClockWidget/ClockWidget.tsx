import { useEffect, useState } from "react";

const ClockWidget = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="clock">
      {time.toLocaleTimeString()}
    </div>
  );
}

export default ClockWidget;