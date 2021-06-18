import React from "react";
import { Link } from "react-router-dom";

const Emptypage = props => {
  return (
    <>
      <div>Empty page</div>
      <Link to="/">back to home</Link>
    </>
  );
};

export default Emptypage;
