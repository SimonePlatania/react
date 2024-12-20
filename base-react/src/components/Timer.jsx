import { useState, useEffect } from "react";

  function Timer () {

    const [seconds, setSeconds] = useState (0);

    useEffect(() =>{
      const intervalid = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds +1);
    }, 1000);

    return () => clearInterval(intervalid);

    }, []);

    return <h1>Timer: {seconds}s</h1>

  }

export default Timer;
