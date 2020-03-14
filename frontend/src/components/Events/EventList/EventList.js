import React from 'react';
import EventItem from './EventItem/EventsItem';
import './EventList.css';

const eventList = props => {
  const events = props.events.map(event => {
    return (
      <EventItem
        userId={props.authUserId}
        key={event._id}
        eventId={event._id}
        title={event.title}
        creatorId={event.creator._id}
      />
    );
  });

  return <ul className='events__list'>{events}</ul>;
};

export default eventList;
