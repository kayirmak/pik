import './style.css';

function Rating({rate = 684}) {
  return (
    <div className="rating">
      <div className="rating-up">
        <svg>
          <path fill="#8f939d" d="M17.85 9.65c.1-.1.15-.25.15-.35 0-.15-.05-.25-.15-.35L9.8.4C9.65.2 9.35.05 9 .05c-.35 0-.65.15-.8.35L.15 8.95a.6.6 0 0 0 0 .7c.15.2.5.35.8.35h16.1c.35 0 .65-.15.8-.35z" fillRule="evenodd"></path>
        </svg>
      </div>

      <div className="rating-num">
        <span>{rate}</span>
      </div>

      <div className="rating-down">
        <svg>
          <path fill="#8f939d" d="M17.85.35c.1.1.15.25.15.35 0 .15-.05.25-.15.35L9.8 9.6c-.15.2-.45.35-.8.35-.35 0-.65-.15-.8-.35L.15 1.05a.6.6 0 0 1 0-.7C.3.15.65 0 .95 0h16.1c.35 0 .65.15.8.35z" fillRule="evenodd"></path>
        </svg>
      </div>

      <div className="hidden">
        
      </div>
    </div>
  )
}

export default Rating;
