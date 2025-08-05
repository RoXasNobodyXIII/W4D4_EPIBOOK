import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { useSelectedContext } from "@context/selectedContext";
import { useToken } from "@context/tokenContext";
import { useParams } from "react-router-dom";
import { useHandleCommentContext } from "@context/handleCommentContext";

function CommentArea() {
  const { asin } = useParams();
  const { token } = useToken();
  const { title } = useSelectedContext();
  const { setEditingComment, isAccordionOpen, setIsAccordionOpen } = useHandleCommentContext();

  const [comments, setComments] = useState([]);
  const [average, setAverage] = useState(0);
  const [loading, setLoading] = useState(false);

  const API_URL = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments`;

  const fetchComments = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setComments(data);
        calculateAverageRating(data);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
      setComments([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (asin) {
      fetchComments();
    } else {
      setComments([]);
    }
  }, [asin]);

  const calculateAverageRating = (commentsData) => {
    if (commentsData.length === 0) return;
    const total = commentsData.reduce((sum, comment) => sum + comment.rate, 0);
    setAverage(total / commentsData.length);
  };

  const handleCommentChange = () => {
    fetchComments();
  };

  return (
    <div className="commentArea">
      <h2>{title}</h2>

      {loading ? (
        <p>Caricamento commenti...</p>
      ) : (
        <>
          {comments.length > 0 ? (
            <>
              <CommentList
                className="commentList"
                comments={comments}
                onCommentDeleted={handleCommentChange}
                onCommentUpdated={handleCommentChange}
              />
              <AddComment onCommentAdded={handleCommentChange} />
            </>
          ) : (
            <>
              <AddComment onCommentAdded={handleCommentChange} />
              <h2>Al momento non ci sono commenti. </h2>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default CommentArea;
