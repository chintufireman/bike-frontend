'use client'
import BikeCard from "@/components/BikeCard";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Script from "next/script";

const Page = () => {
  return (
    <>
      <div className="">
        <SideBar></SideBar>
        {/* <NavBar></NavBar> */}
      </div>
      <Script
        src="https://unpkg.com/ionicons@latest/dist/ionicons.js"
        onLoad={() => {
          console.log("Script has loaded");
        }}
      />
    </>
  );
};

export default Page;
