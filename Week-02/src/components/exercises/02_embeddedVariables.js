import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = () => {
  const langs = ["Go", "Julia", "Kotlin"]
    
  return (
    <div>
      <h1>Modern Languages</h1>
      <ul>
        {langs.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </div>
  );
};

export default Demo;
