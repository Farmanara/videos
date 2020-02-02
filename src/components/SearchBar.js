import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  //TODO : make sure we call
  //callback from parent component

  render() {
    return (
      <div className=" search-bar segment ui ">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
          </div>
          <input
            placeholder="Type in what you're looking for and hit Enter!"
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
