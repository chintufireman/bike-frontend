"use client";
import { useEffect, useState } from "react";
import styles from "./bikedetails.module.css";
import powerAndPerformance from "../../utils/PowerAndPerformance.json";
import brakeWheelSuspension from "../../utils/BrakeWheelSuspension.json";
import dimensionsAndChassis from "../../utils/DimensionsAndChassis.json";
const BikeDetails = ({ bikeInfo }) => {
  //query object has been removed and is replaced by new way of fetching useSearchParams

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    convertBlobToDataURL(bikeInfo);
    // console.log(powerAndPerformance);
  }, []);

  const convertBlobToDataURL = (bike) => {
    const byteCharacters = atob(bike.Image.Data);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const newblob = new Blob([byteArray], { type: "image/jpeg" });

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(newblob);
  };

  return (
    <div className={`${styles.outer_container}`}>
      <div className={`${styles.inner_container}`}>
        <h1 className={`${styles.header}`}>{bikeInfo.name}</h1>
        <div className={`${styles.image}`}>
          <img src={imageUrl} alt="" />
        </div>
        <div className={`${styles.varient}`}>Varient single disc</div>
        <div className={`${styles.price}`}>{bikeInfo.price}</div>
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
              {powerAndPerformance.map((attribute) => (
                <tr key={attribute.id}>
                  <td>{attribute.label}</td>
                  <td>{bikeInfo[attribute.id]}</td>
                </tr>
              ))}
              <tr>
                <th>Brakes, Wheels & Suspension</th>
              </tr>
              {brakeWheelSuspension.map((attribute) => (
                <tr key={attribute.id}>
                  <td>{attribute.label}</td>
                  <td>{bikeInfo[attribute.id]}</td>
                </tr>
              ))}
              <tr>
                <th>Dimensions & Chassis</th>
              </tr>
              {dimensionsAndChassis.map((attribute) => (
                <tr key={attribute.id}>
                  <td>{attribute.label}</td>
                  <td>{bikeInfo[attribute.id]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={`${styles.specs}`}>Features</div>
      </div>
    </div>
  );
};

export default BikeDetails;
