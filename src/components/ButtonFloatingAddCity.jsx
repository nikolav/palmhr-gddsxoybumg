import React, { useState, useRef } from "react";
import { Form, ListGroup, Button, Modal, ButtonGroup } from "react-bootstrap";

import { usePopper } from "react-popper";
import { motion } from "framer-motion";
import { throttle } from "lodash";
import useGeocodeAutocompleteAPI from "../hooks/use-geocode-autocomplete-api";

import addPlus from "../etc/add-plus.svg";

const ButtonFloatingAddCity = ({ addPlace }) => {
  const [searchValue, setSearchValue] = useState("");
  const [autocomplete, setAutocomplete] = useState(false);

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [-1, -1],
        },
      },
    ],
    placement: "bottom-start",
  });

  const [show, setShow] = useState(false);
  const refControl = useRef();
  const refControlSelect = useRef();

  const clearSearchValue = () => setSearchValue("");
  const handleClose = () => {
    setShow(false);
    clearSearchValue();
  };
  const handleShow = () => setShow(true);
  const submit_ = (evt) => {
    addPlace(refControl.current.value || refControlSelect.current.value);
    handleClose();
    clearSearchValue();
    evt.preventDefault();
  };
  const hideAutocomplete = () => setAutocomplete(false);

  const [autocompleteUrl, setAutocompleteUrl] = useState("Moscow, RU");
  const response = useGeocodeAutocompleteAPI(autocompleteUrl);
  const onFormControlChangeThrottled = throttle(({ target }) => {
    const input = target.value.trim();

    setSearchValue(input);

    if (input) setAutocompleteUrl(target.value);
  }, 456);

  //
  return (
    <>
      <div className="position-fixed bottom-0 end-0 m-4">
        <Button
          onClick={handleShow}
          className="widget-actions border-0 p-4 rounded-circle shadow-lg"
          variant="primary"
        >
          {/* ➕ */}
          <img
            style={{ width: 38 }}
            src={addPlus}
            alt="Add a Place"
          />
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
                size="lg"
                ref={refControlSelect}
                onChange={clearSearchValue}
              >
                <option disabled>Select City</option>
                <option value="Paris">Paris</option>
                <option value="Riga">Riga</option>
                <option value="Kyiev">Kyiev</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Label>Find a Place</Form.Label>
              <div ref={setReferenceElement}>
                <Form.Control
                  size="lg"
                  autoComplete="off"
                  type="text"
                  placeholder="Search..."
                  ref={refControl}
                  value={searchValue}
                  onChange={onFormControlChangeThrottled}
                  onFocus={(evt) => setAutocomplete(true)}
                  onKeyUp={(evt) => {
                    if (27 === evt.keyCode) {
                      hideAutocomplete();
                      evt.target.blur();
                    }
                  }}
                  onBlur={(evt) => {
                    // @todo, temporary hack
                    // when list item is picked outside search box
                    // runs `click` first, and `blur` hanges..
                    // delay closing clicks to set form value first
                    setTimeout(hideAutocomplete, 256);
                  }}
                />
              </div>

              {autocomplete && 0 < response.data?.length && (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                >
                  <ListGroup
                    ref={setPopperElement}
                    style={{ ...styles.popper, zIndex: 2 }}
                    {...attributes.popper}
                    className="shadow-sm"
                  >
                    {response.data.map((city) => (
                      <ListGroup.Item
                        action
                        className="p-3 m-0"
                        key={city}
                        onClick={(evt) => {
                          evt.preventDefault();
                          setSearchValue(city);
                          hideAutocomplete();
                        }}
                      >
                        {city}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </motion.div>
              )}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="bg-light border-0 d-flex justify-content-end">
            <ButtonGroup size="lg">
              <Button
                className="px-4 bg-gradient"
                type="submit"
                variant="primary"
              >
                OK
              </Button>
              <Button
                className="px-2"
                type="button"
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
