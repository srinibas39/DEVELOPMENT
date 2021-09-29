import { useState } from "react";
import "./Videocard.css";

let Videocard = () => {
  let [playing, setPlaying] = useState(false);
  let [comment, setComment] = useState(false);
  return (
    <div className="videocard-container">
      <video
        src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
        className="video"
        autoPlay
        loop
        onClick={(e) => {
          if (playing) {
            e.currentTarget.pause();
            setPlaying(false);
          } else {
            e.currentTarget.play();
            setPlaying(true);
          }
        }}
      ></video>

      <p className="videocard-para">Fake user</p>
      <span>
        <span className="material-icons videocard-logo">audiotrack</span>
        <marquee className="videocard-music">fake song playing</marquee>
      </span>
      <span
        className="material-icons-outlined videocard-chat"
        onClick={(e) => {
            
          if (comment) {
            setComment(false);
          } else {
            setComment(true);
          }
        }}
      >
        chat
      </span>
      <span className="material-icons-outlined videocard-heart">
        favorite_border
      </span>

      {comment ? <div className="videocard-commentbox">

          <div className="videocard-commentbox-display-post">
              <img src="https://asia.olympus-imaging.com/content/000107506.jpg" />
              <div className="user-info">
                  <h5>User Name</h5>
                  <p>Hey this is my first comment</p>

              </div>
          </div>
          
          <div className="videocard-commentbox-display-post">
              <img src="https://asia.olympus-imaging.com/content/000107506.jpg" />
              <div className="user-info">
                  <h5>User Name 2</h5>
                  <p>Hey this is my second comment
                  Hey this is my second comment
                  Hey this is my second comment
                  Hey this is my second comment
                  Hey this is my second comment
                  </p>

              </div>
          </div>
          <div className="videocard-commentbox-comment-form">
              <input className="videocard-commentbox-comment"/>
              <button className="comment-submit">Post</button>
          </div>
      </div> : ""}
    </div>
  );
};

export default Videocard;
