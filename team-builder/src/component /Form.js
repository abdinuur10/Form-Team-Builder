import React from "react";

const Notes = (props) => {
  return (
    <div className="form-list">
      {props.notes.map((note) => (
          <div className=" form" key={Form.id}>
              <h3 className="Name">{Form.name}</h3>
              <p>{Form.email}</p>
              <p>{Form.role}</p>
          </div>
      ))}
      </div>
  );
      };
    