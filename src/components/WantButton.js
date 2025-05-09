"use client"; 

import React, { useState, useEffect } from 'react';

export default function WantButton({ postID }) {
  // Initialize the state
  let post = JSON.parse(localStorage.getItem("post-" + postID.toString()));
  const [likesWantToGo, setLikesWantToGo] = useState(post.likesWantToGo || 0);

  // This useEffect will run only on the client side to fetch stored likes from localStorage
  useEffect(() => {
    post = JSON.parse(localStorage.getItem("post-" + postID.toString()));
    setLikesWantToGo(post.likesWantToGo);
  }, [post.id]);

  // Handle the reaction for "I want to go"
  const handleWantToGo = () => {
    post.hasWant = !post.hasWant;
    if (post.hasWant) {
        post.likesBeen -= post.hasBeen;
        post.hasBeen = false;
    }
    setLikesWantToGo((prevLikes) => {
      const newLikes = prevLikes + (post.hasWant ? 1 : -1);

      // Save the updated likes to localStorage
      post.likesWantToGo = newLikes;
      localStorage.setItem("post-" + post.id.toString(), JSON.stringify(post));

      return newLikes;
    });
  };

  return (
    <div className="flex align-left items-center my-2">
      <div className="like-button" onClick={handleWantToGo}>♥ I want to go </div>
      <div className="px-2">{likesWantToGo}</div>
    </div>
  );
}