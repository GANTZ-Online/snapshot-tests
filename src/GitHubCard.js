import React from "react"
import Card from "react-bootstrap/Card"
import MyImage from "./taco.jpg"

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        {/* Use your GitHub info instead, but Taco is used as an example */}
        <Card.Img variant="top" src={MyImage} />
        {/* Source:  */}
        <Card.Body>
            <Card.Title>Taco</Card.Title>
            <Card.Text>
            This is a Taco, awesome.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard