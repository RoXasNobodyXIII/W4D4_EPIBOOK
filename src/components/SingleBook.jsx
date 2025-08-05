import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function SingleBook({ book }) {
  const navigate = useNavigate();

  const handleViewDetails = (event) => {
    event.preventDefault();
    navigate(`/books/${book.asin}`);
  };

  return (
    <div className="single-book">
      <Card className="h-100">
        <Card.Img 
          variant="top" 
          src={book.img} 
          alt={book.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fs-6">{book.title}</Card.Title>
          <Card.Text className="text-muted small flex-grow-1">
            {book.description}
          </Card.Text>
          <Button variant="primary" size="sm" className="mt-auto" onClick={handleViewDetails}>
            View Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleBook;
