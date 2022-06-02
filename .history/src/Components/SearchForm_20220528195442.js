import React from 'react';
import { GoSearch } from "react-icons/go";


// This is the search form. It conatins both the input box and the search icon
const SearchForm = ({ searchedString, handleSubmit, handleChange }) => {

      return (

            <div className="pure-form">
                  <form className='form form-videoPlayer' onSubmit={handleSubmit} >
                        {/* Search Input */}
                        <input autoFocus className="input-rounded input-rounded-videoPlayer"
                              placeholder='Type your search'
                              type='text'
                              name='SearchString'
                              onChange={handleChange}
                              value={searchedString}
                              required
                        />

                        {/* <button onClick={handleSubmit} type='submit' ><GoSearch className='search-icon' /></button> */}
                        <GoSearch className="searchIcon searchIcon-videoPlayer" onClick={handleSubmit} type='submit'/>
                  </form>
            </div>

      );
}

export default SearchForm;
