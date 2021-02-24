import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import { Container, Row, Form, Button } from "react-bootstrap";
import NavHome from "./components/NavHome";
import MovieCard from "./components/MovieCard";
import movies from "./data/movies";

const App = () => {
  const [currentList, setCurrentList] = useState(movies);
  const [categoryOptions, setCategoryOptions] = useState(
    new Map(movies.map((movie) => [movie.category]))
  );
  const [selectedCategory, setSelectedCategory] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(currentList.length);
  const [idFirstElement, setIdFirstElement] = useState(0);
  const rankLastElement = currentPage * perPage;

  const filteredCategories = () => {
    if (!selectedCategory) {
      return currentList;
    }
    return currentList.filter(
      (movie) => String(movie.category) === selectedCategory
    );
  };

  useEffect(() => {
    if (currentPage !== 1) {
      setIdFirstElement(perPage * (currentPage - 1));
    }
  }, [currentPage]);

  useEffect(() => {
    console.log(`catégorie : ${selectedCategory}`);
    setCategoryOptions(new Map(currentList.map((movie) => [movie.category]))); // on refait la liste des catégories disponibles
  }, [currentList]); // à chaque changement de la liste des films (lire vers le haut)

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCategories().length / perPage); i++) {
    pageNumbers.push(i);
  }

  const changePagination = (event) => {
    const { value } = event.target;
    setPerPage(value);
  };

  const changePage = (e) => {
    const { value } = e.target;
    setCurrentPage(value);
  };

  const resetAll = () => {
    setCurrentList(movies);
    setCurrentPage(1);
    setIdFirstElement(0);
    setSelectedCategory("");
    setPerPage(currentList.length);
  };

  return (
    <>
      <NavHome />
      <Container>
        <Form id="categoryForm">
          <Form.Group controlId="selector">
            <Form.Control
              as="select"
              onChange={({ target }) => setSelectedCategory(target.value)}
              custom
            >
              <option value="">Choisissez une catégorie</option>
              {[...categoryOptions].map((category) => (
                <option>{category}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
        <Form id="perPageForm">
          <Form.Group controlId="selector">
            <Form.Control as="select" onChange={changePagination} custom>
              <option value={currentList.length}>Élements par page</option>
              <option value={4}>4 éléments par page</option>
              <option value={8}>8 éléments par page</option>
              <option value={12}>12 éléments par page</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form id="pageForm">
          <Form.Group controlId="selector">
            <Form.Control as="select" onChange={changePage} custom>
            {pageNumbers.map((number) => (
              <option value={number}>Page {number}</option>
            ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
      <Container>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={resetAll} id="reset-button">
            RÉINITIALISER
          </Button>
        </div>
        <Row>
          {filteredCategories()
            .slice(idFirstElement, rankLastElement)
            .map((film) => (
              <MovieCard
                film={film}
                currentList={currentList}
                setCurrentList={setCurrentList}
                setCategoryOptions={setCategoryOptions}
              />
            ))}
        </Row>
      </Container>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
