import { Button } from "@nextui-org/react";
import React from "react";

function Ownerpage() {
  return (
    <div class="flex flex-col h-[370px] items-center justify-center ml-[60px] space-y-[27px]">
      <div class="flex flex-col w-[300px] h-22 bg-gray-10  border-b-3 border-[#5F7C8D]">
        <label class="text-[#7A999C] text-[20px] font-serif">Name:</label>
        <input className="text-[#7A999C] focus:outline-none" type="text" placeholder="Enter owner name" />
      </div>
      <div class="flex flex-col w-[300px] h-22 bg-gray-10  border-b-3 border-[#5F7C8D]">
        <label class="text-[#7A999C] text-[20px] font-serif">Restaurant name:</label>
        <input className="text-[#7A999C] focus:outline-none" type="text" placeholder="Enter the restaurant name" />
      </div>
      <div class="flex flex-col w-[300px] h-22 bg-gray-10  border-b-3 border-[#5F7C8D]">
        <label class="text-[#7A999C] text-[20px] font-serif">Restaurant address:</label>
        <input className="text-[#7A999C] focus:outline-none" type="text" placeholder="Enter the address" />
      </div>
      <div class="flex flex-col w-[300px] h-22 bg-gray-10  border-b-3 border-[#5F7C8D]">
        <label class="text-[#7A999C] text-[20px] font-serif">Milestone:</label>
        <input className="text-[#7A999C] focus:outline-none" type="number" placeholder="Count to claim rewards" />
      </div>
      <div class="flex flex-col w-[300px] h-22 bg-gray-10  border-b-3 border-[#5F7C8D]">
        <label class="text-[#7A999C] text-[20px] font-serif">Description:</label>
        <input className="text-[#7A999C] focus:outline-none" type="text" placeholder="Description of restaurant" />
      </div>
      <div class="flex flex-col w-[300px] h-22 bg-gray-10  border-b-3 border-[#5F7C8D]">
        <label class="text-[#7A999C] text-[20px] font-serif">GST id:</label>
        <input className="text-[#7A999C] focus:outline-none" type="text" placeholder="Enter GST id of restaurant" />
      </div>
      <div class="flex flex-col h-10 p-5 m-3">
        <button class="px-6 py-3 bg-[#4B687A] rounded-lg text-white font-bold">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Ownerpage;
