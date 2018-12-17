import React from 'react';
import '../styles/BigName.css';

const BigName = function({name, logo, id, onEvent, white}) {
  return(
    <div
      className={`big-names-item`}
      id={id}
      onMouseEnter={onEvent}
      onMouseLeave={onEvent}
      onTouchStart={onEvent}
      onTouchEnd={onEvent}
    >
      <img src={logo} alt={name} className="emb" aria-label={name} />
      <img src={white} alt={`${name}-white`} className="emb" aria-label={name} />
    </div>
  );
}

export default BigName;