import { useState } from "preact/hooks";

interface PalaroidCardProps {
  URL: string;
  text: string;
  date: string;
}

function PalaroidCard({ URL, text, date }: PalaroidCardProps) {
  const [isFlipped, setIsFlipped] = useState(true);

  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="card__front">
        <div className="caption">
          <p className="caption-text">{text}</p>
          <p className="caption-date">{date}</p>
        </div>
      </div>
      <div className="card__back">
        <img src={URL} alt={text} loading="lazy" /> 
        <div className="caption">
          <p className="caption-date">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default PalaroidCard;