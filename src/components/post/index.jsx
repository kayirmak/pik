import { Link } from 'react-router-dom';
import Rating from '../rating';

import './style.css';

function Post({userName, userImg, createdTime, title, subtitle, imgMain, comments, views, rating}) {
  return (
    <div className="post-wrap">
      <Link to="post">
        <div className="post post-res">
          <Rating rate={rating} />
          <div className="post-head">
            <span className="post-head-user">
              <img src={userImg} alt="" />
              <span>{userName}</span>
            </span>
            <span className="create-time">{createdTime}</span>
            <span className="three-dots">
              <svg>
                <circle fill="#8f939d" cx="2" cy="8.5" r="1.5"></circle>
                <circle fill="#8f939d" cx="8" cy="8.5" r="1.5"></circle>
                <circle fill="#8f939d" cx="14" cy="8.5" r="1.5"></circle>
              </svg>
            </span>
          </div>
          <h2 className="post-title">{title}</h2>
          <p className="post-subtitle">{subtitle}</p>
          <div className="post-main-img">
            <div className="advert">
            <div className="coeff">
              <button className="coeff-btn">2.00</button>
              <button className="coeff-btn">1.80</button>
              {/* <div style={{color: "#8f939d"}}>1 <span style={{color: "#b8860b", fontWeight: 600}}>2.00</span></div>
              <div style={{color: "#8f939d"}}>2 <span style={{color: "#b8860b", fontWeight: 600}}>1.80</span></div> */}
            </div>
            <div className="billet" style={{marginTop: "10px"}}>Плашка куда можем<br />вставить текст</div>
          </div>
            <img src={imgMain} alt="" />
          </div>
          <div className="post-elements">
            <div className="post-elements-comment">
              <svg className="comment-icon">
                <path d="M14 12.795H6.4L3.2 16v-3.205H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.795a2 2 0 0 1-2 2zm-1.205-8.31a.749.749 0 0 0-.75-.75h-8.09a.749.749 0 0 0-.75.75v.09c0 .415.335.75.75.75h8.09c.415 0 .75-.335.75-.75v-.09zm0 3.735a.749.749 0 0 0-.75-.75h-8.09a.749.749 0 0 0-.75.75v.09c0 .415.335.75.75.75h8.09c.415 0 .75-.335.75-.75v-.09z" fill="#8f939d" fillRule="evenodd"></path>
              </svg>
              {comments}
            </div>
            <div className="post-elements-view">
              <svg>
                <path fill="#8f939d" fillRule="evenodd" clipRule="evenodd" d="M8.491 6c0 1.463-1.117 2.654-2.491 2.654-1.371 0-2.486-1.19-2.486-2.654 0-1.466 1.115-2.658 2.486-2.658 1.374 0 2.491 1.192 2.491 2.658Zm3.182-.817C10.597 4.09 8.428 2.25 6 2.25c-2.432 0-4.597 1.838-5.672 2.934C.116 5.4-.002 5.694 0 6c0 .31.116.6.328.816C1.405 7.91 3.573 9.75 6 9.75c2.433 0 4.598-1.839 5.673-2.934.211-.216.327-.505.327-.817 0-.31-.116-.6-.327-.815"></path>
                <path fill="#8f939d" fillRule="evenodd" clipRule="evenodd" d="M7.5 6.002A1.501 1.501 0 1 1 5.998 4.5c.83 0 1.502.673 1.502 1.502Z"></path>
              </svg>
              {views}К
            </div>
            <div className="post-elements-view">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill="#8f939d" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
              50.000€ bank
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Post;
