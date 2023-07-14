'use client'
import React from 'react'
import { useRef } from 'react'
import getListing from '../../../lib/getListing'
import Style from './page.module.css'
import testGetListing from './../../../lib/testGetListing'
import data from '../../../lib/house_listings_final.json';
import { useState, useEffect } from 'react'
import { Suspense } from 'react'
import ImageGallery from './components/gallery'

type Params = {
    params: {
        listingId: string
    }
}

const ListingPage = ({ params: { listingId }}: Params) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set time to 00:00:00.000
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        if(startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);

            if (start >= today && end >= tomorrow) {
                setSubmitButtonDisabled(false);

                // filter the listing data based on the listingId
                const listingContent = data.find(listing => listing.id === Number(listingId));
                
                // calculate the number of days
                const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
                const diffDays = Math.round(Math.abs((start.getTime() - end.getTime()) / oneDay));

                // calculate total price
                const price = listingContent ? Number(listingContent.rental_price_per_night) * diffDays : 0;
                console.log(price)
                setTotalPrice(price);
            } else {
                setSubmitButtonDisabled(true);
            }
        } else {
            setSubmitButtonDisabled(true);
        }
    }, [startDate, endDate]);

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    };
    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    };

    const handleSubmit = () => {
        // Handle date range submission here
    };

    // filter the listing data based on the listingId
    const listingContent = data.find(listing => listing.id === Number(listingId));

    if (!listingContent) {
        return <div>No listing found</div>;
    }

    return (
        <>
        <div className={Style.main}>
            <div className={Style.gallery}>
                <img src={listingContent.images[0]} alt={listingContent.title} className={Style.primaryImg} />
                <img src={listingContent.images[1]} alt={listingContent.title} className={Style.secondaryImg} />
                <img src={listingContent.images[2]} alt={listingContent.title} className={Style.secondaryImg} />
            </div>
            <h3>{listingContent.details}</h3>

            <h2>Select Dates</h2>
            <p>${listingContent.rental_price_per_night} / night</p>
            <label>
                Start date:
                <input type="date" value={startDate} onChange={handleStartDateChange} min={new Date().toISOString().split('T')[0]} />
            </label>
            <label>
                End date:
                <input type="date" value={endDate} onChange={handleEndDateChange} min={startDate ? new Date(new Date(startDate).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]} />
            </label>
            <button onClick={handleSubmit} disabled={submitButtonDisabled}>Submit</button>

            {/* display total price if start date and end date are selected */}
            {startDate && endDate && <h4>Total Price: ${totalPrice}</h4>}
        </div>
        </>
    )
}


export default ListingPage;