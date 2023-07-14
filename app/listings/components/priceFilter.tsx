// 'use client'
// import { useState } from 'react';

// const FilteredListings = ({ houseListings }) => {
//     const [maxPrice, setMaxPrice] = useState(Infinity);
//     const [location, setLocation] = useState('');

//     const handlePriceChange = (event) => {
//         setMaxPrice(event.target.value);
//     };

//     const handleLocationChange = (event) => {
//         setLocation(event.target.value);
//     };

//     const uniqueLocations = Array.from(new Set(houseListings.map(listing => listing.location)));

//     const filteredListings = houseListings
//         .filter(listing => listing.rental_price_per_night <= maxPrice)
//         .filter(listing => listing.location === location);

//     return (
//         <div>
//             <label>
//                 Maximum price per night:
//                 <input type="number" value={maxPrice} onChange={handlePriceChange} />
//             </label>
//             <br />
//             <label>
//                 Location:
//                 <select value={location} onChange={handleLocationChange}>
//                     <option value="">All</option>
//                     {uniqueLocations.map(loc => (
//                         <option key={loc} value={loc}>{loc}</option>
//                     ))}
//                 </select>
//             </label>
//             <ul>
//                 {filteredListings.map(listing => (
//                     <li key={listing.id}>{listing.title} - ${listing.rental_price_per_night} - Located in {listing.location}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default FilteredListings;