import "./App.css";
import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Card
        title={"Card title"}
        text={
          "Some quick example text to build on the card title and make up the\n" +
          "bulk of the card's content."
        }
      >
        <img
          src="https://i.ytimg.com/vi/58Qh1XcZaDA/hqdefault.jpg"
          className="card-img-top"
          alt="..."
        />
      </Card>
      <Card
        title={"Special title treatment"}
        text={
          "With supporting text below as a natural lead-in to additional content."
        }
      />
    </div>
  );
}

export default App;
