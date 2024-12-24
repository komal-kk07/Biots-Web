import React  from 'react';
import './Event1.css';

const EventCard = ({ image, title, description,index}) => {
  return (
    <div className='event-card'
     style={{
      display: "flex",
      flexDirection: index % 2 === 0 ?'column':'row-reverse',
      backgroundColor: index % 2 === 0 ?"#f0f0f0" : "#ffffff",
     }}>
      <div className="event-image">
        <img 
          src={image} 
          alt={`${title} Placeholder`} 
          className="event-image-content"
        />
      </div>
      <div className="event-details">
        <h3 className="event-title">{title}</h3>
        <p className="event-description">{description}</p>
      </div> 
    </div>
    
    
  );
};

const EventsList = () => {
  const events = [
    {
      image: "source",
      title: "INVICTUS",
      description: "It was a quizzing event which had questions from various domains including entertainment, sports, current affairs, and technology, and it consisted of 2 rounds."
    },
    {
      image: "source",
      title: "WIKI WARS",
      description: "Wiki Wars is a strategic game of navigating Wikipedia pages without a keyboard. Players aim to reach a target page from a starting page in limited time, using the fewest clicks. They progress by clicking blue Wikipedia links to move from one page to another."
    },
    {
      image: "source",
      title: "MITACS-WEBINAR",
      description: "BIOTS hosted a Mitacs Webinar on the Globalink Research Internship, funded by Canada, covering research experience, skill development, and global collaborations. Experts guided students on applying, boosting their academic paths and analytical skills."
    },
    {
      image: "source",
      title: "BIOMEME",
      description: "Meme enthusiasts across campus crafted biotech-themed humor, blending creativity with science. Participants showcased skills, submitting memes as JPEGs/PDFs via Google Forms. The event sparked excitement and a passion for new creative expression."
    },
    {
        image: "source",
        title: "PHIR HERA PHERI",
        description: "Meme enthusiasts across campus crafted biotech-themed humor, blending creativity with science. Participants showcased skills, submitting memes as JPEGs/PDFs via Google Forms. The event sparked excitement and a passion for new creative expression."
      },
      {
        image: "source",
        title: "SPIN THE WHEEL",
        description: "Meme enthusiasts across campus crafted biotech-themed humor, blending creativity with science. Participants showcased skills, submitting memes as JPEGs/PDFs via Google Forms. The event sparked excitement and a passion for new creative expression."
      }
  ];

  return (
    <div className="events-list">
      {events.map((event, index) => (
        <EventCard
          key={index}
          image={event.image}
          title={event.title}
          description={event.description}
          
        />
      ))}
    </div>
  );

  
};

export default EventsList;
