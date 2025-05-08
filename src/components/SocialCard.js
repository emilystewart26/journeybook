'use client'; 

import { useState, useEffect } from 'react';
import WantButton from "./WantButton";
import BeenButton from "./BeenButton";

export default function SocialCard({ post }) {
    // Initialize the state for likes for both buttons
    const [likesBeen, setLikesBeen] = useState(post.likesBeen || 0);
    
    // This useEffect will run only on the client side to fetch stored likes from localStorage
    useEffect(() => {
        // Fetch the stored likes from localStorage
        const storedLikesBeen = localStorage.getItem(post.id + '_likes_been');
        
        // If stored likes exist, update the state
        if (storedLikesBeen) {
            setLikesBeen(JSON.parse(storedLikesBeen));
        }
    }, [post.id]);
    
    // Handle the reaction for "I've been"
    const handleBeen = () => {
        setLikesBeen((prevLikes) => {
            const newLikes = prevLikes + 1;
            
            // Save the updated likes to localStorage
            localStorage.setItem(post.id + '_likes_been', JSON.stringify(newLikes));
            
            return newLikes;
        });
    };
    
    return (
        <div className="card">
        <h3>{post.username}</h3>
        <p>{post.text}</p>
        
        <WantButton post = {post} />
        <BeenButton post = {post} />
        </div>
    );
}
