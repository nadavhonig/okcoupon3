import { Button } from "@material-ui/core";
import { Component } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
class Header extends Component {
  public render(): JSX.Element {
    return (
      <div className="Header">
        OKcoupon
        <div id="loginn">
          <Button variant="contained" href="/register">
            Register
          </Button>
          &nbsp;
          <Button variant="contained" color="primary" href="/login">
            LOGIN
          </Button>
          &nbsp;
          <Button
            variant="contained"
            color="secondary"
            href="/logout"
            onClick={handleClick}
          >
            LOGOUT
          </Button>
          <br />
        </div>
      </div>
    );
  }
}

export default Header;

export function handleClick() {
  localStorage.setItem("token", "user Logged out");
  localStorage.setItem("clientType", "guest");
}
