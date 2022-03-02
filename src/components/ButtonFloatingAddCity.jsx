import React, { useState, useRef } from "react";
import { Form, ListGroup, Button, Modal, ButtonGroup } from "react-bootstrap";

import { usePopper } from "react-popper";
import { motion } from "framer-motion";

import useGeocodeAutocompleteAPI from "../hooks/use-geocode-autocomplete-api";

const lookupdb = [
  "shanghai",
  "lagos",
  "istanbul",
  "karachi",
  "mumbai",
  "moscow",
  "sao paulo",
  "beijing",
  "guangzhou",
  "delhi",
  "lahore",
  "shenzhen",
  "seoul",
  "jakarta",
  "tianjin",
  "chennai",
  "tokyo",
  "cairo",
  "dhaka",
  "mexico city",
  "kinshasa",
  "bangalore",
  "new york",
  "london",
  "bangkok",
  "tehran",
  "dongguan",
  "ho chi minh city",
  "bogota",
  "lima",
  "hong kong",
  "hanoi",
  "hyderabad",
  "wuhan",
  "rio de janeiro",
  "foshan",
  "ahmedabad",
  "baghdad",
  "singapore",
  "shantou",
  "riyadh",
  "jeddah",
  "santiago",
  "saint petersburg",
  "qalyubia",
  "chengdu",
  "alexandria",
  "ankara",
  "chongqing",
  "kolkata",
  "xi'an",
  "surat",
  "johannesburg",
  "nanjing",
  "dar es salaam",
  "yangon",
  "abidjan",
  "harbin",
  "zhengzhou",
  "suzhou",
  "sydney",
  "new taipei city",
  "los angeles",
  "melbourne",
  "cape town",
  "shenyang",
  "yokohama",
  "busan",
  "hangzhou",
  "quanzhou",
  "durban",
  "casablanca",
  "algiers",
  "berlin",
  "nairobi",
  "hefei",
  "kabul",
  "pyongyang",
  "madrid",
  "ekurhuleni",
  "pune",
  "addis ababa",
  "changsha",
  "jaipur",
  "xuzhou",
  "wenzhou",
];

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

  const refControl = useRef();
  const refControlSelect = useRef();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSearchValue("");
  };
  const handleShow = () => setShow(true);
  const submit_ = (evt) => {
    addPlace(refControl.current.value || refControlSelect.current.value);
    handleClose();
    setSearchValue("");
    evt.preventDefault();
  };
  const hideAutocomplete = () => setAutocomplete(false);

  const [autocompleteUrl, setAutocompleteUrl] = useState("");
  const response = useGeocodeAutocompleteAPI(autocompleteUrl);
  //
  return (
    <>
      <div className="position-fixed bottom-0 end-0 m-4">
        <Button
          onClick={handleShow}
          className="border-0 opacity-75 bg-gradient fs-4 p-2 p-md-4 rounded-circle shadow-lg"
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
                size="lg"
                ref={refControlSelect}
                onChange={() => setSearchValue("")}
              >
                <option disabled>Select City</option>
                <option value="Paris">Paris</option>
                <option value="Riga">Riga</option>
                <option value="Kyiev">Kyiev</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Label>Search a Place</Form.Label>
              <div ref={setReferenceElement}>
                <Form.Control
                  size="lg"
                  autoComplete="off"
                  type="text"
                  placeholder="Start typing..."
                  ref={refControl}
                  value={searchValue}
                  // @todo
                  onChange={(evt) => setAutocompleteUrl(evt.target.value)}
                  onFocus={(evt) => setAutocomplete(true)}
                  // onBlur={(evt) => setAutocomplete(false)}
                  onKeyUp={(evt) => {
                    if (27 === evt.keyCode) {
                      hideAutocomplete();
                      evt.target.blur();
                    }
                  }}
                />
              </div>

              {autocomplete &&
              response.data?.a?.b
              && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                >
                  <ListGroup
                    ref={setPopperElement}
                    style={{ ...styles.popper, zIndex: 2 }}
                    {...attributes.popper}
                    className="shadow-sm"
                  >
                    {query_(response.data.a.b).map((city) => (
                      <ListGroup.Item
                        action
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

//
function query_(entry = "a", size = 4) {
  return lookupdb
    .sort(() => Math.random() - 0.5)
    .filter((place) => {
      return (
        place.startsWith(entry) ||
        entry.split("").some((chr) => -1 !== place.indexOf(chr))
      );
    })
    .slice(0, size)
    .map((place) =>
      place
        .split(" ")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ")
    );
}
