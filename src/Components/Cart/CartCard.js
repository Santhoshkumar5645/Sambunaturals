import React, { useState } from "react";

const CartCard = (props) => {
  const {name, image,quantity, price,count, id} = props && props
  return (
    <>
      <div className="flex items-center w-full">
        <div className="bg-[#F1F1F1]  w-2/6 sm:w-1/6"><img src={image} className="h-auto  sm:h-24" alt="" /></div>
        <div className="w-5/6 border py-2 flex justify-between items-center px-2 md:px-5">
            <div>
                <p className="text-primary text-lg md:text-xl font-semibold"><span className="text-2xl"> ₹ </span>{price}</p>
                <p className="font-semibold max-md:text-sm">{name}</p>
                <p className="text-slate-500 text-xs md:text-sm">{quantity}</p>
            </div>
            <div className="flex items-center gap-2 ">
                <p onClick={()=>props.btnHandler(name, image, price, id, 'minus')} className="cursor-pointer text-white bg-primary px-2 w-6 text-lg font-bold">-</p>
                <p>{count.toString().length === 1 ? '0' + count : count}</p>
                <p onClick={() => { props.btnHandler(name, image, price, id, 'add') }} className="text-white cursor-pointer bg-primary px-2 w-6 text-lg font-bold">+</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
