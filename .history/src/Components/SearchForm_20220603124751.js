import React, { useEffect } from 'react';
import { GoSearch } from "react-icons/go";
import { ImHome3 } from "react-icons/im";
import { MdPlaylistAdd } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { Button } from 'reactstrap';



// This is the search form. It conatins both the input box and the search icon
const SearchForm = ({ searchedString, handleSubmit, handleChange }) => {

      return (
            <div className="form-container">

                  <div className='home-and-playlist-icons'>
                        {/* Home icon */}
                        <Link to='/'>
                              <ImHome3 className='home-icon' />
                        </Link>
                        {/* Add a video to playlist icon */}
                        <MdPlaylistAdd className='addPlaylist-icon' />
                  </div>

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

                  <div user-super-container>
                        ,
                        <div className='username-container'>
                        <FaUser />
                        <p className='username playing-video-uploadedAt' >userName</p>
                        <p className='usernameLogin playing-video-uploadedAt'>loginStatus</p>
                  </div>
                  </div>
                  
            </div>
      );
}

export default SearchForm;
