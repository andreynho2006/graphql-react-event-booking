import React from 'react';
import './BookingsList.css';

const bookingList = props => (
  <ul className='bookings__list'>
    {props.bookings.map(booking => {
      return (
        <li key={booking._id} className='bookings__item'>
          <div className='booking__item-data'>
            {booking.event.title} -{' '}
            {new Date(booking.createdAt).toLocaleDateString()}
          </div>
          <div className='booking__item-actions'>
            <button
              className='btn'
              onClick={props.onDelete.bind(this, booking._id)}
            >
              Cancel
            </button>
          </div>
        </li>
      );
    })}
  </ul>
);

export default bookingList;
