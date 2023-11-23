import BikeDetails from "@/components/BikeDetails";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import styles from "@/app/home/home.module.css";
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
