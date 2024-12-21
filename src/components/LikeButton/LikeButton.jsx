import React, { useEffect, useState } from "react";

const LikeButton = ({productId, onLikeChange }) => {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
    if (onLikeChange) {
      onLikeChange(!liked);
      const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    if (liked) {
      delete storedLikes[productId];
    } else {
      storedLikes[productId] = true;
    }
    
    localStorage.setItem("likes", JSON.stringify(storedLikes));
    setLiked(!liked); 
    }
  };
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    if (storedLikes[productId]) {
      setLiked(true);
    }
  }, [productId]);

  return (
    <button
      onClick={handleClick}
      className={`like-btn ${liked ? "liked" : ""}`}
    >
      {liked ? <i className="text-red-700 fa fa-heart text-2xl "></i> : <i className=" text-2xl fa fa-heart"></i>}
    </button>
  );
};

export default LikeButton;