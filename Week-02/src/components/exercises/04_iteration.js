import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = (props) => {
  console.log(props);
  return (
    <div>
      <h1> {props.course} </h1>
      <table class="table">
        <thead>
          <td>Name</td>
          <td>Number of lectures</td>
          <td>Number of practicals</td>
        </thead>
        <tbody>
          {props.modules.map((module, index) => (
            <tr key={index}>
              <td>{module.name}</td>
              <td>{module.noLectures}</td>
              <td>{module.noPracticals}</td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
