import React from 'react';
import '../css/ColumnStructure.css';

const ColumnStructure = ({ data }) => {
  if (!data || !data.sections) {
    return null;
  }

  return (
    <div className="column-structure">
      {data.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="row">
          {section.columns.map((column, columnIndex) => (
            <div key={columnIndex} className="column">
              <a href={column.link}>
                <img src={column.image} alt={column.text.title} />
                <div className="content-box">
                  <h2>{column.text.title}</h2>
                  <p>{column.text.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ColumnStructure;
