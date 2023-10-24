import React from "react";


const AboutMore = () => {
    return (
      <>
        <section >
          <div className="relative max-md:hidden flex  flex-col space-y-3 justify-center  rounded-lg  px-8 mt-3 mx-auto bg-[#EDF6EA] w-[98%] h-60">
            <h1 className="md:text-5xl xl:text-6xl text-primary font-bold ">
              About Us
            </h1>
            <hr className="max-md:hidden  w-60 border-primary border-b-2  mt-3 " />
            <p className=" md:text-3xl lg:text-4xl   max-md:hidden   ">
              Who we Are...?
            </p>
          </div>
  
          <p className="md:hidden font-bold text-center text-xl my-4">About <span className="text-primary">Us</span> </p>
  
          <div className="px-6 md:px-8 text-md lg:text-lg  lg:text-md text-justify mb-16  font-AVENIR font-medium space-y-4  md:mx-5 ">
            <div class="max-md:flex md:flex max-md:flex-col-reverse gap-8 mb-6 ">
              <div className="md:w-1/2 space-y-4 md:my-8">
                <p className="text-3xl md:text-5xl xl:text-6xl font-bold">
                  Founder’s Note
                </p>
                <p className="text-primary text-justify   font-bold text-xl lg:text-2xl">
                  Greetings from KeeraiKadai!
                </p>
                <p className="text-justify text-md lg:text-lg">
                  I hope that as you browse our website, you will learn more about
                  the nutritional benefits of Indian traditional greens which have
                  been forgotten over the decades. As a team of young
                  professionals sharing a common ideology of re-inventing
                  traditional greens and introducing them to the modern diet, we
                  aim to deliver healthy, value-added greens to our customers with
                  a network of over 1500 farmers from whom we source our greens
                  directly. We are a unique establishment that endures to deliver
                  fresh and quality produce to our customers within 4 to 6 hours
                  directly from our networked farms.We have successfully delivered
                  products to customers in over 20,000 pincodes whose trust and
                  encouragement we have gained in return for the quality of
                  products delivered.
                </p>
              </div>
              <div className="md:w-1/2 md:-mt-28 z-10 flex justify-center ">
                <img
                  alt=""
                  className=""
                  src="/assets/images/aboutmore.png"
                ></img>
              </div>
            </div>
  
            <h1 className="leading-relaxed  font-bold text-xl lg:text-2xl text-primary ">
              We are proud to be working with one of the healthiest foods –
              “Spinach aka Keerai”!
            </h1>
            <p>
              We have been able to integrate our passion for bringing traditional
              foods into the modern diet and provide spinach to every household
              akin to newspapers and milk. We also work closely to empower farmers
              to market their product more effectively by bridging the gap between
              farming and technology. This also means spreading the awareness of
              ‘Food as Medicine’ to our society to promote healthier living.
            </p>
  
            <p>
              We have started implementing the idea of growing microgreens in
              hydroponic farms that are very useful in urban areas where water
              availability and manpower is low. This will in turn empower local
              farmers in those urban areas. Any development at Keeraikadai.com is
              incomplete without farmers. My team and I strive to encourage and
              empower farmers and share the happiness of success. We have revamped
              the entire idea of farming and technology and have been able to
              bridge the gap between both and physical stores have been set up to
              build trust and engage better with customers.{" "}
            </p>
            <div>
              <p>Regards,</p>
              <p class=" text-primary font-bold">Sriram Prasad </p>
              <p>G,CEO & Founder,</p>
              <p>Keerai Kadai Ventures Private Limited</p>
              <p>Mail: ceo@keeraikadai.com</p>
            </div>
  
            <div className="flex gap-3 ">
              <a href="https://www.facebook.com/keeraikadaifarm" target="_blank"><img src="/assets/images/aboutfacebook.png" className="h-8" alt="" /></a>
              <a href="https://www.instagram.com/keeraikadai/" target="_blank"><img src="/assets/images/aboutinstagram.png" className="h-8" alt="" /></a>
  
              <a href="https://www.linkedin.com/company/keeraikadai/" target="_blank"><img src="/assets/images/aboutlinkedin.png" className="h-8" alt="" /></a>
  
            </div>
          </div>
        </section>
      </>
    );
  };


  export default AboutMore