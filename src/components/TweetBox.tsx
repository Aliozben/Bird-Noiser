import React, {useState} from "react";
import "../css/TweetBox.css";
import {Avatar, Button} from "@material-ui/core";
import db from "../firebase";
export const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const postTweet = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Aliiiiii!!",
      username: "a1sds1ali",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatarLink: tweetImage,
    });
    setTweetImage("");
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://external-content.duckduckgo.com/iu/?u=http://worldofdtcmarketing.com/wp-content/uploads/2014/01/doctorbird-250x250.png&f=1&nofb=1" />
          <input
            placeholder="What's up?"
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
          />
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          onChange={e => setTweetImage(e.target.value)}
          value={tweetImage}
          type="text"
        />
        <Button
          onClick={postTweet}
          type="submit"
          className="tweetBox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};
