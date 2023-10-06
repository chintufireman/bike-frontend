import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
   <div className={`${styles.outer_container}`}>
    <div className={`${styles.inner_container}`}>
      <nav>
        <ul>
          <li>logo</li>
          <li>Home</li>
          <li><input type="text" /></li>
          <li>Login</li>
        </ul>
      </nav>
    </div>
   </div>
  );
}

export default NavBar;