type Params = {
    params: {
        listingId: string
    }
}

import React from 'react'
import Style from './../page.module.css'
import getListing from '../../../../lib/getListing'

export default async function listing({ params: { listingId }}: Params) {
    // const listingData: Promise<Listing> = getListing(listingId);
    // const listingContent = await Promise.resolve(listingData);
    // const listingContent = await Promise.resolve(listing);

    // const 

//     return listingContent.images.map((image, index) => 
//         <>

//         <div className={Style.main}>
//             <div className={Style.gallery}>
//                 <img src={image} alt={listingContent.title} className={Style.secondaryImg} key={index} />
//             </div>
//         </div>

//         </>
//     );
}
