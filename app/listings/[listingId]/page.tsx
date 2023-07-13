'use client'
import React from 'react'
import getListing from '../../../lib/getListing'
import Style from './page.module.css'
import { useState } from 'react'
import { Suspense } from 'react'
import ImageGallery from './components/gallery'

type Params = {
    params: {
        listingId: string
    }
}

const ListingPage = async ({ params: { listingId }}: Params) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleSubmit = () => {
        // Handle date range submission here
    };

    const listingData: Promise<Listing> = getListing(listingId);
    const listingContent = await Promise.resolve(listingData);

    return (
        <>
        <div className={Style.main}>
            <h2>Select Dates</h2>
            <label>
                Start date:
                <input type="date" value={startDate} onChange={handleStartDateChange} />
            </label>
            <label>
                End date:
                <input type="date" value={endDate} onChange={handleEndDateChange} />
            </label>
            <button onClick={handleSubmit}>Submit</button>

            <div className={Style.gallery}>
                <img src={listingContent.images[0]} alt={listingContent.title} className={Style.primaryImg} />
                <img src={listingContent.images[1]} alt={listingContent.title} className={Style.secondaryImg} />
                <img src={listingContent.images[2]} alt={listingContent.title} className={Style.secondaryImg} />
            </div>
            <h3>{listingContent.details}</h3>
        </div>
        </>
    )
}
