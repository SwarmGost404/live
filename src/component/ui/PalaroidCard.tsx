import { useState } from "preact/hooks";

interface PalaroidCardProps {
  URL: string;
  text: string;
  date: string;
}

function PalaroidCard({ URL, text, date }: PalaroidCardProps) {

  const [isFlipped, setIsFlipped] = useState(true);

  const heldleFliped = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={heldleFliped}
    >
      <div className="card__front">
        <div className="caption">
          <p className="caption-text">{text}</p>
          <p className="caption-date">{date}</p>
        </div>
      </div>
      <div className="card__back">
        <img src={URL} alt={text} /> 
        <div className="caption">
          <p className="caption-date">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default PalaroidCard;
