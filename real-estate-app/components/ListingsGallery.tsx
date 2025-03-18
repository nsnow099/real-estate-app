import ListingTile from "./ListingTile";
import styles from "@/styles/ListingsGallery.module.css";

// Updated Data: 8 Listings, 4 Per Row
const listings = [
  { image: "/images/house1.jpg", address: "123 Sesame Street, St Catharines, ON", price: "$500,000", beds: 4, baths: 3 },
  { image: "/images/house2.jpg", address: "456 Oakwood Drive, Toronto, ON", price: "$650,000", beds: 3, baths: 2 },
  { image: "/images/house3.jpg", address: "789 Pine Avenue, Mississauga, ON", price: "$750,000", beds: 5, baths: 4 },
  { image: "/images/house1.jpg", address: "101 Maple Lane, Ottawa, ON", price: "$530,000", beds: 3, baths: 2 },
  { image: "/images/house2.jpg", address: "222 Birch Street, Vaughan, ON", price: "$720,000", beds: 4, baths: 3 },
  { image: "/images/house3.jpg", address: "333 Cedar Road, Hamilton, ON", price: "$480,000", beds: 3, baths: 2 },
  { image: "/images/house1.jpg", address: "444 Elm Avenue, Brampton, ON", price: "$600,000", beds: 4, baths: 3 },
  { image: "/images/house2.jpg", address: "555 Spruce Crescent, London, ON", price: "$690,000", beds: 5, baths: 4 },
];

const ListingsGallery = () => {
  return (
    <div className={styles.gallery}>
      {listings.map((listing, index) => (
        <ListingTile key={index} {...listing} />
      ))}
    </div>
  );
};

export default ListingsGallery;
