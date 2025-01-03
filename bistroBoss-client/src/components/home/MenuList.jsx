import axios from "axios";
import React, { useEffect, useState } from "react";
import useMenu from "../../hooks/useMenu";
import LoadingClip from "../LoadingClip";

export default function MenuList({menu}) {
  const {foods, isLoading} = useMenu(menu);
  if(isLoading) return <LoadingClip/>
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
      {foods?.map((item) => (
        <div className="card card-side px-4 md:px-0">
          <div className="w-3/5 md:w-1/3">
            <img
              src={item?.image}
              alt="menu"
              className="rounded-tr-full rounded-b-full rounded-tl-none h-28 w-28"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center ml-8">
            <div className="flex justify-between items-center">
              <h1 className="card-title text-xl  text-primaryText">
                {item?.name}
              </h1>
              <p className="text-secondaryText text-xl">
                $<span>{item?.price}</span>
              </p>
            </div>
            <p className="text-primaryText/60">{item?.recipe}</p>
          </div>
        </div>
      ))}
    </div>
      <div className="flex justify-center my-8">
        <button className="btn uppercase hover:border-primaryText duration-300 transition-all transform border-b-4 border-primaryText border-t-0 border-x-0 hover:bg-secondaryText hover:border-b-4 bg-transparent ease-in-out">View Full Menu</button>
      </div>
    </div>
  );
}
