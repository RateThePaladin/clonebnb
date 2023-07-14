// 'use client'
// import jsonData from './house_listings_final.json'
// import * as fs from 'fs';
import * as path from 'path';
// import rawData from './house_listings_final.json'

export default async function getListing(listingId: string) {
    const response = await fetch ('https://raw.githubusercontent.com/RateThePaladin/clonebnb/main/lib/house_listings_final.json')

    if (!response.ok) throw new Error(`Listing with ID ${listingId} not found.`);

    const rawData = await response.json()
    console.log(rawData)
    const listings: Listing[] = JSON.parse(rawData);
    

        for (let listing of listings) {
            // console.log(`Checking listing with ID: ${listing.id}`);
            if (listing.id === Number(listingId)) {
                // console.log(listing);
                return listing;
            } 
        }
    
    // const rawData = fs.readFileSync(path.resolve(process.cwd(), 'lib/house_listings_final.json'), 'utf8');
    // console.log(`Loaded ${listings.length} listings from file.`);
   

    
}