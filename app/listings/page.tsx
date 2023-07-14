'use client'

// import type { Metadata } from 'next'
// import { useState } from "react";
// // import getAllListings from '../../lib/getAllListings'
import Link from 'next/link'
// import jsonData from '../../lib/house_listings_final.json'
import Style from './page.module.css'
// // import Buttons from './components/buttons'
// import FilteredListings from './components/priceFilter'

// export const metadata: Metadata = {
//     title: 'Listings'
// }

// import React from 'react'

// export default async function Listings() {
//     const listingsData = jsonData;

//     const listing = listingsData;


//     // const [item, setItem] = useState(jsonData);

//     // const filterItem = (curcat) => {
//     //     const newItem = listing.filter((newVal) => {
//     //       return newVal.location === curcat;
//     //     });
//     //     setItem(newItem);
//     //   };

   

//     const content = (
//         <section>
//             <h3>All Listings</h3>

//             <FilteredListings houseListings={listing} />
//             <div className={Style.block}>
//             {listing.map(listing => {
//             return (
//                 <>
//                 {/* <Buttons 
//                 filterItem={filterItem}
//                 setItem={setItem}
//                 menuItems={menuItems}
//                 /> */}
//                 <div className={Style.item} key={listing.id} >
//                     <Link href={`/listings/${listing.id}` }>
//                         <img src={listing.images[0]} alt={listing.title} className={Style.img} />
//                         <p>{listing.title }</p>
//                         <p>{listing.location }</p>
//                         <p>${listing.rental_price_per_night} night</p>
//                     </Link>
//                 </div>
//                 </>
//             )
//         })}
//         </div>
//         </section>
//     )
//   return (
//     content
//   )
// }


import React, { useState, useEffect } from 'react';
import data from '../../lib/house_listings_final.json';

// type HouseListing = {
//   id: number;
//   title: string;
//   details: string;
//   images: string[];
//   rental_price_per_night: number;
//   location: string;
// }
const FilterComponent: React.FC = () => {
    const prices = data.map((listing: Listing) => listing.rental_price_per_night);
    const maxPriceInData = Math.max(...prices);
    const minPriceInData = Math.min(...prices);
  
    const [maxPrice, setMaxPrice] = useState<number>(maxPriceInData);
    const [location, setLocation] = useState<string>('All');
  
    const locations = ['All', ...Array.from(new Set(data.map((listing: Listing) => listing.location)))];
  
    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setMaxPrice(Number(event.target.value));
    };
  
    const handleLocationChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setLocation(event.target.value as string);
    };
  

    const filteredData = data.filter((listing: Listing) => {
      return listing.rental_price_per_night <= maxPrice && (location !== 'All' ? listing.location === location : true);
    });
  
    return (
      <div>
        <div>
          <h4>Max Price Per Night: ${maxPrice}</h4>
          <input
            type="range"
            min={minPriceInData}
            max={maxPriceInData}
            value={maxPrice}
            onChange={handlePriceChange}
          />
        </div>
        <div>
          <h4>Location</h4>
          <select value={location} onChange={handleLocationChange}>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div>
          <h3>Results</h3>
          <div className={Style.block}>
          
                     
          {filteredData.map((listing: Listing) => (
            <div className={Style.item} key={listing.id}>
            <div>
            <Link href={`/listings/${listing.id}` }>
              <h4>{listing.title}</h4>
              <div>
                <img src={listing.images[0]} alt={listing.title} className={Style.img}/>
              </div>
              <p>Price per night: ${listing.rental_price_per_night}</p>
              <p>Location: {listing.location}</p>
              </Link>
            </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default FilterComponent;
