import React, { useState } from 'react'

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  }
  const handleClose = () => {
    setSearchValue('');
  }

  return (
    <div className='serac-tab'>
        <div className='inner'>
            <div className='component'>
                <input 
                  type="text" 
                  name="search" 
                  id="search" 
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder='Search'
                  aria-label='Search'
                  />
                <div className='descripte'>
                  Hit enter to search or ESC to close
                </div>
            </div>
            <div 
              className='close'
              onClick={handleClose}
              role='button'
              tabIndex={0}
              aria-label='Close Search'
            >
              X
            </div>
        </div>
    </div>
  )
}

export default Search