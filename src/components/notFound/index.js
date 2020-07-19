import React from 'react';
import './styles.scss';

const NotFound = () => {
  return (
    <section className="not-found">
      <p>I'm sorry... we can't find that page!</p>
      <p>Try again (not like this cat).</p>

      <img src="https://media.giphy.com/media/JoDT2WaykzFnN9vJqL/giphy.gif" alt="cat failing to jump up"/>
    </section>
  );
};

export default NotFound;
