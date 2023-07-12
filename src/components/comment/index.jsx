import './style.css';

function Comment({userName, userImg, rating, createdTime, message}) {
  return (
    <div className="comment">
      <div className="comment-head">
        <div className="comment-head-ratings">
          <svg>
            <path fill="#8f939d" d="M17.85 9.65c.1-.1.15-.25.15-.35 0-.15-.05-.25-.15-.35L9.8.4C9.65.2 9.35.05 9 .05c-.35 0-.65.15-.8.35L.15 8.95a.6.6 0 0 0 0 .7c.15.2.5.35.8.35h16.1c.35 0 .65-.15.8-.35z" fillRule="evenodd"></path>
          </svg>
          <div className="rating-num">
            <span>{rating > 0 ? '+' : ""}{rating}</span>
          </div>
          <svg>
            <path fill="#8f939d" d="M17.85.35c.1.1.15.25.15.35 0 .15-.05.25-.15.35L9.8 9.6c-.15.2-.45.35-.8.35-.35 0-.65-.15-.8-.35L.15 1.05a.6.6 0 0 1 0-.7C.3.15.65 0 .95 0h16.1c.35 0 .65.15.8.35z" fillRule="evenodd"></path>
          </svg>
        </div>
        <a href="#" className="comment-head-user">
          <img src={userImg != "" ? userImg : "https://cs.pikabu.ru/apps/ub/5.1.0/desktop/sprite_96dpi.png"} alt="" />
          <span>{userName}</span>
        </a>
        <span className="create-time">{createdTime}</span>
      </div>
      <div className="comment-main">
        <h3 className="comment-main-text">{message}</h3>
        <span className="comment-main-answer">ответить</span>
      </div>
    </div>
  )
}

export default Comment;
