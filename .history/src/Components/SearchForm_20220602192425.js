import React, { useEffect } from 'react';
import { GoSearch } from "react-icons/go";
import { ImHome3 } from "react-icons/im";
import { MdPlaylistAdd } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';



// This is the search form. It conatins both the input box and the search icon
const SearchForm = ({ searchedString, handleSubmit, handleChange }) => {

      return (
            <div className="form-container form-container-player">
                  <form onSubmit={handleSubmit} className="form" >

                        <div className='search-icon-and-input-box'>
                              <div>
  <Spinner
    color="primary"
    type="grow"
  >
    Loading...
  </Spinner>
  <Spinner
    color="secondary"
    type="grow"
  >
    Loading...
  </Spinner>
  <Spinner
    color="success"
    type="grow"
  >
    Loading...
  </Spinner>
  <Spinner
    color="danger"
    type="grow"
  >
    Loading...
  </Spinner>
  <Spinner
    color="warning"
    type="grow"
  >
    Loading...
  </Spinner>
  <Spinner
    color="info"
    type="grow"
  >
    Loading...
  </Spinner>
  <Spinner
    color="light"
    type="grow"
  >
    Loading...
  </Spinner>
  <Spinner
    color="dark"
    type="grow"
  >
    Loading...
  </Spinner>
</div>
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

                        <div className='home-and-playlist-icons'>
                              <div>
                                    {/* Add a video to playlist icon */}
                                    <MdPlaylistAdd className='addPlaylist-icon' />

                                    {/* Home icon */}
                                    <Link to='/'>
                                          <ImHome3 className='home-icon' />
                                    </Link>
                              </div>
                        </div>
                  </form>
            </div>
      );
}

export default SearchForm;
