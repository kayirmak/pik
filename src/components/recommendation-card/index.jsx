import { Link } from 'react-router-dom';
import './style.css';

function RecommendationCard({userName, userImg, editorName, editorImg, imgMain, title, desc}) {
  return (
    <Link to="/pik/post">
      <div className="recommendation-card">
        <div className="recommendation-card-titles">
          <span href="#" className="card-titles-user">
            <img src={userImg} alt="" />
            <span>{userName}</span>
          </span>
          <span href="#" className="card-titles-editor">
            <img src={editorImg} alt="" />
            <span>{editorName}</span>
          </span>
        </div>
        <div className="recommendation-card-body">
          <img className="card-body-main-img" src={imgMain} alt="" />
          <div className="card-body-elements">
            <span className="card-body-elements-rating">+264</span>
            <span className="card-body-elements-comment">
              <svg className="comment-icon">
                <path d="M14 12.795H6.4L3.2 16v-3.205H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.795a2 2 0 0 1-2 2zm-1.205-8.31a.749.749 0 0 0-.75-.75h-8.09a.749.749 0 0 0-.75.75v.09c0 .415.335.75.75.75h8.09c.415 0 .75-.335.75-.75v-.09zm0 3.735a.749.749 0 0 0-.75-.75h-8.09a.749.749 0 0 0-.75.75v.09c0 .415.335.75.75.75h8.09c.415 0 .75-.335.75-.75v-.09z" fill="#8f939d" fillRule="evenodd"></path>
              </svg>
              79
            </span>
          </div>
          <h2 className="card-body-title">{title}</h2>
          <p className="card-body-desc">{desc}</p>
        </div>
        <span href="#" className="card-body-read-link">Читать полностью</span>

      </div>
    </Link>
  )
}

export default RecommendationCard;
