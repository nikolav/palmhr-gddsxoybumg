import { useState, useRef } from "react";
import { Button, Modal, Form } from "react-bootstrap";
const ButtonFloatingAddCity = ({ addPlace }) => {
  const refControl = useRef();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submit_ = (evt) => {
    evt.preventDefault();
    addPlace(refControl.current.value);
  };

  return (
    <>
      <div className="position-fixed bottom-0 end-0 m-4">
        <Button
          onClick={handleShow}
          className="fs-5 p-3 rounded-circle shadow"
          variant="primary"
        >
          ➕
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={submit_}>
          <Modal.Header className="bg-light" closeButton>
            <Modal.Title>Add a Place</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City or Address</Form.Label>
              <Form.Control
                ref={refControl}
                type="text"
                placeholder="Moscow, RU"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button type="submit" variant="primary" onClick={handleClose}>
              ADD
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ButtonFloatingAddCity;
