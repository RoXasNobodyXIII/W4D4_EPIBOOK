import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { HandleCommentProvider } from "@context/handleCommentContext";
import fantasyBooks from "../../books/fantasy.json";
import historyBooks from "../../books/history.json";
import horrorBooks from "../../books/horror.json";
import romanceBooks from "../../books/romance.json";
import scifiBooks from "../../books/scifi.json";

const allBooks = [
  ...fantasyBooks,
  ...historyBooks,
  ...horrorBooks,
  ...romanceBooks,
  ...scifiBooks,
];

function BookDetails() {
  const { asin } = useParams();
  const book = allBooks.find((b) => b.asin === asin);

  if (!book) {
    return <Container><h2>Book not found</h2></Container>;
  }

  return (
    <Container className="d-flex flex-column align-items-stretch">
      <Row>
        <Col lg={10} className="mb-4">
          <Card className="shadow-sm">
            <Card.Img 
              className="card-img-top"
              variant="top" 
              src={book.img} 
              alt={book.title} 
            style={{
             height: '420px',              
             width: '100%',                 
             maxWidth: '320px',             
             objectFit: 'cover',            
             marginBottom: '1.5rem',      
             borderRadius: '16px',         
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', 
            transition: 'transform 0.3s ease', 
}}

            />
            <Card.Body style={{ padding: '2rem 2.5rem' }}>
  <Card.Title
    style={{
      marginBottom: '1.2rem',
      fontWeight: '800',
      fontSize: '2.4rem',
      lineHeight: '1.3',
      color: '#1a1a1a',
      letterSpacing: '-0.5px',
    }}
              >
                {book.title} 
              </Card.Title>
              <Card.Text 
                style={{ 
                  marginTop: '0', 
                  marginBottom: '1.5rem', 
                  fontSize: '1.1rem', 
                  color: '#555',
                  minHeight: '120px',
                }}
              >
                {book.description}
              </Card.Text>
              <Card.Text style={{ fontWeight: '600', color: '#444' }}>
                <strong>Category:</strong> {book.category}
              </Card.Text>
              <Card.Text style={{ fontWeight: '600', color: '#444' }}>
                <strong>Price:</strong> ${book.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
}

export default BookDetails;
