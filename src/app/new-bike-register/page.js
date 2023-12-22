import AddNewBike from "@/components/AddNewBike";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import styles from "./new-bike.module.css";
const Page = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <NavBar />
        <SideBar />
        <AddNewBike />
      </div>
    </>
  );
};

export default Page;
