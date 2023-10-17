import style from "./sidebar.module.css";
// import { IonIcon } from 'ionicons';
// import { logoApple } from 'ionicons/icons';
const SideBar = () => {
  return (
    <div className={`${style.outer_container}`}>
      <div className={`${style.inner_container}`}>
        <ul>
          <li className={`${style.list} ${style.active}`}>
            <a href="#">
              <span className={`${style.icon}`}>
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className={`${style.title}`}>Home</span>
            </a>
          </li>
          <li className={`${style.list}`}>
            <a href="#">
              <span className={`${style.icon}`}>
                <ion-icon name="bicycle-outline" />
              </span>
              <span className={`${style.title}`}>New Bikes</span>
            </a>
          </li>
          <li className={`${style.list}`}>
            <a href="#">
              <span className={`${style.icon}`}>
                <ion-icon name="bicycle-outline" />
              </span>
              <span className={`${style.title}`}>New Scooters</span>
            </a>
          </li>
          <li className={`${style.list}`}>
            <a href="#">
              <span className={`${style.icon}`}>
                <ion-icon name="flash-outline" />
              </span>
              <span className={`${style.title}`}>Electric Bikes</span>
            </a>
          </li>
          <li className={`${style.list}`}>
            <a href="#">
              <span className={`${style.icon}`}>
                <ion-icon name="people-circle-outline"></ion-icon>
              </span>
              <span className={`${style.title}`}>Reviews</span>
            </a>
          </li>
          <li className={`${style.list}`}>
            <a href="#">
              <span className={`${style.icon}`}>
                <ion-icon name="newspaper-outline"></ion-icon>
              </span>
              <span className={`${style.title}`}>News, Videos & Tips</span>
            </a>
          </li>
          <li className={`${style.list}`}>
            <a href="#">
              <span className={`${style.icon}`}>
                <ion-icon name="log-in-outline"></ion-icon>
              </span>
              <span className={`${style.title}`}>Login</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
