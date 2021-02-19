import { useState } from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const MovieCard = ({ film, initialList }) => {
  const [list, setList] = useState(initialList);

  const handleRemove = (id) => {
    const newList = list.filter((film) => film.id !== id);
    setList(newList);
    console.log(list);
  };

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
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
              <Card.Text id="cardTitle">
                <FontAwesomeIcon icon={faThumbsUp} />
                &nbsp;
                <span>{kFormatter(film.likes)}&nbsp;</span>&nbsp;
                <FontAwesomeIcon icon={faThumbsDown} />
                &nbsp;
                <span>{kFormatter(film.dislikes)}&nbsp;</span>
              </Card.Text>
              <div style={{ width: "50%" }}>
                <ProgressBar
                  striped
                  animated
                  variant="dark"
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
