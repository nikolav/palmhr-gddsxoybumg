import { useState, useRef } from "react";
import { Button, Modal, Form, ButtonGroup } from "react-bootstrap";
const ButtonFloatingAddCity = ({ addPlace }) => {
  const refControl = useRef();
  const refControlSelect = useRef();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submit_ = (evt) => {
    evt.preventDefault();
    addPlace(refControl.current.value || refControlSelect.current.value);
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
          <Modal.Header className="bg-transparent border-bottom-0" closeButton>
            <Modal.Title>Add a Place</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-4">
              <Form.Label>Name of the City</Form.Label>
              <Form.Select
                ref={refControlSelect}
                onChange={() => (refControl.current.value = "")}
              >
                <option disabled>Select City</option>
                <option value="Paris">Paris</option>
                <option value="Riga">Riga</option>
                <option value="Kyiev">Kyiev</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address or City</Form.Label>
              <Form.Control
                ref={refControl}
                type="text"
                placeholder="Moscow, RU"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="bg-light border-0 d-flex justify-content-end">
            <ButtonGroup>
              <Button
                className="px-4"
                type="submit"
                variant="primary"
                onClick={handleClose}
              >
                OK
              </Button>
              <Button
                className="px-2"
                type="submit"
                variant="secondary"
                onClick={handleClose}
              >
                CANCEL
              </Button>
            </ButtonGroup>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ButtonFloatingAddCity;
