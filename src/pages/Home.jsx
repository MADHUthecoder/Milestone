import React from "react";
import FilterSelector from "../utils/FilterSelector";
import PlaceSelector from "../utils/PlaceSelector";
import RestaurantList from "../utils/RestaurantList";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
    <div className="flex h-screen">
    
      <div className="w-full bg-gray-300 p-4">
        <h2 className="text-lg font-bold">Restaurants List</h2>
        <RestaurantList />
      </div>
    </div>
    </div>
  );
};

export default Home;
