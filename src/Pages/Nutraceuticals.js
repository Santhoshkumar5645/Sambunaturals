import React, {useEffect} from "react";
import ReactDOM from "react-dom";


const Nutraceuticals = () =>{

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])

    return(
        <>
        
        <section className="">

            {/* Landing page  */}
               
            <div className="flex md:bg-[#EDF6EA94] max-md:flex-col  relative md:justify-between items-center  w-[98%] md:mx-auto mt-3  px-16  rounded-lg  ">
            <h1 className="md:hidden text-primary mt-5 text-xl font-bold tracking-wider font-AVENIR">Nutraceuticals</h1>

                <div className="space-y-2 max-md:hidden">
                    <h1 className="text-primary font-bold md:text-5xl lg:text-6xl xl:text-7xl">Nutraceuticals</h1>
                    <hr className="w-9/12  border-primary" />
                    <p className="text-lg">Stay Naturally Healthy!</p>
                </div>
                <div className="flex justify-center md:justify-end ">
                    <img src="assets/images/nutraceuticalsimage.png" className="h-60 lg:h-80 " alt="" />
                </div>
            </div>
        <div className="font-AVENIR font-medium">
            <div className="text-center font-AVENIR mt-8 space-y-3 ">
                <img src="assets/images/shadowleaf.png" className="h-20 max-md:hidden absolute md:1/3 lg:left-1/4  " alt="" />

                <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl max-md:hidden font-medium">Keeraikadai.com</h1>
                <img src="assets/images/singleleaf1.png" className="max-md:hidden h-7 absolute right-2  -rotate-45" alt="" />

                <p className="text-primary max-md:hidden md:text-sm lg:text-md xl:text-lg">“Nutritious food is the best medicine to maintain good health!”</p>
                <p className="font-medium md:Lfont-semibold text-lg  md:text-md lg:text-lg ">Our products are rich in nutritional value containing vitamins, minerals, protein and essential metabolites that are  <br />
important to maintain good health.</p>
            </div>

            <div className="flex max-md:flex-col font-AVENIR justify-center mt-10 space-y-5 items-center">
                <div className="flex flex-col justify-center mt-5 items-center space-y-3 px-8 md:px-4 lg:px-8 ">
                    <img src="assets/images/phytonutrientsbottle.png" className="" alt="" />
                    <h1 className="font-bold text-xl">Phytonutrients</h1>
                    <p className="text-center text-md md:px-6 lg:px-12">Present in fruits, vegetables and plant-based sources, phytonutrients are natural compounds with established nutritional value that are often considered vital to maintain a healthy lifestyle.Phytonutrients are known to benefit by boosting immunity, reducing inflammation, improving antioxidant levels, maintaining good heart health and circulation, etc which are important to maintain overall health.</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-3 px-8 md:px-4 lg:px-8">
                    <img src="assets/images/phytonutrientsleaf.png" alt="" />
                    <h1 className="font-bold text-xl">Plant Based </h1>
                    <p className="text-center text-md md:px-6 lg:px-12">At Keeraikadai.com, we aim to deliver plant-based products rich in phytonutrients to our customers. Our wholesome range of products are innovatively designed to provide you with Easy Nutrition that is Totally Healthy!All our products are developed naturally with no added preservatives and we provide nutrition that suits your convenience!</p>
                </div>
            </div>

            <div className="text-center my-16 space-y-3">
            <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl  font-medium" >Our <span className="text-primary">Products</span> </p>
            <p className=" max-md:hidden md:text-sm lg:text-md xl:text-lg">We aim to deliver you the best!</p>
            <p className="text-center max-md:hidden text-md md:px-6 lg:px-12">All products of Keeraikadai.com are not only ready-to-eat but also preservative-free and 100% natural. Our aim is 
to deliver nutrition to our customers at ease that has led us to develop two series of products – ‘Greeny Dip’ and ‘Greeny Meal’ 
that is available in stores and E-commerce platforms.</p>

            </div>
            <div className="flex max-md:flex-col mb-10 justify-center md:justify-around gap-20 px-8 md:px-14 container mx-auto">
                <div className="w-full md:w-3/5 space-y-5" >
                <img src="assets/images/nutraceuticals1.png" className="" alt="" />
                <p className="font-bold text-primary text-lg md:text-xl">Greeny Meal</p>
                <p className="text-justify text-md">“Greeny Dip” is an innovatively designed Soup in a Dip for the First Time Ever! These Keerai-based soups are available in six variants (Moringa, Moringa-Turmeric, Balloon vine, Vallarai, Ashwagandha, Thoothuvalai) hygienically packedin biodegradable, plastic & stapler free packaging with a shelf life of 18 months.</p>
                </div>
                <div className="w-full md:w-3/5 space-y-5 ">
                <img src="assets/images/nutraceuticals2.png" className="" alt="" />
                <p className="font-bold text-primary text-lg md:text-xl">Greeny Dip</p>
                <p className=" text-justify text-md">“Greeny Meal” series are ready-to-eat curries available in five  variants (Moringa, Ponnangani, Palak, Banana stem, Banana  blossom) packed in hygienic retort pouches with a shelf life of 6 months.</p>
                </div>
            </div>

            </div>
        </section>
        </>
    )
}


export default Nutraceuticals;