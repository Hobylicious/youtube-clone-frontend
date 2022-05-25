import React from 'react';
import { alanceScale } from '@fortawesome/free-solid-svg-icons';



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
                        <button className="pure-button" type='submit'>Search</button>
                  </form>
            </div>

      );
}

export default SearchForm;
