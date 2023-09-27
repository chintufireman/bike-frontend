import BikeCard from "@/components/BikeCard";

const Page = () => {
  return (
    <div className="flex justify-center h-screen items-center flex-col">
      <div className="h-screen flexn justify-center items-center">
      <BikeCard logo="/cocacola_logo.png" productImg="cocacola.png" cardColor={{"--clr": "#f40103" }}/>
      <BikeCard logo="/sprite_logo.png" productImg="sprite.png" cardColor={{"--clr": "#02953a" }}/>
      <BikeCard logo="/pepsi_logo.png" productImg="pepsi.webp" cardColor={{"--clr": "rgba(0,52,102,255)" }}/>
      </div>
    </div>
  );
};

export default Page;
