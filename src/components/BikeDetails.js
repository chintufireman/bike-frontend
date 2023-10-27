import styles from "./bikedetails.module.css";

const BikeDetails = () => {
  return (
    <div className={`${styles.outer_container}`}>
      <div className={`${styles.inner_container}`}>
        <h1 className={`${styles.header}`}>Tvs raider</h1>
        <div className={`${styles.image}`}>
          <img
            src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/144907/tvs-raider-125-left-rear-three-quarter3.jpeg?isig=0&wm=3"
            alt=""
          />
        </div>
        <div className={`${styles.varient}`}>Varient single disc</div>
        <div className={`${styles.price}`}>Price</div>
        <div className={`${styles.header}`}>
          Raider 125 Specifications & Features
        </div>
        <div className={`${styles.specs}`}>Specs</div>
        <div className={`${styles.specs_table}`}>
          <table border={1}>
            <tbody>
              <tr>
                <th>Power and Performance</th>
              </tr>
              <tr>
                <td>Displacement</td>
                <td>124.8 cc</td>
              </tr>
              <tr>
                <td>Max Power</td>
                <td>11.2 bhp @ 7500 rpm</td>
              </tr>
              <tr>
                <td>Max Torque</td>
                <td>11.2 Nm @ 6000 rpm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`${styles.specs}`}>Features</div>
      </div>
    </div>
  );
};

export default BikeDetails;
