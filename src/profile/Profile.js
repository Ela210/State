import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const Profile = () => {
  const [Name, setName] = useState("Ela");

  useEffect(() => {
    console.log("component did Mount");
    console.log("component did Update");

    return () => {
      console.log("Component finish !");
    };
  });

  const handleChange = () => {
    setName(Name == "Ela" ? "Ala" : "Ela");
  };

  return (
    <div>
      <div>
        <Card className="cerd" style={{ width: "18rem" }}>
          <Card.Img className="img" variant="top" src="ela.png" />
          <Card.Body>
            <Card.Title>{Name}</Card.Title>
            <Card.Text>23 ans </Card.Text>
            <Card.Text>Student</Card.Text>

            <button onClick={handleChange}> Change my name </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Profile;
