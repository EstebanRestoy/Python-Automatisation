import React from "react";

function Script() {
  var pid = null;
  const name = "Script Odin";
  const id = 1;
  const isEnable = true;
  const description =
    "Un script qui permet d'envoyer une notif lorsque une oublie de signer";
  const mySubmitHandler = (event) => {
    event.preventDefault();
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
    };
    fetch("http://localhost:3000/script/1", requestOptions).then(
      (response) => (pid = response)
    );
  };
  return (
    <div>
      <div
        className="card"
        style={{ width: "18rem" }}
        style={{ backgroundColor: isEnable ? "green" : "red" }}
      >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-outline-dark">
            Modifier
          </a>
          <form onSubmit={mySubmitHandler}>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Script;
