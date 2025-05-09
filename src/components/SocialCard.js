'use client'; 

import WantButton from "./WantButton";
import BeenButton from "./BeenButton";

export default function SocialCard({ postID }) {
    let post = JSON.parse(localStorage.getItem("post-" + postID.toString()));
    return (
        <div className="card">
        <h3>{post.username}</h3>
        <p>{post.text}</p>
        
        <WantButton postID = {postID} />
        <BeenButton postID = {postID} />
        </div>
    );
}
