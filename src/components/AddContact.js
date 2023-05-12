import { Link } from "react-router-dom";
import React, { Component } from "react";

export class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault(); //to prevent the default refreshing property of form submit
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are compulsory");

      return;
    }
    // this.setState({name:'',email:''})
    // this.props.addContactHandler(this.state);
    const newContact = {
      name: this.state.name,
      email: this.state.email,
    };

    this.setState({ name: "", email: "" });
    this.props.addContactHandler(newContact);

    console.log(this.props);
  };

  render() {
    return (
      <div className="ui main">
        <h2>AddContact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            ></input>
            <label>email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="email"
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
          </div>

          <button className="ui button blue" type="submit">
            {" "}
            Add
          </button>
        </form>
        <Link to={"/"}>
          <button className="ui button right blue">All contacts </button>
        </Link>
      </div>
    );
  }
}

export default AddContact;
