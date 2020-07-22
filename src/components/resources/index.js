import React from 'react';
import { resourcesList } from '../../data/resources';
import './styles.scss';

const handleLinkClick = url => window.open(url);


const Resources = () => {
  return (
    <section id="resources">
      <h2 className="main_subtitle">Resources</h2>
      <ul className="resources_list">
        {resourcesList.map(({ id, title, description, url }) => {
          return (
            <li key={id} onClick={() => handleLinkClick(url)}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Resources;