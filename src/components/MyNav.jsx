import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { useSearchValue } from "@context/searchContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MyNav = () => {
  const { selectedCategory: category, setSelectedCategory: setCategory, currentSearchValue, setCurrentSearchValue, setActivePage: setActive } = useSearchValue();
  const navigate = useNavigate();


  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchInput = (event) => {
    navigate('/');
    setCurrentSearchValue(event.target.value);
    setActive(1);
  };

  const resetSearch = () => {
    setCurrentSearchValue("");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          EpiBooks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">Chi siamo</Nav.Link>
            <Nav.Link href="#browse">Catalogo</Nav.Link>
          </Nav>
          <div className="d-flex gap-2 flex-grow-1" style={{ maxWidth: "500px" }}>
            <Form.Select
              value={category}
              onChange={handleCategoryChange}
              className="w-auto"
            >
              <option value="" disabled hidden>Seleziona genere</option>
              <option value="fantasy">Fantasy</option>
              <option value="history">Storia</option>
              <option value="horror">Horror</option>
              <option value="romance">Romantico</option>
              <option value="scifi">Fantascienza</option>
            </Form.Select>
            
            <div className="position-relative flex-grow-1">
              <Form.Control
                type="search"
                placeholder="Cerca un titolo..."
                value={currentSearchValue}
                onChange={handleSearchInput}
                className="pe-4"
              />
              {currentSearchValue && (
                <button
                  onClick={resetSearch}
                  className="btn btn-link position-absolute end-0 top-50 translate-middle-y"
                  aria-label="Cancella ricerca"
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
