import React from "react";

function Userpage() {
  return (
    <div class="flex flex-col h-[250px] items-center justify-center ml-[60px] space-y-[27px]">
      <div class="flex flex-col w-[300px] h-22 bg-gray-10  border-b-3 border-[#5F7C8D]">
        <label class="text-[#7A999C] text-[20px] font-serif">User name:</label>
        <input className="text-[#7A999C] focus:outline-none" type="text" placeholder="Enter your username" />
      </div>
      <div class="flex flex-col w-[300px] h-22 bg-gray-10  border-b-3 border-[#5F7C8D]">
        <label class="text-[#7A999C] text-[20px] font-serif">Mobile Number:</label>
        <input className="text-[#7A999C] focus:outline-none" type="text" placeholder="Enter the mobile number" />
      </div>
      <div class="flex flex-col w-[300px] h-22 bg-gray-10  border-b-3 border-[#5F7C8D]">
        <label class="text-[#7A999C] text-[20px] font-serif">Email id:</label>
        <input className="text-[#7A999C] focus:outline-none" type="email" placeholder="Enter your mail id" />
      </div>
      <div class="flex flex-col h-10 p-5 m-3">
        <button class="px-6 py-3 bg-[#4B687A] rounded-lg text-white font-bold">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Userpage;
