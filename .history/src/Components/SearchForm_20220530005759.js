import React, { useEffect } from 'react';
import { GoSearch } from "react-icons/go";
import { ImHome3 } from "react-icons/im";
import { MdPlaylistAdd } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';


// This is the search form. It conatins both the input box and the search icon
const SearchForm = ({ searchedString, handleSubmit, handleChange, arrayPlaylistFunc }) => {

      let { ids } = useParams();


      

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
                        <GoSearch className="searchIcon" onClick={handleSubmit} type='submit' />
                  </form>

                  {/* Home icon */}
                  <Link to='/'>
                        <ImHome3 className='home-icon' />
                  </Link>

                  {/* Add a video to playlist icon */}
                  <MdPlaylistAdd className='addPlaylist-icon' onClick={
                        () => arrayPlaylistFunc(1)

                  } />

                  {
                        <h1
      }
                  {/* onCanPlay={ () => { arrayPlaylistFunc(1) }} */}

                  {
                        useEffect(() => {
                              arrayPlaylistFunc(ids)
                        }, [ids])
                  }

            </div>

      );
}

export default SearchForm;
