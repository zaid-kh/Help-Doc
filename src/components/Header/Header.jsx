import React from 'react';
import './Header.css'
const TitleComponent = ({ title }) => {
  return (
    <section className="titleField" >
      <h1 className="theTitle">
        {title}
      </h1>
    </section>
  );
};

export default TitleComponent;
