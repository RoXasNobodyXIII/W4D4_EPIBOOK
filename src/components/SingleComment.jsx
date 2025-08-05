import React from "react";

const SingleComment = ({ comment, onCommentDeleted, onCommentUpdated }) => {
  return (
    <div className="single-comment">
      <p><strong>{comment.author}</strong> says:</p>
      <p>{comment.comment}</p>
      <p>Rating: {comment.rate} / 5</p>
      {/* Add buttons or handlers for delete/update if needed */}
    </div>
  );
};

export default SingleComment;
