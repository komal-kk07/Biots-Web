import React from "react";
import "./EventCard.css";
import image1 from "./assets/Invictus.jpg";
import image2 from "./assets/Wiki-Wars.jpg";
import image3 from "./assets/MITACS Webinar.jpg";
import image4 from "./assets/Bio-Meme.jpg";
import image5 from "./assets/PhirHeraPheri.jpg";

const QuizEventCard = () => {
  return (
    <div>
        <div className="quiz-card">
      <div className="quiz-card__image">
      <img 
          src={image1}
          alt="Invictus Placeholder" 
          style={{width:"18.75rem",height:"18.75rem",borderRadius:"0.5rem",boxShadow:"0rem 0rem 1.25rem rgba(0,0,0,0.5)"}}/>
      </div>
      <div className="quiz-card__text">
        <h2 className="quiz-card__title">INVICTUS</h2>
        <p className="quiz-card__description">
          It was a quizzing event which had questions from various domains
          including entertainment, sports, current affairs, and technology, and
          it consisted of 2 rounds.</p>
      </div>
    </div>
    <div className="quiz-card1">
    <div className="quiz-card__image">
    <img 
          src={image2}
          alt="Invictus Placeholder" 
          style={{width:"18.75rem",height:"18.75rem",borderRadius:"0.5rem",boxShadow:"0rem 0rem 1.25rem rgba(0,0,0,0.5)"}}/>
    </div>
    <div className="quiz-card__text">
      <h2 className="quiz-card__title">WIKI WARS</h2>
      <p className="quiz-card__description">
       Wiki Wars is a strategic game of navigating Wikipedia pages without a keyboard. Players aim to reach a target page from a starting page in limited time, using the fewest clicks. They progress by clicking blue Wikipedia links to move from one page to another."</p>
    </div>
  </div>
  <div className="quiz-card">
      <div className="quiz-card__image">
      <img 
          src={image3}
          alt="Invictus Placeholder" 
          style={{width:"18.75rem",height:"18.75rem",borderRadius:"0.5rem",boxShadow:"0rem 0rem 1.25rem rgba(0,0,0,0.5)"}}/>
      </div>
      <div className="quiz-card__text">
        <h2 className="quiz-card__title">MITACS-WEBINAR</h2>
        <p className="quiz-card__description">
        BIOTS hosted a Mitacs Webinar on the Globalink Research Internship, funded by Canada, covering research experience, skill development, and global collaborations. Experts guided students on applying, boosting their academic paths and analytical skills.</p>
      </div>
    </div>
    <div className="quiz-card1">
    <div className="quiz-card__image">
    <img 
          src={image4}
          alt="Invictus Placeholder" 
          style={{width:"18.75rem",height:"18.75rem",borderRadius:"0.5rem",boxShadow:"0rem 0rem 1.25rem rgba(0,0,0,0.5)"}}/>
    </div>
    <div className="quiz-card__text">
      <h2 className="quiz-card__title">BIOMEME</h2>
      <p className="quiz-card__description">
      Meme enthusiasts across campus crafted biotech-themed humor, blending creativity with science. Participants showcased skills, submitting memes as JPEGs/PDFs via Google Forms. The event sparked excitement and a passion for new creative expression.</p>
    </div>
  </div>
    <div className="quiz-card">
      <div className="quiz-card__image">
      <img 
          src={image5}
          alt="Invictus Placeholder" 
          style={{width:"18.75rem",height:"18.75rem",borderRadius:"0.5rem",boxShadow:"0rem 0rem 1.25rem rgba(0,0,0,0.5)"}}/>
      </div>
      <div className="quiz-card__text">
        <h2 className="quiz-card__title">PHIR HERA PHERI</h2>
        <p className="quiz-card__description">
        Meme enthusiasts across campus crafted biotech-themed humor, blending creativity with science. Participants showcased skills, submitting memes as JPEGs/PDFs via Google Forms. The event sparked excitement and a passion for new creative expression.</p>
      </div>
    </div>
    <div className="quiz-card1">
    <div className="quiz-card__image">
    <img 
          src={image5}
          alt="Invictus Placeholder" 
          style={{width:"18.75rem",height:"18.75rem",borderRadius:"0.5rem",boxShadow:"0rem 0rem 1.25rem rgba(0,0,0,0.5)"}}/>
    </div>
    <div className="quiz-card__text">
      <h2 className="quiz-card__title">SPIN THE WHEEL</h2>
      <p className="quiz-card__description">
      Meme enthusiasts across campus crafted biotech-themed humor, blending creativity with science. Participants showcased skills, submitting memes as JPEGs/PDFs via Google Forms. The event sparked excitement and a passion for new creative expression.
      </p>
    </div>
  </div>
    </div> 
  );
};
export default QuizEventCard;
