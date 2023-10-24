import React, { useEffect, useState } from "react";
import useFetchData from "../CustomHooks/useFetchData";
import { NotificationService } from "../Service/NotificationService";

function TimerComponent(props) {
  const { loading, makeRequest } = useFetchData();

  const timeStringToSeconds = (timeString) => {
    const [minutes] = timeString.split(":").map(Number);
    const totalSeconds = minutes * 60;
    return totalSeconds;
  };

  const timeString = props?.time;
  const time = timeStringToSeconds(timeString);

  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000); // Update every second (1000 milliseconds)

      return () => clearInterval(interval);
    }
  }, [seconds]);

  function formatTime() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  function remainingTime() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return remainingSeconds;
  }

  const resendOTP = async () => {
    const payload = {
      mobile_number: props.number,
      country_code: "91",
    };

    const Response = await makeRequest("/auth/resend-otp", "post", payload);
    if (Response.status) {
      NotificationService(Response.message, "success", "rop-right");
    }
  };

  return (
    <div>
      {remainingTime() !== 0 ? (
        ` Resend OTP in  ${formatTime()}`
      ) : (
        <p className="cursor-pointer" onClick={() => resendOTP()}>
          Resend OTP
        </p>
      )}
    </div>
  );
}

export default TimerComponent;
