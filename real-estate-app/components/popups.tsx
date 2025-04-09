import React from "react";
import styles from "@/styles/Popup.module.css"; // Import CSS module

interface HousePopupProps {
  house: {
    address: string;
    location?: string;
    beds: number;
    baths: number;
    garage?: number;
    price: string;
    image: string;
    size: string; // Square footage
    kitchen: {
      features: string;
      dimensions: string;
    };
    livingRoom: {
      features: string;
      dimensions: string;
    };
    basement: {
      type: string;
      features: string;
    };
  };
  onClose: () => void;
}

const HousePopup: React.FC<HousePopupProps> = ({ house, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeButtonArea} onClick={onClose}>
          <button className={styles.closeButton} onClick={onClose}>✖</button>
        </div>
        
        
        <img src={house.image} alt={house.address} className={styles.image} />

        <div className={styles.content}>
          <h2 className={styles.price}>{house.price}</h2>
          <p className={styles.address}>{house.address}</p>

          <div className={styles.features}>
            <span>🏡 {house.beds} Beds</span>
            <span>🛁 {house.baths} Baths</span>
            {house.garage !== undefined && <span>🚗 {house.garage} Garage</span>}
          </div>

          <div className={styles.section}>
            <h3>🏠 House Details</h3>
            <p>📏 Size: {house.size} sq. ft.</p>
          </div>

          <div className={styles.section}>
            <h3>🍽️ Kitchen</h3>
            <p>🔹 Features: {house.kitchen.features}</p>
            <p>📐 Dimensions: {house.kitchen.dimensions}</p>
          </div>

          <div className={styles.section}>
            <h3>🛋️ Living Room</h3>
            <p>🔹 Features: {house.livingRoom.features}</p>
            <p>📐 Dimensions: {house.livingRoom.dimensions}</p>
          </div>

          <div className={styles.section}>
            <h3>🏡 Basement</h3>
            <p>🔹 Type: {house.basement.type}</p>
            <p>🔹 Features: {house.basement.features}</p>
          </div>

          <button className={styles.contactButton}>Contact Agent</button>
        </div>
      </div>
    </div>
  );
};

export default HousePopup;
