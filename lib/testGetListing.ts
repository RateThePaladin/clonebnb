export default async function getUserTest(userId: number){
    const res = await fetch('https://raw.githubusercontent.com/RateThePaladin/clonebnb/main/lib/house_listings_final.json')
    if (!res.ok) throw new Error("Bad!")
    let rawData = await res.json()
    console.log(rawData)
    return rawData

}

getUserTest(2)