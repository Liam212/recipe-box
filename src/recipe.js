import React, { useState } from 'react' 
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
const shortid = require('shortid');

function IngredientsModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      > 
      <div className="modal-theme">
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
      </div>
      </Modal>
    );
  }
  

const Recipe = ({title, calories, image, ingredients, source, url}) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Card className='card'>
          <Card.Img variant="top" src={image} />
          <Card.Body className="d-flex flex-column">
              <Card.Title>{title}</Card.Title>
              <Card.Text>Calories: {Math.round(calories)}</Card.Text>
              <Button className="mt-auto" variant="primary" onClick={() => setModalShow(true)}>
                  See ingredients
              </Button>

              <IngredientsModal
                  key={shortid.generate()}
                  show={modalShow}
                  ingredients={ingredients}
                  onHide={() => setModalShow(false)}
              />

          </Card.Body>
          <Card.Footer className="card-footer">
            <small className="text-muted">By <a href={url} rel="noopener noreferrer" target="_blank">{source}</a></small>
          </Card.Footer>
        </Card>
    )
}

export default Recipe;