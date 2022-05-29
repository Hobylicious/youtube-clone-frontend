import React from 'react';
import { GoSearch } from "react-icons/go";
import {  } from "react-icons/fc";

// This is the search form. It conatins both the input box and the search icon
const SearchForm = ({ searchedString, handleSubmit, handleChange }) => {

      return (

            <div className="form-container">
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

                        {/* <button onClick={handleSubmit} type='submit' ><GoSearch className='search-icon' /></button> */}
                         <GoSearch className="searchIcon" onClick={handleSubmit} type='submit'/>
                  </form>
                  <button onClick={handleSubmit} type='submit' ><home className='home-icon' /></button>
            </div>

      );
}

export default SearchForm;
