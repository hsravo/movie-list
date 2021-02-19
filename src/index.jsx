import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import {
  Container,
  Row,
  Button,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import NavHome from "./components/NavHome";
import MovieCard from "./components/MovieCard";
import movies from "./data/movies";

const App = () => {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [perPage, setPerPage] = useState(4);

  //   // useEffect(() => {

  //   // }, []);

  //   const indexOfLastPost = currentPage * perPage;
  //   const indexOfFirstPost = indexOfLastPost - perPage;
  //   const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

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
            <Form.Label>Catégorie</Form.Label>
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
          {filteredCategories().map((film, i) => (
            <MovieCard film={film} key={i} />
          ))}
        </Row>
      </Container>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
