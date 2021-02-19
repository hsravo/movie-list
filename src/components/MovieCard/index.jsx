import {Card, Button} from "react-bootstrap";
import {Row, Col} from "react-bootstrap";
import "./style.scss";

const MovieCard = ({film, i}) => {
    return (
    <Col sm={6}>
        <Card id="cardShow">
        <Card.Body id="cardBody">
            <Card.Title id="cardTitle">{film.title}</Card.Title>
            <Card.Text id="cardTitle">{film.category}</Card.Text>
            <Card.Text id="cardTitle"><em>Likes : {film.likes}</em></Card.Text>
            <Card.Text id="cardTitle"><em>Dislikes : {film.dislikes}</em></Card.Text>
        </Card.Body>
    </Card>
    </Col>

    )
}

export default MovieCard;