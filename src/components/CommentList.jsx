import React from "react";
import { useHandleCommentContext } from "@context/handleCommentContext";
import SingleComment from "./SingleComment";

const CommentList = ({ comments, onCommentDeleted, onCommentUpdated }) => {
  const { isAccordionOpen } = useHandleCommentContext();

  return (
    <div className={`comment-container ${isAccordionOpen ? 'reduced-height' : ''}`}>
      <ul className="list-group mb-3 overflow-auto">
        {comments.map((comment) => (
          <li 
            key={comment._id} 
            className="list-group-item" 
            data-testid="singleComment"
          >
            <SingleComment
              comment={comment}
              onCommentDeleted={onCommentDeleted}
              onCommentUpdated={onCommentUpdated}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;