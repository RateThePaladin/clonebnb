'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'

type Params = {
    params: {
        startDate: string,
        endDate: string,
        listingId: string,
        totalPrice: string
    }
}

const BookingConfirmationPage = () => {

  const router = useRouter();

  const searchParams = useSearchParams()
    const passedParams = searchParams?.get('startDate')
    // console.log(search)
//   const { startDate, endDate, listingDetails, totalPrice } = router.query;

// console.log({});

  const [creditCardDetails, setCreditCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (event) => {
    setCreditCardDetails({
      ...creditCardDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic Credit Card validation
    const { cardNumber, expiryDate, cvv } = creditCardDetails;

    if (cardNumber.length !== 16) {
      alert('Card Number should be 16 digits');
      return;
    }

    if (cvv.length !== 3) {
      alert('CVV should be 3 digits');
      return;
    }

    const expiry = new Date(expiryDate);
    const now = new Date();
    if (expiry <= now) {
      alert('Expiry date should be in the future');
      return;
    }

    // Implement booking confirmation logic here
    alert('Booking confirmed');
  };


  return (
    <div>
      <h2>Booking Confirmation</h2>

      <h3>Listing Details</h3>
      <p>{searchParams?.get('listingTitle')}</p>
      <p>Location: {searchParams?.get('location')}</p>

      <h3>Dates</h3>
      <p>Start Date: {searchParams?.get('startDate')}</p>
      <p>End Date: {searchParams?.get('endDate')}</p>

      <h3>Total Price</h3>
      <p>${searchParams?.get('totalPrice')}</p>

      <h3>Enter Your Credit Card Details</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input type="text" name="cardNumber" value={creditCardDetails.cardNumber} onChange={handleInputChange} required />
        </label>
        <label>
          Expiry Date:
          <input type="month" name="expiryDate" value={creditCardDetails.expiryDate} onChange={handleInputChange} required />
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" value={creditCardDetails.cvv} onChange={handleInputChange} required />
        </label>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};


export default BookingConfirmationPage;