import { useState, useRef } from "react";

import { Form, FormControl, Button, InputGroup } from "react-bootstrap";

// simple effects
import { animatecss } from "../utils";
import "animate.css";


const PASSWORD_ = "palmhr";

function Login({ login }) {
  const [value, setValue] = useState("");
  const refLogin = useRef();

  return (
    <>
      <div
        style={{ height: "100vh", width: "100vw" }}
        className="text-center bg-dark d-flex justify-content-center align-items-center"
      >
        <div ref={refLogin} className="form-login">
          <Form
            onSubmit={(evt) => {
              evt.preventDefault();
              if (PASSWORD_ !== value) {
                animatecss(refLogin.current).then(() => setValue(() => ""));
              } else {
                login();
              }
            }}
          >
            <InputGroup className="mb-3 shadow">
              <FormControl
                value={value}
                type="password"
                onChange={(evt) => setValue(() => evt.target.value)}
                className="border-0"
                autoComplete="false"
              />
              <Button
                type="submit"
                variant="dark"
                size="lg"
                className="--text-secondary"
              >
                LOGIN
              </Button>
            </InputGroup>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
