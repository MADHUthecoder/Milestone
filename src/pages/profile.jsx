import {
  Provider,
  Account,
  Contract,
  json,
  stark,
  uint256,
  shortString,
  RpcProvider,
  constants,
  CallData,
} from "starknet";

import React, { useEffect } from "react";
import { useAppContext } from "../utils/AppContext";
import sideBG from "../assets/side-background.png"
import profileBG from "../assets/profileBg.png"

const profile = () => {
  const { appState, getTokenData, putTokenData } = useAppContext();
  const profileDetails = {
    name: "John Doe",
    type: "Customer", // or 'Owner'
    loyaltyPoints: 120,
  };

  useEffect(() => {
    const getLoyalty = async () => {
      try {
        const provider = new RpcProvider({
          sequencer: { network: constants.NetworkName.SN_GOERLI },
        });
        const testAddress =
          "0x543a9944c1f169f4fa16f918c555fe23977add9b226340823b66835b5a27e2e";
        const testAbi = await provider.getClassAt(testAddress);
        const newContract = new Contract(
          testAbi.abi,
          testAddress,
          appState.address
        );
        console.log("mycontract", newContract, appState);
        const response = await newContract.get_loyalty(
          appState.address.address,
          reviewData.rating / 10
        );
        console.log(">> response 0", response);
        await provider.waitForTransaction(response.transaction_hash);
        return true;
      } catch (error) {
        console.log("error", error);
        return false;
      }
    };
    getLoyalty();
      }, []);

  const mint = async () => {
    try {
      const tokenID = await getTokenData();
      console.log(tokenID)
      console.log(appState)
      const provider = new RpcProvider({
        sequencer: { network: constants.NetworkName.SN_GOERLI },
      });
      const testAddress =
        "0x01cf338b0ac1874f1050bd737898986b32c32fd7a9125885a321c458a4965019";
      const testAbi = await provider.getClassAt(testAddress);
      const newContract = new Contract(
        testAbi.abi,
        testAddress,
        appState.address
      );
      console.log("mycontract", newContract, appState);
      const response = await newContract.mint(
        appState.address.address,
      );
      console.log(">> response 0", response);
      await provider.waitForTransaction(response.transaction_hash);
      await putTokenData(appState.currentSupply + 1)
      await removeLoyalty()
      return true;
    } catch (error) {
      console.log("error", error);
      return false;
    }
  };

  const removeLoyalty = async () => {
    try {
      const provider = new RpcProvider({
        sequencer: { network: constants.NetworkName.SN_GOERLI },
      });
      const testAddress =
        "0x543a9944c1f169f4fa16f918c555fe23977add9b226340823b66835b5a27e2e";
      const testAbi = await provider.getClassAt(testAddress);
      const newContract = new Contract(
        testAbi.abi,
        testAddress,
        appState.address
      );
      console.log("mycontract", newContract, appState);
      const response = await newContract.remove_loyalty(
        appState.address.address,
        1000
      );
      console.log(">> response 0", response);
      await provider.waitForTransaction(response.transaction_hash);
      return true;
    } catch (error) {
      console.log("error", error);
      return false;
    }
  };
  

  return (
    <div className="flex">
      <div>
        <img className="h-screen" src={sideBG} alt="" />
      </div>
    <div className=" flex flex-col justify-center h-full absolute left-[700px]">
      <div style={{backgroundImage: `url(${profileBG})`}} className="border flex flex-col items-center justify-center border-black w-[434px] h-[547px] rounded-md">
        <h2 className="text-[32px] text-[#7A999C] font-bold mt-[-80px] ml-[-150px] mb-[70px]">MY PROFILE</h2>
        <div className="mb-2 flex text-left justify-center w-[200px]">
          <span className="text-[#7A999C] text-left text-[20px] font-serif mr-[50px]">Name:</span> {profileDetails.name}
        </div>
        <div className="mb-2 flex justify-center w-[200px]">
          <span className="text-[#7A999C] text-[20px] font-serif mr-[50px]">Type:</span> {profileDetails.type}
        </div>
        <div className="mb-2 flex justify-between text-left w-[170px]">
          <span className="text-[#7A999C] text-left text-[20px] font-serif mr-[50px]">Loyalty Points:</span>{" "}
          <span className="text-left">{profileDetails.loyaltyPoints}</span>
        </div>
        <div>
          <h1 className="text-[#7A999C] text-left text-[20px] font-serif ">Current Supply {appState.currentSupply}</h1>
        </div>
        <div class="w-[200px] flex flex-col h-10 p-5 m-3">
        <button onClick={() => mint()} class="px-6 py-3 bg-[#7A999C] rounded-lg text-white font-bold">
          Mint
        </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default profile;
