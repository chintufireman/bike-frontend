import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
   <div className={`${styles.outer_container}`}>
    <div className={`${styles.inner_container}`}>
      <nav>
        <ul>
          <Link href="/home">logo</Link>
          <Link href={"/home"}>Home</Link>
          <li><input type="text" /></li>
          <Link href={"/new-bike-register"}>Add New Bike</Link>
        </ul>
      </nav>
    </div>
   </div>
  );
}

export default NavBar;