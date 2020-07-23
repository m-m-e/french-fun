import React from 'react';
import './styles.scss';

const Filter = ({ 
  tagSearch,
  handleTagSearch,
  handleSearch,
  handleReset,
  handleCreatorSearch,
  creators,
  creatorSearch,
  handleTypeSearch,
  typeSearch,
  types,
  tags
})=> {
  return (
    <div className="filters">
      <h3>Filters</h3>
      <form className="form">
        <div className="input-wrapper">
          <label htmlFor="search-tag">Search by video tag: </label>
          <select name="tags" id="search-tag" onChange={handleTagSearch} value={tagSearch}>
            <option value="">Choose one</option>
            {tags.map((tag, i) => <option key={i} value={tag}>{tag}</option>)}
          </select>
        </div>
        
        <div className="input-wrapper">
          <label htmlFor="search-creator">Search by creator: </label>
          <select name="creators" id="search-creator" onChange={handleCreatorSearch} value={creatorSearch}>
            <option value="">Choose one</option>
            {creators.map((name, i) => <option key={i} value={name}>{name}</option>)}
          </select>
        </div>

        <div className="input-wrapper">
          <label htmlFor="search-type">Or search by type: </label>
          <select name="types" id="search-type" onChange={handleTypeSearch} value={typeSearch}>
            <option value="">Choose one</option>
            {types.map((type, i) => <option key={i} value={type}>{type}</option>)}
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
