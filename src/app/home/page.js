import BikeCard from "@/components/BikeCard";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import styles from "./home.module.css";

export default async function Page() {
  // const data = await getServerSideProps();
  // const data = null;
  return (
    <>
      <div className={`${styles.container}`}>
        <NavBar></NavBar>
        <BikeCard />
        <SideBar></SideBar>
      </div>
    </>
  );
}

/*
1.By exporting getServerSideProps, you are telling Next.js 
that it should run this function on the server side and 
fetch the required data before rendering the page.

2.The result of this function is then passed as props to your page component, 
allowing you to use the fetched data in your component.
*/

/*
async function getServerSideProps() {
  const response = await fetch("http://localhost:9090/fetch-all", {
    cache: "no-store",
  });
  //this wont work will give error of response cannot be cached to large
  //to handle so use cache:'no-store'
  const data = await response.json();
  // console.log(data);
  return data;
}
*/
// export default Page;
