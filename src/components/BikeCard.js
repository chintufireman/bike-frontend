"use client";
import { useEffect, useState } from "react";
import styles from "./BikeCard.module.css";
import Image from "next/image";
import Link from "next/link";

const BikeCard = () => {
  const [bikeData, setBikeData] = useState([]);

  // Convert the image blob to a data URL
  const convertBlobToDataURL = (bike) => {
    // console.log(bike);
    const byteCharacters = atob(bike.Image.Data);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const newblob = new Blob([byteArray], { type: "image/jpeg" });

    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedBike = {
        ...bike,
        Image: {
          Data: reader.result,
        },
      };
      setBikeData((prevBikeData) => [...prevBikeData, updatedBike]);
    };
    reader.readAsDataURL(newblob);
  };

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/fetch-all`, {
          cache: "no-store",
        });
        const cardInfoFromServer = await response.json();
        // console.log(cardInfoFromServer);

        // Move the imageBlob processing inside the fetchCardDetails function
        cardInfoFromServer.forEach((data) => {
          // console.log(data);
          convertBlobToDataURL(data);
        });
      } catch (error) {
        console.error("error in fetching card data", error);
      }
    };
    fetchCardDetails();
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className={`${styles.container}`}>
      {bikeData.map((bike, index) => (
        <div className={`${styles.card}`} key={index}>
          <Image
            src={bike.Image.Data}
            alt={`Bike ${index + 1}`}
            width="350"
            height="200"
          />
          <div className={`${styles.title}`}>
            <b>{bike.name}</b> {/* Replace with actual title attribute */}
          </div>
          <div className={`${styles.price}`}>
            <b>{bike.price}</b> <span>Onwards</span>{" "}
            {/* Replace with actual price attribute */}
          </div>
          <div className={`${styles.button}`}>
            <Link
              href={{
                pathname: `/bike-info/${bike.name}`,
                // query: { bikename: `${bike.name}`, bikeprice: `${bike.price}` },
              }}
            >
              <button>More details</button>
            </Link>
            {/*
            had to remove because not able to fetch data
             <button
              onClick={() => {
                router.push({
                  
                });
              }}
            >
              More Details
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BikeCard;
