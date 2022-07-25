import React, { useState } from "react";
import { Nav } from "react-bootstrap";

export default function Logout() {
  return (
    <Nav>
      <Nav.Link
        href="#"
        className="m-1 p-2 btn btn-dark"
        style={{ color: "#fff" }}
      >
        Log Out
      </Nav.Link>
    </Nav>
  );
}
