import { Button } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const RestaurantCard = ({ id, imageUrl, name, averageRating, location }) => {
  return (
   
      <div className="bg-[#7A999C] w-[345px] h-[482px] rounded-lg shadow-lg px-[80px] py-[37px] mb-4">
         <Link className="flex flex-col items-center " to={`/details/${id}`}>
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-[220px] object-cover rounded-md mb-3"
        />
        <div className="flex items-center ml-auto">
          <FaLocationDot />
        <p className="text-black ">{location}</p>
        </div>
        <h3 className="text-[30px] text-stroke text-center font-title text-[#2D626E] ">{name}</h3>
        <p className="font-serif text-white text-[18px]">Ratings: {averageRating}</p>
        <p className="text-[10px]">view more...</p>
        <Button
            className="font text-[25px] text-white w-[179px] font-semibold bg-[#4B687A] py-[11px] px-10 rounded-xl my-1"
          >
            Book Now
          </Button>
        
          </Link>
      </div>
   
  );
};

export default RestaurantCard;
