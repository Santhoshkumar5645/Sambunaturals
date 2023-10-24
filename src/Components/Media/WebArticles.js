import React from 'react'

const WebArticlesData = [
    {
        id:1,
        title: "the news minute",
        describtion: " It was after 12 years at desk job in the IT industry that Sriram Prasad decided to get his hands dirty, literally. He took up  farming in 2015 and is now the CEO of an exclusive store that   sells over 100 varieties of spinach.",
        img: "/assets/images/webarticle1.png",
        hover_img: "/assets/images/webarticle1-1.png",
        left_side_img: "/assets/images/mediaside1.png",
        link: "https://www.thenewsminute.com/article/kovai-based-keeraikadai-approaching-farming-science-and-logic-96056",


    },
    {
        id:2,
        title: "THE BETTER INDIA",
        describtion: " As children, most of us probably detested the different dishes that our mothers would prepare using green leafy vegetables, and what was worse, were the various tactics they would use to coax us into eating them.",
        img: "/assets/images/webarticle2.png",
        hover_img: "/assets/images/webarticle2-1.png",
        right_side_img: "/assets/images/mediaside2.png",
        link: "https://www.thebetterindia.com/142500/keerai-kadai-coimbatore-techie-40-varieties-native-greens-e-commerce/"

    },
    {
        id:3,
        title: "THE HINDU ",
        describtion: " Keeraikadai.com, an e-commerce portal that focuses on farm fresh products, has launched ‘Greeny meal,’ a line of ready-to-eat ‘keerai’ (greens) products, at the Agricultural College and Research Institute here on Saturday.",
        img: "/assets/images/webarticle3.png",
        hover_img: "/assets/images/webarticle3-1.png",
        left_side_img: "/assets/images/mediaside3.png",
        link: "https://www.thehindu.com/life-and-style/food/it-is-not-just-about-promoting-good-health-the-e-commerce-company-keeraikadaicom-also-bridges-the-gap-between-farming-and-technology/article23392585.ece"

    },
    {
        id:4,
        title: "BUSINESS LINE",
        describtion: "Coimbatore-based e-commerce start-up Keeraikadai.com, which initially started marketing greens locally is set to go global soon with ‘Greeny Dip’ Moringa soup..",
        img: "/assets/images/webarticle4.png",
        hover_img: "/assets/images/webarticle4-1.png",
        right_side_img: "/assets/images/mediaside4.png",
        link: "https://www.thehindubusinessline.com/info-tech/coimbatore-based-keerakadai-going-global/article29845559.ece"

    },
    {
        id:5,
        title: "THE HINDU ",
        describtion: "  Aadathodai, thavasi, dill, mudakkathaan .... These are native greens says Sriram and adds, “ Aaduthodai cleanses your lungs of toxins. Dill or sombu keerai enhances digestion and is good as garnish in salads.”  ",
        img: "/assets/images/webarticle3.png",
        hover_img: "/assets/images/webarticle5-1.png",
        left_side_img: "/assets/images/mediaside5.png",
        link: "https://www.thehindu.com/life-and-style/food/coimbatore-based-keeraikadaicom-launches-greeny-dips/article31986590.ece"

    },
    {
        id:6,
        title: "the covai mail",
        describtion: "Coimbatore-based e-commerce start-up Keeraikadai.com, which initially started marketing greens locally is set to go global soon with ‘Greeny Dip’ Moringa soup..",
        img: "/assets/images/webarticle6.png",
        hover_img: "/assets/images/webarticle6-1.png",
        right_side_img: "/assets/images/mediaside6.png",
        link: "https://www.covaimail.com/?p=19798"

    },
    {
        id:7,
        title: "THE HINDU ",
        describtion: " “Ezhuthaani poondu, neernochi, siriyanangai... all of these pack a real punch,” says G Sriram Prasad, founder of keeraikadai.com, the e-commerce company that sources and sells 110 native varieties of keerai directly from farmers across Tamil Nadu. ",
        img: "/assets/images/webarticle3.png",
        hover_img: "/assets/images/webarticle7-1.png",
        left_side_img: "/assets/images/mediaside7.png",
        link: "https://www.thehindu.com/news/cities/Madurai/ready-to-eat-keerai-products-launched/article33150376.ece"

    },
    {
        id:8,
        title: "scroll.in",
        describtion: " When it comes to greens, most people in urban India cannot think beyond the ubiquitous palak (spinach), methi (fenugreek), coriander and curry leaves. Or recent trendy imports like kale. But beyond these exist a whole range of greens. ",
        img: "/assets/images/webarticle8.png",
        hover_img: "/assets/images/webarticle8-1.png",
        right_side_img: "/assets/images/mediaside8.png",
        link: "https://scroll.in/magazine/917477/beyond-palak-and-methi-there-are-many-indian-greens-waiting-to-be-rediscovered"

    },
    {
        id:9,
        title: "THE HINDU ",
        describtion: "        Keeraikadai.com, an e-commerce portal that focuses on farm fresh products, has launched ‘Greeny meal,’ a line of ready-to-eat ‘keerai’ (greens) products, at the Agricultural College and Research Institute here on Saturday.",
        img: "/assets/images/webarticle3.png",
        hover_img: "/assets/images/webarticle9-1.png",
        link: "https://www.thehindu.com/life-and-style/food/a-record-of-over-100-varieties-of-healthy-greens/article29342650.ece"

    },
]


function WebArticles() {
  return (
    <>

    {WebArticlesData.map((values, index)=>{
      
        return    <div key={index}>
              <div onClick={()=>window.open(values.link)} className="cursor-pointer font-AVENIR group md:my-10">
          <div className="flex items-center gap-10 md:gap-7 lg:gap-12 xl:gap-20 md:mx-16 lg:mx-0 justify-center  group-hover:transition-all group-hover:duration-300 group-hover:delay-75  duration-300 md:group-hover:hidden">
            <p className="uppercase font-bold md:font-semibold text-primary text-xl md:text-4xl lg:text-6xl xl:text-8xl">
              {values.title}
            </p>
            <img src={values.img} className="h-16 md:h-32 lg:h-48 md:w-80 object-contain" alt="" />
          </div>

          <div className="group-hover:transition-all   group-hover:duration-300 hidden  md:group-hover:block ">
            <div className="flex items-center justify-center lg:pl-32 gap-16 md:mx-12 lg:mx-0">
            <div className="w-4/6 space-y-2">
              <p className="uppercase font-semibold text-primary text-xl md:text-3xl lg:text-5xl xl:text-[5rem] ">
                {values.title}
              </p>
              <p className='indent-16 text-justify md:text-md lg:text-lg'>
               
               {values.describtion}
              </p>
            </div>

            <div className="w-2/6">
             
              <img
                src={values.hover_img}
                className="h-52 "
                alt=""
              />
            </div>

           
            </div>
          </div>
        </div>
        <div className='relative'>
        <p className='border-primary border md:border-2 my-5' />
        <img src={values.left_side_img} className='absolute h-40 -top-20 max-md:hidden' alt="" />
        <img src={values.right_side_img} className='absolute h-44 right-0 -top-20 max-md:hidden' alt="" />
        </div>
        </div>
          
    })}
      
    </>
  )
}

export default WebArticles