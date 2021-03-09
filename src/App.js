import React, { Component } from "react";
class App extends Component {
  state = {
    login: "",
    password: "",
  };

  render() {
    const handleLoginChange = (e) => {
      this.setState({
        login: e.target.value,
      });
    };

    const handlePasswordChange = (e) => {
      this.setState({
        password: e.target.value,
      });
    };

    const handleSend = (e) => {
      console.log(this.state);
      e.preventDefault();
    };

    return (
      <div>
        <h1>Wprowadź dane:</h1>
        <br></br>
        <form onSubmit={handleSend}>
          Login:<input onChange={handleLoginChange}></input>
          <br></br>
          Hasło:<input onChange={handlePasswordChange} type="password"></input>
          <br></br>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default App;
