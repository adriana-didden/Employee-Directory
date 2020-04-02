import React from "react";

function SearchForm(props) {
  const handleInputChange=(event)=>{
    props.handler(event.target.value)
  }
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={handleInputChange}
          value={props.val}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
