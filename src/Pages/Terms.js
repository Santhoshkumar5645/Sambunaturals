import React, {useEffect} from "react";
import { ScrolltoTop } from "../Utility";
const Terms = () => {

  useEffect(() => {
    ScrolltoTop()
}, [])


const paymentData  = [
 "We or our authorized billing agents are authorized to charge your designated payment method.",
 "We may submit charges incurred under your account for payment; and you will be responsible for such charges, even if your membership is cancelled or terminated. You agree that we may charge your payment method for all amounts due to us without additional notice or consent unless required otherwise by law.",
 "You are responsible for all charges incurred under your account made by you or anyone who uses your account (including your children, family, or friends).",
 "We may, in our discretion, post charges to your payment method individually or may aggregate your charges with other purchases you make on the site and apply those charges to your next billing cycle.",
 "You must notify us about any billing problems or discrepancies within 5 days after they first appear on the statement you receive from your bank or Credit Card Company. If you do not bring such problems or discrepancies to our attention within 5 days, you agree that you waive the right to dispute such problems or discrepancies."
]

  return (
    <>
      <section className="">
        <div className="relative flex flex-col justify-center rounded-lg items-center mt-6 md:mt-3 mx-3 md:mx-auto bg-[#EDF6EA] md:w-[98%] h-44 md:h-80">
          <img
            className=" absolute  -left-3 -top-3 rotate-180 max-md:hidden  "
            src="assets/images/groupleaf.png" alt=""
          ></img>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-semibold md:font-bold ">
            Terms & Conditions
          </h1>
          <hr className="max-md:hidden  w-60 border-primary mt-4" />
          <p className=" lg:text-2xl  font-bold  max-md:hidden mt-3   ">
            HOME / Terms & Conditions
          </p>
          <img
            className="absolute -right-3 -bottom-3   max-md:hidden "
            src="assets/images/groupleaf.png" alt=""
          ></img>
        </div>

        <div className="px-6 md:px-12 xl:text-lg  lg:text-md  text-justify  my-8 md:my-16  font-AVENIR font-medium space-y-2  md:mx-10 ">
          {/* <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary font-AVENIR pb-4">
            Welcome to Keerai Kadai!
          </h1> */}
         
            <p>
            Welcome to the www.sambunaturals.bio website (the Site). The site is operated by Ponmaram Illam having registered office at 101, Erode Main Road, Muthugoundanpudur, Salangapalayam P.O., Kavindapadi, Erode, Tamilnadu - 638 455. This site provides services to you subject to the notices, terms, and conditions set forth in this agreement (the Agreement). In addition, when you use any of our services (e.g., Customer Reviews), you will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service, and they are incorporated into this Agreement by this reference. We reserve the right to change this Site and these terms and conditions at any time. Accessing, browsing or using the site indicated your agreement to all the terms and conditions in this agreement.
          </p>

          
           
          <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary py-5">
          Terms of Use
          </h1>
         
            <p>
            Services of the Site would be available to the persons except for persons who are “incompetent to contract” within the meaning of the Indian Contract Act, 1872 including un-discharged insolvents, etc. are not eligible to use the Site. If you are a minor i.e. under the age of 18 years but at least 13 years of age you may use the Site only under the supervision of a parent or legal guardian who agrees to be bound by these Terms of Use. If your age is below 18 years your parents or legal guardians can transact on behalf of you if they are registered users.
          </p>

           
          <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary py-5">
          License and Website Access
          </h1>
         
            <p>
            Sambu Oil grants you a limited sub-license to access and make personal use of this site and not to download (other than page caching) or modify it, or any portion of it, except with express written consent of Sambu Oil. This license does not include any resale or commercial use of this site or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of this site or its contents; any downloading or copying of account information for the benefit of another merchant; or any use of data mining, robots, or similar data gathering and extraction tools. This site or any portion of this site may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without the express written consent of Sambu Oil. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of the Site or of Sambu Oil and its affiliates without express written consent. You may not use any meta tags or any other “hidden text” utilizing the Site’s or Sambu Oil’s name or trademarks without the express written consent of Sambu Oil. Any breach of this Agreement shall result in the immediate revocation of the license granted in this paragraph without notice to you.
          </p>
          <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary py-5">
          Account and Registration Obligation
          </h1>
         
            <p>
            All shoppers have to register and login in to place orders on the Site. You have to keep your account and registration details up to date and correct for communications related to your purchases from the site. By agreeing to the terms and conditions, the shopper agrees to receive promotional communication and newsletters upon registration. The customer can opt-out either by unsubscribing in “My Account” or by contacting customer service.
          </p>
            

          <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary py-5">
          Return & Cancelation Policy
          </h1>
         
            <p>
            Sambu Oil take utmost care in giving the best products to its consumers, in spite of that if the consumer is not satisfied with the products, the following are the general return and replacement policy applies to all items sold in sambunaturals.bio
          </p>

          <p>In the event of an incorrect order being delivered please send across a picture of the parcel to us on Whatsapp or Email or Call and we will initiate another order which will reach you within 5 working days.
            In the event of the customer not satisfying with the products please call or Whatsapp or email to following numbers. We will send across a replacement parcel the next day which should reach you within the next 5 days.</p>
         
            <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary py-5">
            Shipping
          </h1>
         
            <p>
            Estimated time of delivery 2 to 3 days from the date of technically and commercially clear order and acceptance. Shipping charges will be extra otherwise mentioned clearly. No delivery during after office hours. We have rights to cancel order at any circumstance. Shipping information will be provided on request only.
          </p>

          <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary pt-5">
          Customer Obligations
          </h1>
          <p className="py-2">Customer are bound to the terms and condition and should agree not to use the site for the below-mentioned purposes:</p>
          <div className="flex  gap-1">
            <img src="assets/images/termsarrow.png" className="lg:w-7 h-7 sm:w-3" alt="" />
            <p>Disseminating any unlawful, harassing, libelous, abusive, threatening, harmful, vulgar, obscene, or otherwise objectionable material.</p>
          </div>
          <div className="flex  gap-1">
            <img src="assets/images/termsarrow.png" className="lg:w-7 h-7 sm:w-3 "  alt="" />
            <p>Transmitting material that encourages conduct that constitutes a criminal offense or results in civil liability or otherwise breaches any relevant laws, regulations or code of practice.</p>
          </div>
          <div className="flex gap-1">
            <img src="assets/images/termsarrow.png" className="lg:w-7 h-7 sm:w-3 "  alt="" />
            <p>Gaining unauthorized access to other computer systems.</p>
          </div>
          <div className="flex gap-1">
            <img src="assets/images/termsarrow.png" className="lg:w-7 h-7 sm:w-3"  alt="" />
            <p>Interfering with any other person’s use or enjoyment of the Site.</p>
          </div>
          <div className="flex gap-1">
            <img src="assets/images/termsarrow.png" className="lg:w-7 h-7 sm:w-3"  alt="" />
            <p>Interfering or disrupting networks or web sites connected to the Site.</p>
          </div>
          <div className="flex gap-1">
            <img src="assets/images/termsarrow.png" className="lg:w-7 h-7 sm:w-3"  alt="" />
            <p>Making, transmitting or storing electronic copies of materials protected by trademark without the permission of the owner.</p>
          </div>
              
          <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary py-4   ">
          Reviews and Feedbacks
          </h1>

          <p>
          Sambu Oil does not regularly review posted Comments, but does reserve the right (but not the obligation) to monitor and edit or remove any Comments submitted to the Site. You grant Sambu Oil the right to use the name that you submit in connection with any Comments. You agree not to use a false email address, impersonate any person or entity, or otherwise mislead as to the origin of any Comments you submit. You are and shall remain solely responsible for the content of any comments you make and you agree to indemnify Sambu Oil and its affiliates for all claims resulting from any comments you submit. Sambu Oiland its affiliates take no responsibility and assume no liability for any comments submitted by you or any third party.
          </p>

          <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary py-5">
          Limitation Of Liability
          </h1>
          <p>
          You hereby agree to fully indemnify, defend and hold our company and its parent and affiliates and their respective officers, directors, employees and licensors harmless from and against any and all claims, liability, losses, costs and expenses (including attorneys’ fees) incurred by you in connection with
          </p>

          <div className="flex  gap-1">
            <img src="assets/images/termsarrow.png" className="lg:w-7 h-7 sm:w-3" alt="" />
            <p>Any use or alleged use of Sambu Oil through your account by any person, whether or not authorized by you; or</p>
          </div>
          <div className="flex  gap-1">
            <img src="assets/images/termsarrow.png" className="lg:w-7 h-7 sm:w-3 "  alt="" />
            <p>The operation and content on your site or</p>
          </div>
          <div className="flex gap-1">
            <img src="assets/images/termsarrow.png" className="lg:w-7 h-7 sm:w-3 "  alt="" />
            <p>Any breach of your representations and warranties and other covenants under this agreement</p>
          </div>

         
            <p>
            Sambu Oil reserves the right, at its own expense, to assume the exclusive defence and control of any matter otherwise subject to indemnification by you, and in such case, and agree to cooperate with Sambu Oil defence of such claim. Under no circumstances and under no legal theory, tort, contract, strict liability, or otherwise, shall the content producer or Sambu Oil be liable to you or any other person for any indirect, special, incidental, or consequential damages of any character including, without limitation, damages for lost profits, loss of goodwill, work stoppage, accuracy of services, content or results, computer failure or malfunction, damages resulting from disabling of the services.
          </p>


          <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary py-5">
          Non Commercial Use
          </h1>
          <p>All materials, including images, text, illustrations, designs, icons, photographs, programs, video clips and written and other materials that are part of this Website (collectively, the “Contents”) are intended solely for personal, non-commercial use. You may download or copy the Contents and other downloadable materials displayed on the Website for your personal use only. No right, title or interest in any downloaded materials or software is transferred to you as a result of any such downloading or copying. You may not reproduce , publish, transmit, distribute, display, modify, create derivative works from, sell or participate in any sale of or exploit in any way, in whole or in part, any of the Contents, the Website or any related software. All software used on this Website is the property of Sambu Oil or its licensees and suppliers. The Contents and software on this Website may be used only as a shopping resource. Any other use, including the reproduction, modification, distribution, transmission, republication, display, or performance, of the Contents on this Website is strictly prohibited. Unless otherwise noted, all trademarks, trade dress and/or other intellectual property owned, controlled or licensed by Sambu Oil, and are protected by Intellectual Property rights.</p>

          <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary py-4">
          Advertisements
          </h1>
         
            <p>
            Some of the services are supported by advertisements and sales promotions. These advertisements may be targeted to the content of information stored on the services and queries made through the services or other information. The manner, mode and extent of advertising by Sambu Oil are subject to change without specific notice to you.
          </p>

          <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary  pt-3">
          Payment and Billing
          </h1>
        
            <p>
            You must select a payment method to pay us for any purchases you make from us. Every time you use the service, you reaffirm that
          </p>
             {paymentData.map((values, index)=>{
                 return   <div className="flex  gap-1">
                    <img src="assets/images/termsarrow.png" className="lg:w-7 h-7 sm:w-3 "  alt="" />
                    <p>{values}</p>
                  </div>
             })}
         

          <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary py-4 ">
          Trademark Information
          </h1>
          <p>
          All trademarks, logos displayed on the Site are our property or the property of other third parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.
          </p>

          <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary py-4 ">
          Modification of terms and conditions
          </h1>
         
            <p>
            Sambu Oil may at any time modify the Terms & Conditions of Use of the Website without any prior notification to you. You can access the latest version of these Terms & Conditions at any given time on the Site. You should regularly review the Terms & Conditions on the Site. In the event the modified Terms & Conditions is not acceptable to you, you should discontinue using the Service. However, if you continue to use the Service you shall be deemed to have agreed to accept and abide by the modified Terms & Conditions of Use of this Site.
          </p>

          <h1 className="font-semibold md:font-medium text-2xl md:text-3xl  text-primary py-4">
          Termination
          </h1>
          
            <p>
            This User Agreement is effective unless and until terminated by either customer or Sambu Oil. You may terminate this User Agreement at any time, provided that you discontinue any further use of this Site. Sambu Oil may terminate this User Agreement at any time and may do so immediately without notice, and accordingly deny you access to the Site, Such termination will be without any liability to us. Upon any termination of the User Agreement by either us, you must promptly destroy all materials downloaded or otherwise obtained from this Site, as well as all copies of such materials, whether made under the User Agreement or otherwise. Our right to any Comments shall survive upon termination of this User Agreement. Any such termination of the User Agreement shall not cancel your obligation to pay for the product already ordered from the Website or affect any liability that may have arisen under the User Agreement.
          </p>       
        </div>
      </section>
    </>
  );
};

export default Terms;
