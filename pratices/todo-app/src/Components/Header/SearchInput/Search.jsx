import React from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
    
};

function Search(props) {
    return (
        <div className='input__search'>
            <input type="text" value="Type somthing to search"/>
            <button>Search</button>
        </div>
    );
}

export default Search;