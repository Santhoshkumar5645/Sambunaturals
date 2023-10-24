import React, { useState, useEffect } from "react";
import FeedbackModal from "../../Modal/Profile/FeedbackModal";
import axios from "axios";
import { LocalStorageService } from "../../Services/LocalStorageService";
import useFetchData from "../../CustomHooks/useFetchData";
import { NotificationService } from "../../Service/NotificationService";

const Feedback = () => {
  const [feedback, setFeedback] = useState(false);
  const [feedbackData, setFeedbackData] = useState();

  const FeedbackModalHandler = () => {
    setFeedback(!feedback);
  };
  const { loading, makeRequest } = useFetchData();

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = async () => {
    const Response = await makeRequest("/customer-feedback", "post", {});
    if (Response.status) {
      setFeedbackData(Response.data);
    }
  };

  return (
    <>
      {feedbackData &&
        feedbackData.map((values, index) => {
         
           return   <div key={index} className=" px-10 py-5 shadow-lg rounded-3xl">
                <div className="flex items-center justify-between gap-4 ">
                  <div className="flex items-center gap-4">
                    <img
                      src={values && values.user.profile_photo}
                      className="h-12"
                      alt=""
                    />
                    <div className="">
                      <p className="font-semibold">{values.user.name}</p>
                      {/* <p className='text-xs'>1 day ago</p> */}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>{values.star_rating}.0</p>
                    <img src="/assets/svg/star.svg" className="h-4" alt="" />
                  </div>
                </div>

                <p className="lg:w-4/6 mt-5">{values.feedback}</p>
              </div>
          
        })}
      {feedbackData?.length === 0  &&
      <div
        onClick={FeedbackModalHandler}
        className="cursor-pointer bg-[#D9D9D94A] rounded-3xl  flex w-fit justify-between gap-20 mt-8 px-10 py-3 items-center"
      >
        <p className="text-sm text-slate-500">Type what you want to say...</p>
        <img src="/assets/svg/feedbacksend.svg" className="h-5" alt="" />
      </div>
        }
      <FeedbackModal active={feedback} Handler={FeedbackModalHandler} />
    </>
  );
};

export default Feedback;
