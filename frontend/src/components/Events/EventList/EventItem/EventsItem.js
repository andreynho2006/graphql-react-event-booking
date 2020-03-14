import React from 'react';
import './EventsItem.css';

const eventItem = props => (
  <li key={props.eventId} className='events__list-item'>
    <div>
      <h1> {props.title}</h1>
      <h2>99.99$</h2>
    </div>
    <div>
      {props.userId === props.creatorId ? (
        <p>You are the owner of this event</p>
      ) : (
        <button className='btn'>View details</button>
      )}
    </div>
  </li>
);
export default eventItem;
