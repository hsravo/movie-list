import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import GaugeChart from "react-gauge-chart";
import "./style.scss";


const MovieCard = ({ film, initialList }) => {
    const [list, setList] = useState(initialList);

    const handleRemove = (id) => {
        const newList = list.filter((film) => film.id !== id);
        setList(newList);
        console.log(list)
      }
    
  return (
    <Col sm={6}>
      <Card id="cardShow">
        <Card.Body id="cardBody">
        <li key={film.id}>
          <Card.Title id="cardTitle">{film.title}</Card.Title>
          <Card.Text id="cardTitle">{film.category}</Card.Text>
          <Card.Text id="cardTitle">
            <em>Likes : {film.likes}</em>
          </Card.Text>
          <Card.Text id="cardTitle">
            <em>Dislikes : {film.dislikes}</em>
          </Card.Text>
          <Button onClick={() => handleRemove(film.id)}>
            Supprimer le film
          </Button>
          <GaugeChart
            id="gauge-chart3"
            nrOfLevels={40}
            colors={["#EA4228", "#5BE12C"]}
            percent={(film.likes / (film.likes + film.dislikes)).toFixed(3)}
            arcWidth={0.05}
          />
        </li>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
