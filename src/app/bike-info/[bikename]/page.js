import BikeDetails from "@/components/BikeDetails";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import styles from "@/app/bike-info/css/bikeinfo.module.css";

const page = async ({ params }) => {
  const { bikename } = params;
    
  const bikedata = await getSingleBikeData(decodeURIComponent(bikename))
  return (
    <>
      <div className={`${styles.container}`}>
        <NavBar />
        <SideBar />
        <BikeDetails bikeInfo={bikedata} />
      </div>
    </>
  );
};

async function getSingleBikeData(bikename) {
  // Fetch data from external API
  console.log("Bike name ", bikename);
  const res = await fetch(
    `http://localhost:9090/fetch-bike?bikename=${bikename}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const bikeData = await res.json();
  // Pass data to the page via props

  return bikeData;
}

export default page;
