import { useContext, useEffect, useState } from "react";
import { firestore } from "./firebase";
import "./Videocard.css";
import { authContext } from "./AuthProvider";

let Videocard = (props) => {
  let user = useContext(authContext);
  let [playing, setPlaying] = useState(false);
  let [comment, setComment] = useState(false);
  let [commentTyped, setCommentTyped] = useState("");
  let [commentPost, setCommentPost] = useState([]);
  let currLikedUser = props.data.likes.includes(user.uid);

  //! want to display the comments on my screen(instantaneously)

  useEffect(() => {
    let f = async () => {
      let arr = [];
      let commentsArr = props.data.comments;
      for (let i = 0; i < commentsArr.length; i++) {
        let commentDoc = await firestore
          .collection("comments")
          .doc(commentsArr[i])
          .get();
        arr.push(commentDoc.data());
        console.log(arr);
      }
      setCommentPost(arr);
    };
    f();
  }, [props]);

  return (
    <div className="videocard-container">
      <video
        src={props.data.url}
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

      <p className="videocard-para">{props.data.name}</p>
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
      <span
        onClick={async (e) => {
          let likesArr = props.data.likes;
          if (currLikedUser) {
            likesArr = likesArr.filter((el) => {
              return el != user.uid;
            });
          } else {
            likesArr.push(user.uid);
          }
          firestore
            .collection("posts")
            .doc(props.data.id)
            .update({ likes: likesArr });
        }}
        className="material-icons-outlined videocard-heart"
      >
        {currLikedUser ? "favorite" : "favorite_border"}
      </span>

      {comment ? (
        <div className="videocard-commentbox">
          {commentPost.map((el,idx) => {
            return (
              <div
              key={idx}
               className="videocard-commentbox-display-post">
                <img src={el.photoURL} />
                <div className="user-info">
                  <h5>{el.name}</h5>
                  <p>{el.comment}</p>
                </div>
              </div>
            );
          })}

          <div className="videocard-commentbox-comment-form">
            <input
              onClick={(e)=>{
                 setCommentTyped("");
              }}
              value={commentTyped}
              onChange={(e) => {
                setCommentTyped(e.currentTarget.value);
              }}
              className="videocard-commentbox-comment"
            />
            <button
              onClick={async (e) => {
                let docRef = await firestore.collection("comments").add({
                  name: user.displayName,
                  photoURL: user.photoURL,
                  comment: commentTyped,
                });

                let doc = await docRef.get();
                let commentId = doc.id;

                let docRefPost = await firestore
                  .collection("posts")
                  .doc(props.data.id);
                let docPost = await docRefPost.get();
                let commentArr = docPost.data().comments;
                commentArr.push(commentId);

                firestore.collection("posts").doc(props.data.id).update({
                  comments: commentArr,
                });
              }}
              className="comment-submit"
            >
              Post
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Videocard;
