import { useState } from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
// import movies from "../../data/movies";
import "./style.scss";

const MovieCard = ({ film, currentList, setCurrentList }) => {

  const handleRemove = (id) => {
    const newList = currentList.filter((film) => film.id !== id);
    setCurrentList(newList); // on change la liste du state à chaque suppression
  };

  const kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  const likeIt = () => {
    console.log("I like it")
  }

  const dislikeIt = () => {
    console.log("I dislike it")
  }

  return (
    <Row id="cardList">
      <Col>
        <Card id="cardShow">
          <Card.Body id="cardBody">
            <li key={film.id}>
              <Card.Title id="cardTitle">
                <b>{film.title}</b>
              </Card.Title>
              <Card.Text id="cardCategory">{film.category}</Card.Text>
              <Card.Text id="cardSocial">
                <FontAwesomeIcon icon={faThumbsUp} id="cardLike" type="checkbox" onClick={likeIt}/>
                &nbsp;
                <span>{kFormatter(film.likes)}&nbsp;</span>&nbsp;
                <FontAwesomeIcon icon={faThumbsDown} id="cardDislike" onClick={dislikeIt}/>
                &nbsp;
                <span>{kFormatter(film.dislikes)}&nbsp;</span>
              </Card.Text>
              <div style={{ width: "50%" }}>
                <ProgressBar
                  striped
                  animated
                  variant="info"
                  style={{ height: "10px" }}
                  now={(film.likes / (film.likes + film.dislikes)) * 100}
                />
              </div>
              <Card.Body>
                <Button id="cardButton" onClick={() => handleRemove(film.id)}>
                  Supprimer le film
                </Button>
              </Card.Body>
            </li>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MovieCard;
