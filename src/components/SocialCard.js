'use client'; 

import WantButton from "./WantButton";
import BeenButton from "./BeenButton";

export default function SocialCard({ post }) {
    return (
        <div className="card">
        <h3>{post.username}</h3>
        <p>{post.text}</p>
        
        <WantButton post = {post} />
        <BeenButton post = {post} />
        </div>
    );
}
