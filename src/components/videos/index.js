import React, { Component } from 'react';
import './styles.scss';
import { videosList } from '../../data/videos';
import Filter from '../filter';

class Videos extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      videos: videosList,
      tagSearch: '',
      creatorSearch: '',
      typeSearch: '',
      listIsFiltered: false,
      types: ["song", "story", "lesson"],
      creators: videosList ? [...new Set(videosList.map(video => video.creator))] : []
    };

    this.state = this.initialState;

    this.handleTagSearch = e => {
      this.setState({
        tagSearch: e.currentTarget.value,
      });
    };

    this.handleCreatorSearch = e => {
      this.setState({
        creatorSearch: e.currentTarget.value,
      });
    };

    this.handleTypeSearch = e => {
      this.setState({
        typeSearch: e.currentTarget.value,
      });
    };

    this.handleSearch = e => {
      const { tagSearch, creatorSearch, typeSearch } = this.state;
      e.preventDefault();
      this.filterVideos(tagSearch, creatorSearch, typeSearch);
      this.setState({
        listIsFiltered: true
      });
    };

    this.handleReset = e => {
      e.preventDefault();
      this.setState(this.initialState);
    };
  };

  filterVideos(tag, creator, type) {
    const filteredVideos = this.initialState.videos.filter(video => video.tags.includes(tag) || video.creator === creator || video.type === type);
    this.setState({ videos: filteredVideos });
  }

  render() {
    const { videos, tagSearch, creatorSearch, creators, typeSearch, types } = this.state;
    const { handleTagSearch, handleSearch, handleReset, handleCreatorSearch, handleTypeSearch } = this;
    return (
      <section>
        <h2 className="main_subtitle">Videos</h2>
        <Filter
          tagSearch={tagSearch}
          handleTagSearch={handleTagSearch}
          handleCreatorSearch={handleCreatorSearch}
          handleSearch={handleSearch}
          handleReset={handleReset}
          creatorSearch={creatorSearch}
          creators={creators}
          handleTypeSearch={handleTypeSearch}
          typeSearch={typeSearch}
          types={types}
        />
        <div className="videos-container">
          {videos.length ? videos.map(video => video.src && (
            <div key={video.id} className="video">
              <h3>{video.title}</h3>
              <iframe
                className="video-player"
                title={video.title}
                src={video.src}
                frameBorder="0"
                allowFullScreen
              />
              <ul className="tags-list">
                {video.tags.map((tag, index) => <li key={index}>{tag}</li>)}
              </ul>
            </div>
            ))
            : <p>No videos found matching those filters. Please try again!</p>
          }
        </div>
      </section>
    );
  }
}

export default Videos;
