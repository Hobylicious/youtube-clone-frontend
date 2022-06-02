import React from 'react';
// import { GoSearch } from "react-icons/fa";
import { GoSearch } from "react-icons/go";



const SearchForm = ({ searchedString, handleSubmit, handleChange }) => {

      return (

            <div className="pure-form">
                  <form onSubmit={handleSubmit} className="form" >

                        {/* City Input */}
                        <input className="input-rounded"
                              placeholder='Type your search'
                              type='text'
                              name='SearchString'
                              onChange={handleChange}
                              value={searchedString}
                              required
                        />
                        <button ><GoSearch className="pure-button" type='submit'/></button>
                  </form>
            </div>

      );
}

export default SearchForm;
