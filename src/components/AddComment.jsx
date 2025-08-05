import React, { useEffect, useState } from "react";
import { Button, Form, Accordion } from "react-bootstrap";
import { useToken } from "@context/tokenContext";
import { useParams } from "react-router-dom";
import { useHandleCommentContext } from "@context/handleCommentContext";

function AddComment({ onCommentAdded }) {
  const postEP = "https://striveschool-api.herokuapp.com/api/comments/";
  const putDeleteEP = `https://striveschool-api.herokuapp.com/api/comments/`;

  const { asin } = useParams();
  const { isAccordionOpen, setIsAccordionOpen, editingComment, setEditingComment } =
    useHandleCommentContext();

  const [formData, setFormData] = useState({
    elementId: asin,
    rate: "",
    comment: "",
  });

  useEffect(() => {
    if (editingComment) {
      setFormData({
        rate: editingComment.rate,
        comment: editingComment.comment,
        elementId: asin,
        _id: editingComment._id, //per differenziare lampost o la put
      });
    } else {
      setFormData({
        rate: "",
        comment: "",
        elementId: asin,
      });
    }
  }, [editingComment, asin]);

  const [validated, setValidated] = useState(false);

  const { token } = useToken();

  const postOrUpdateComment = async () => {
    const isEditing = !!formData._id; 
    const url = isEditing ? `${putDeleteEP}${formData._id}` : postEP;
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        if (onCommentAdded) onCommentAdded();
        setTimeout(clearFields, 1000);
      } else {
        console.error("Errore nell’aggiunta del commento");
      }
    } catch (error) {
      console.error("Errore nella fetch :", error);
    }
  };

  function clearFields() {
    setFormData((prev) => ({
      ...prev,
      rate: "",
      comment: "",
    }));
    setValidated(false);
    setIsAccordionOpen(false);
    setEditingComment(null); 
  }

  function submitData(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  
    const form = evt.currentTarget;
  
    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }
  
    setValidated(true);
    postOrUpdateComment();
  }

  function handleChanges(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }

  return (
    <>
      <div>
        <Form noValidate validated={validated} onSubmit={submitData}>
          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Select
              name="rate"
              value={formData.rate}
              onChange={handleChanges}
              required
            >
              <option value="" disabled hidden>
                Select a rating
              </option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              name="comment"
              value={formData.comment}
              placeholder="Type your comment here"
              onChange={handleChanges}
              required
            />
          </Form.Group>

          <Button type="submit" className="mt-2">
            {editingComment ? "Update" : "Send"}
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddComment;
 