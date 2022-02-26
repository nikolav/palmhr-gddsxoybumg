import { Button, ButtonGroup } from "react-bootstrap";

const Menu = ({ logout }) => {
  return (
    <div className="position-fixed top-0 end-0 p-0 p-sm-2">
      <ButtonGroup>
        <Button
          href="https://github.com/nikolav/palmhr-gddsxoybumg.git"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </Button>
        <Button onClick={logout} variant="secondary">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Menu;
