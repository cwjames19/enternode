import React from 'react';
import '../styles/BigName.css';

const BigName = function({name, logo, id, onEvent}) {
  return(
    <div
      className={`big-names-item`}
      id={id}
      onMouseEnter={onEvent}
      onMouseLeave={onEvent}
      onTouchStart={onEvent}
      onTouchEnd={onEvent}
    >
      <object
        type="image/svg+xml"
        className="emb"
        id={`${id}-object`}
        data={logo}
        alt={name}
        aria-label={name}
      />
    </div>
  );
}

export default BigName;