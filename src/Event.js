import React from 'react';
import './Event.css'; 

const EventCard = () => {
  return (
    <div className="event-container">
      <h2 className="event-title">EVENTS</h2>
      <div className="event-image-placeholder">
        <img 
          alt="Event Placeholder" 
          className="event-image-content"
        />
      </div>
      <h3 className="event-subtitle">Flagship event</h3>
      <p className="event-description">
        This will be the description of the flagship event to be filled immediately as soon as the event details are provided.
      </p>
    </div>
  );
};

export default EventCard;
