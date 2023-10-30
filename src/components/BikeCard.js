import styles from "./BikeCard.module.css";
import Image from "next/image";
const BikeCard = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.card}`}>
        <Image src="/duke_390.jpg" alt="me" width="350" height="200" />
        <div className={`${styles.title}`}>
          <b>Duke 390 2024 new gen</b>
        </div>
        <div className={`${styles.price}`}>
          <b>₹ 97,054</b> <span>Onwards</span>
        </div>
        <div className={`${styles.button}`}>
          <button> More Details </button>
        </div>
      </div>
      <div className={`${styles.card}`}>
        <Image src="/duke_390.jpg" alt="me" width="350" height="200" />
        <div className={`${styles.title}`}>
          <b>Duke 390 2024 new gen</b>
        </div>
        <div className={`${styles.price}`}>
          <b>₹ 97,054</b> <span>Onwards</span>
        </div>
        <div className={`${styles.button}`}>
          <button> More Details </button>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
