import BikeDetails from "@/components/BikeDetails";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import styles from "@/app/bike-info/css/bikeinfo.module.css";
const page = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <NavBar />
        <SideBar />
        <BikeDetails />
      </div>
    </>
  );
};

export default page;
