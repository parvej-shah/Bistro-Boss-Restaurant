import { useQuery} from "@tanstack/react-query";
import React from "react";
import LoadingClip from "../LoadingClip";
import API from "../../hooks/useAPI";

export default function FoodCart({category="popular"}) {
  const {data:foods,isLoading} = useQuery({ queryKey: ['foodcart',category], queryFn: async () => {
    const {data} = await API.get("/menu",{params:{category}});
    return data;
  }})
  console.log(foods);
  if(isLoading) return <LoadingClip/>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
      {
        foods?.map((food) =>(
            <div key={food._id} className="card rounded-none bg-secondaryBg shadow-xl mx-2 md:mx-0">
              <div>
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full object-cover"
                />
              </div>
              <div className="card-body text-center">
                <h2 className="font-semibold text-2xl text-primaryText text-center">{food.name}</h2>
                <p className="text-primaryText">{food.recipe}</p>
                <div className="card-actions justify-center my-2">
                <button className="btn uppercase hover:border-secondaryText duration-300 transition-all transform border-b-4 ont-medium border-secondaryText border-t-0 border-x-0 hover:bg-btnBgHover text-center w-1/2 hover:border-b-4 text-secondaryText bg-btnBg ease-in-out">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
