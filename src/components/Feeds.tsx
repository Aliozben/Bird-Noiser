import React, {useEffect, useState} from "react";
import "../css/Feeds.css";
import {TweetBox} from "./TweetBox";
import {Post} from "./Post";
import db from "../firebase";
import FlipMove from "react-flip-move";

export const Feeds = () => {
  type Post = {
    id: string;
    displayName: string;
    username: string;
    verified: boolean;
    text: string;
    image: string;
    avatarLink: string;
  };
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot =>
      setPosts(snapshot.docs.map(doc => (doc.id, doc.data())) as [])
    );
    console.log(posts);
  }, []);
  return (
    <div className="feeds">
      <div className="feeds_header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map(post => (
          <Post
            key={posts.indexOf(post)}
            displayName={post.displayName}
            username={post.username}
            text={post.text}
            image={post.image}
            verified={post.verified}
            avatarLink={post.avatarLink}
          />
        ))}
      </FlipMove>
    </div>
  );
};
