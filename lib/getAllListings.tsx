import jsonData from './house_listings_final.json'

export default async function getAllListings() {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // if (!res.ok) throw new Error(res.statusText)
    const listing = jsonData
    return listing
}