import React from "react";
import Person from "../src/components/desprops";
function NameList() {
  const persons = [
    {
      id: 1,
      name: "kaptan",
      age: 30,
      skill: "react"
    },
    {
      id: 2,
      name: "rinku",
      age: 29,
      skill: "java"
    },
    {
      id: 3,
      name: "ankit",
      age: 39,
      skill: "vue"
    }
  ];
  const personsList = persons.map(details => <Person details={details} />);
  return <div>{personsList}</div>;
}
export default NameList;