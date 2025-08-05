import CommentArea from "../components/CommentArea";
import { Col, Container, Row } from "react-bootstrap";
import BookDetailsComponent from "../components/BookDetails";
import { HandleCommentProvider } from "@context/handleCommentContext";

function BookDetails() {
  return (
    <Container className="d-flex flex-column align-items-stretch">
      <Row>
        <Col lg={4}>
          <BookDetailsComponent />
        </Col>
        <HandleCommentProvider>
          <Col lg={8} className="vh-100">
            <CommentArea />
          </Col>
        </HandleCommentProvider>
      </Row>
    </Container>
  );
}

export default BookDetails;
