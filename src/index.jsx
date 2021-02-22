import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import {Container,Row,Form,Button} from "react-bootstrap";
import NavHome from "./components/NavHome";
import MovieCard from "./components/MovieCard";
import movies from "./data/movies";

const App = () => {

  const [currentList, setCurrentList] = useState(movies);
  const [categoryOptions, setCategoryOptions] = useState(new Map(movies.map((movie) => [movie.category])));
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredCategories = () => {
    if (!selectedCategory) {
      return currentList;
    }
    return currentList.filter(
      (movie) => String(movie.category) === selectedCategory
    );
  };

  useEffect(() => {
    console.log(`catégorie : ${selectedCategory}`)
    setCategoryOptions(new Map(currentList.map((movie) => [movie.category]))) // on refait la liste des catégories disponibles
  }, [currentList]); // à chaque changement de la liste des films (lire vers le haut)

  const resetAll = () => {
    setCurrentList(movies)
    setSelectedCategory("")
  }

  return (
    <>
    <NavHome/>
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
        <div style={{display:'flex',justifyContent:'center'}}>
        <Button onClick={resetAll} id="reset-button">
          RÉINITIALISER
        </Button>
        </div>
        <Row>
          {filteredCategories().map((film) => (
            <MovieCard film={film} currentList={currentList} setCurrentList={setCurrentList} setCategoryOptions={setCategoryOptions} />
          ))}
        </Row>
      </Container>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
