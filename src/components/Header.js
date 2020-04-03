import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>
        Todo List
        <span style={{ fontSize: 48, marginLeft: 20 }}>
          <i className="far fa-edit"></i>
        </span>
      </h1>
    </div>
  );
};

export default Header;
