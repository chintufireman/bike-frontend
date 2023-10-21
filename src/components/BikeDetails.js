import styles from "./bikedetails.module.css";

const BikeDetails = () => {
  return (
    <div className={`${styles.outer_container}`}>
      <div className={`${styles.inner_container}`}>
        <h1 className={`${styles.header}`}>Tvs raider</h1>
        <div className={`${styles.info}`}>
          <div className={`${styles.image}`}>
            <img
              src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/144907/tvs-raider-125-left-rear-three-quarter3.jpeg?isig=0&wm=3"
              alt=""
            />
          </div>
          <div className={`${styles.price}`}>PRice</div>
        </div>
        <div className={`${styles.specs_features}`}>
          <h1 className={`${styles.header}`}>
            Raider 125 Specification and features
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
