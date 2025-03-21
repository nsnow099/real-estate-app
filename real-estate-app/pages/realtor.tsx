// realtor.tsx
import React from 'react';
import { useState } from "react";
import styles from '@/styles/realtor.module.css'; // Updated import to match new file name
import HamburgerMenu from "@/components/HamburgerMenu";

const realtor: React.FC = () => {
const [price, setPrice] = useState(5000); // Default price
const [isOpen, setIsOpen] = useState(false); // Dropdown state  
  return (
    <div className={`${styles.container} h-screen bg-cover bg-center`}>
      <header className={styles.header}>
          <HamburgerMenu /> {/* ✅ Replaces the default icon */}
        </header>
      <h1 className={styles.title}>Discover Agents</h1>

      <div>
      {/* Address Search Box */}
      <input
        type="text"
        placeholder="Address, City, Province, ZIP Code..."
        className={styles.searchBox1}
      />

      {/* Agent Name Search Box */}
      <input
        type="text"
        placeholder="Agent Name..."
        className={styles.searchBox2}
      />
    </div>
      <img
        src="/images/searchicon.jpg"
        alt="A beautiful icon"
        width={48}
        height={48}
        className={styles.searchIcon}
        style={{ cursor: "pointer" }} // Makes it look clickable
      />

      <div className={styles.filterButtonBuying} style={{ cursor: "pointer" }}>Buying</div>
      <div className={styles.filterButtonSelling} style={{ cursor: "pointer" }}>Selling</div>
      <select className={styles.filterButtonRating}>
        <option value="">Ratings</option>
        <option value="5stars">♦♦♦♦♦</option>
        <option value="4stars">♦♦♦♦</option>
        <option value="3stars">♦♦♦</option>
        <option value="2stars">♦♦</option>
        <option value="1stars">♦</option>
      </select>
      <div className={styles.dropdownContainer}>
      {/* Button to open dropdown */}
      <button className={styles.filterButtonPriceRange} onClick={() => setIsOpen(!isOpen)}>
        Price Range ▼
      </button>
      {/* Dropdown content (only shown when isOpen is true) */}
      {isOpen && (
        <div className={styles.dropdownContent}>
          <label className={styles.sliderLabel}>Price: ${price}</label>
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className={styles.priceSlider}
          />
        </div>
      )}
    </div>
      <select className={styles.filterButtonSpecialty}>
        <option value="">Select Specialty</option>
        <option value="residential">Residential</option>
        <option value="commercial">Commercial</option>
        <option value="luxury">Luxury</option>
      </select>
      <select className={styles.filterButtonLanguage}>
        <option value="">Select Language</option>
        <option value="english">English</option>
        <option value="french">French</option>
      </select>

      <h1 className={styles.agentCount}>100 agents found</h1>

      {/* Agent Cards (Example for one, repeat for others) */}
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className={`${styles.agentCard} ${
            index % 4 === 0 ? styles.agentCardLeft1 :
            index % 4 === 1 ? styles.agentCardLeft2 :
            index % 4 === 2 ? styles.agentCardLeft3 :
            styles.agentCardLeft4
          } ${index < 4 ? styles.topRow : styles.bottomRow}`} 
          style={{ cursor: "pointer" }} // Makes it look clickable
        >
          <div className={styles.agentImageContainer}>
            <img
              src="/images/contact.png"
              alt="A beautiful png"
              width={100}
              height={100}
              className={styles.agentImage}
            />
          </div>
          <h1 className={styles.agentRating}>Rating: ♦♦♦♦</h1>
          <h1 className={styles.agentName}>Name: Scottier Barney</h1>
          <h1 className={styles.agentBio}>Bio: ...</h1>
          <h1 className={styles.agentExperience}>Experience: ...</h1>
          <h1 className={styles.agentComments}>comments</h1>
        </div>
      ))}

      <img
        src="/images/skipbutton.png"
        alt="A beautiful forward"
        width={50}
        height={50}
        className={styles.skipButtonRight}
        style={{ cursor: "pointer" }} // Makes it look clickable
      />
      <img
        src="/images/skipbutton2.png"
        alt="A beautiful forward"
        width={50}
        height={50}
        className={styles.skipButtonLeft}
        style={{ cursor: "pointer" }} // Makes it look clickable
      />
    </div>
  );
};

export default realtor;