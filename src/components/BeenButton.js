"use client"; 

import React, { useState, useEffect } from 'react';

export default function BeenButton({ postID }) {
    // Initialize the state
    let post = JSON.parse(localStorage.getItem("post-" + postID.toString()));
    const [likesBeen, setLikesBeen] = useState(post.likesBeen || 0);

    // This useEffect will run only on the client side to fetch stored likes from localStorage
    useEffect(() => {
        post = JSON.parse(localStorage.getItem("post-" + postID.toString()));
        setLikesBeen(post.likesBeen);
    });

    // Handle the reaction for "I've already been"
    const handleBeen = () => {
        post.hasBeen = !post.hasBeen;
        if (post.hasBeen) {
            post.likesWantToGo -= post.hasWant;
            post.hasWant = false;
        }
        setLikesBeen((prevLikes) => {
        const newLikes = prevLikes + (post.hasBeen ? 1 : -1);

        // Save the updated likes to localStorage
        post.likesBeen = newLikes;
        localStorage.setItem("post-" + post.id.toString(), JSON.stringify(post));

        return newLikes;
    });
};

return (
    <div className="flex align-left items-center my-2">
        <div className="like-button" onClick={handleBeen}>✓ I've been here </div>
        <div className="px-2">{likesBeen}</div>
    </div>
);
}