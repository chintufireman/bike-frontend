"use client";
import { useEffect, useState } from "react";
import style from "./sidebar.module.css";
// import { IonIcon } from 'ionicons';
// import { logoApple } from 'ionicons/icons';
const SideBar = () => {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    // This effect will run whenever activeItem changes
    if (activeItem !== null) {
      // Set the "active" class to the selected item
      document.querySelectorAll(`.${style.list}`).forEach((element) => {
        element.classList.remove(style.active);
      });
      activeItem.classList.add(`${style.active}`, `${style.list}`);
    }
  }, [activeItem]);

  const handleItemClick = (event) => {
    setActiveItem(event.currentTarget);
  };

  const handleToggle = (event) => {
    let menuToggle = document.querySelector(`.${style.toggle}`);
    let inner_container = document.querySelector(`.${style.inner_container}`);

    inner_container.classList.toggle(`${style.active}`);
    menuToggle.classList.toggle(`${style.active}`);
  };

  return (
    <>
      <div className={`${style.toggle}`} onClick={handleToggle}>
        <ion-icon name="menu" class={`${style.open}`} />
        <ion-icon name="close-circle-outline" class={`${style.close}`} />
      </div>
      <div className={`${style.outer_container}`}>
        <div className={`${style.inner_container}`}>
          <ul>
            <li
              className={`${style.list} ${style.active}`}
              onClick={handleItemClick}
            >
              <b></b>
              <b></b>
              <a href="#">
                <span className={`${style.icon}`}>
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className={`${style.title}`}>Home</span>
              </a>
            </li>
            <li className={`${style.list}`} onClick={handleItemClick}>
              <b></b>
              <b></b>
              <a href="#">
                <span className={`${style.icon}`}>
                  <ion-icon name="bicycle-outline" />
                </span>
                <span className={`${style.title}`}>New Bikes</span>
              </a>
            </li>
            <li className={`${style.list}`} onClick={handleItemClick}>
              <b></b>
              <b></b>
              <a href="#">
                <span className={`${style.icon}`}>
                  <ion-icon name="bicycle-outline" />
                </span>
                <span className={`${style.title}`}>New Scooters</span>
              </a>
            </li>
            <li className={`${style.list}`} onClick={handleItemClick}>
              <b></b>
              <b></b>
              <a href="#">
                <span className={`${style.icon}`}>
                  <ion-icon name="flash-outline" />
                </span>
                <span className={`${style.title}`}>Electric Bikes</span>
              </a>
            </li>
            <li className={`${style.list}`} onClick={handleItemClick}>
              <b></b>
              <b></b>
              <a href="#">
                <span className={`${style.icon}`}>
                  <ion-icon name="people-circle-outline"></ion-icon>
                </span>
                <span className={`${style.title}`}>Reviews</span>
              </a>
            </li>
            <li className={`${style.list}`} onClick={handleItemClick}>
              <b></b>
              <b></b>
              <a href="#">
                <span className={`${style.icon}`}>
                  <ion-icon name="newspaper-outline"></ion-icon>
                </span>
                <span className={`${style.title}`}>News, Videos & Tips</span>
              </a>
            </li>
            <li className={`${style.list}`} onClick={handleItemClick}>
              <b></b>
              <b></b>
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
    </>
  );
};

export default SideBar;
