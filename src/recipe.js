import React, { useState } from 'react' 
import style from './recipe.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Ingredients
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ol>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

const Recipe = ({title, calories, image, ingredients}) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Card className={style.card}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{Math.round(calories)}</Card.Text>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                See ingredients
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                ingredients={ingredients}
                onHide={() => setModalShow(false)}
            />

        </Card.Body>
        </Card>
    )
}

export default Recipe;