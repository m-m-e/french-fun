import React from 'react';
import './styles.scss';

const Filter = ({ 
  tagSearch,
  handleTagSearch,
  handleSearch,
  handleReset,
  handleCreatorSearch,
  creators,
  creatorSearch
})=> {
  return (
    <div className="filters">
      <h3>Filters</h3>
      <form className="form">
        <div className="input-wrapper">
          <label htmlFor="search-tag">Search by video tag: </label>
          <input type="text" onChange={handleTagSearch} value={tagSearch} id="searchTag"/>
        </div>
        
        <div className="input-wrapper">
          <label htmlFor="search-creator">Or search by creator: </label>
          <select name="creators" id="search-creator" onChange={handleCreatorSearch} value={creatorSearch}>
            {creators.map((name, i) => <option key={i} value={name}>{name}</option>)}
          </select>
        </div>

        <div className="buttons-container">
          <button className="button button-submit" type="submit" onClick={handleSearch}>Go!</button>
          <button className="button button-reset" type="button" onClick={handleReset}>Show all videos</button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
