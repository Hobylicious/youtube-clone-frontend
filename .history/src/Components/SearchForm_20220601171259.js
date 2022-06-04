import React, { useEffect } from 'react';
import { GoSearch } from "react-icons/go";
import { ImHome3 } from "react-icons/im";
import { MdPlaylistAdd } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';



// This is the search form. It conatins both the input box and the search icon
const SearchForm = ({ searchedString, handleSubmit, handleChange }) => {

      return (
            <div className="form-container form-container-player">
                  
                  <form onSubmit={handleSubmit} className="form" >

                  
                        <div className='search-icon-and-input-box'>
                              <GoSearch className="searchIcon" onClick={handleSubmit} type='submit' />
                              {/* Search Input */}
                              <input autoFocus className="input-rounded"
                                    placeholder='Type your search'
                                    type='text'
                                    name='SearchString'
                                    onChange={handleChange}
                                    value={searchedString}
                                    required
                              />
                        </div>

                  </form>
            </div>
      );
}

export default SearchForm;
