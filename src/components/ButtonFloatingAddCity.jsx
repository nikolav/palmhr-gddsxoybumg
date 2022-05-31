import React, { useState, useRef, useCallback } from "react";
import { Form, ListGroup, Button, Modal, ButtonGroup } from "react-bootstrap";

import { usePopper } from "react-popper";
import { motion } from "framer-motion";
// import { throttle } from "lodash";
import useGeocodeAutocompleteAPI from "../hooks/use-geocode-autocomplete-api";

import iconAdd from "../etc/icon-add.svg";

const { debounce } = require("nikolav-q").func;

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
    evt.preventDefault();
    addPlace(refControl.current.value || refControlSelect.current.value);
    handleClose();
    clearSearchValue();
  };
  const hideAutocomplete = () => setAutocomplete(false);

  const [autocompleteUrl, setAutocompleteUrl] = useState("Moscow, RU");
  const response = useGeocodeAutocompleteAPI(autocompleteUrl);
  const setAutocompleteUrlDebounced = useCallback(
    debounce(setAutocompleteUrl, 345),
    []
  );
  const onFormControlChange = ({ target }) => {
    const input = target.value.trim();

    setSearchValue(input);

    // if (input) setAutocompleteUrl(target.value);
    //
    console.log(input);
    if (input) setAutocompleteUrlDebounced(target.value);
  };

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
          <img style={{ width: 38 }} src={iconAdd} alt="Add a Place" />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={submit_}>
          <Modal.Header
            // closeButton
            className="border-bottom border-bottom-1"
            style={{
              paddingTop: ".72em",
              paddingLeft: "2.2em",
              paddingRight: "2.2em",
              paddingBottom: "1.75em",
            }}
          >
            <Modal.Title
              className="bg-light w-100"
              style={{
                height: "2em",
              }}
            ></Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              paddingBottom: "10.73em",
              paddingLeft: "2.2em",
              paddingRight: "2.2em",
              paddingTop: 0,
              marginTop: -6,
            }}
          >
            <Form.Group className="mb-3" controlId="ControlInputSearch">
              <Form.Label
                className="mb-0 fw-bold opacity-50 text-black-50 mb-1"
                style={{ fontSize: "75%" }}
              >
                NAME OF THE CITY
              </Form.Label>
              <div ref={setReferenceElement}>
                <Form.Control
                  className="opacity-50"
                  style={{}}
                  size="lg"
                  autoComplete="off"
                  type="text"
                  placeholder="Select City"
                  ref={refControl}
                  value={searchValue}
                  onChange={onFormControlChange}
                  onFocus={(evt) => setAutocomplete(true)}
                  onKeyUp={(evt) => {
                    if (27 === evt.keyCode) {
                      evt.target.blur();
                      hideAutocomplete();
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
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                >
                  <ListGroup
                    ref={setPopperElement}
                    style={{ ...styles.popper, zIndex: 2 }}
                    {...attributes.popper}
                    className="shadow"
                  >
                    {response.data.map((city) => (
                      <ListGroup.Item
                        action
                        className="p-3 m-0 border-0"
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
