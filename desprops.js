import React from "react";
const Person = ({ details }) => {
  // here i need to destructure person object
  return (
    <div>
      <h2>
        I am {details.name},My age is {details.age},I know {details.skill}
      </h2>
    </div>
  );
};
export default Person;