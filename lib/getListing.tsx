// import jsonData from './house_listings_final.json'
import * as fs from 'fs';
import * as path from 'path';

export default async function getListing(listingId: string) {
    const rawData = fs.readFileSync(path.resolve(process.cwd(), 'lib/house_listings_final.json'), 'utf8');
    const listings: Listing[] = JSON.parse(rawData);

    // console.log(`Loaded ${listings.length} listings from file.`);

    for (let listing of listings) {
        // console.log(`Checking listing with ID: ${listing.id}`);
        if (listing.id === Number(listingId)) {
            // console.log(listing);
            return listing;
        } 
    }

    throw new Error(`Listing with ID ${listingId} not found.`);
}