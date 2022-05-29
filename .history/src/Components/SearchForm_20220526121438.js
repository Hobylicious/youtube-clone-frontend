import React from 'react';
// import { GoSearch } from "react-icons/fa";
import { GoSearch } from "react-icons/go";


// This is the search form. It conatins both the input box and the search icon
const SearchForm = ({ searchedString, handleSubmit, handleChange }) => {

      return (

            <div className="pure-form">
                  <form onSubmit={handleSubmit} className="form" >
                        {/* Search Input */}
                        <input autoFocus className="input-rounded"
                              placeholder='Type your search'
                              type='text'
                              name='SearchString'
                              onChange={handleChange}
                              value={searchedString}
                              required
                        />

                        <button onClick={handleSubmit} type='submit' >Search</button>
                         {/* <GoSearch className="searchIcon" onClick={handleSubmit} type='submit'/> */}
                  </form>
            </div>

      );
}

export default SearchForm;
