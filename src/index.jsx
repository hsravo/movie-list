import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import {Container,Row,Form} from "react-bootstrap";
import NavHome from "./components/NavHome";
import MovieCard from "./components/MovieCard";
import movies from "./data/movies";

const App = () => {

  const initialList = movies;

  const [selectedCategory, setSelectedCategory] = useState("");

  const categoryOptions = new Map(movies.map((movie) => [movie.category]));

  const filteredCategories = () => {
    if (!selectedCategory) {
      return movies;
    }
    return movies.filter(
      (movie) => String(movie.category) === selectedCategory
    );
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
      </Container>
      <Container>
        <Row>
          {filteredCategories().map((film) => (
            <MovieCard film={film} initialList={initialList}/>
          ))}
        </Row>
      </Container>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
