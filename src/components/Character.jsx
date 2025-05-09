import React from "react";

function Character({ id, name, gender, eye_color, hair_color }) {
  return (
    <div className="character-card">
      <div className="character-info">
        <h2 className="character-name">{name}</h2>
        <div className="character-details">
          <div className="detail-item">
            <span className="detail-label">ID:</span>
            <span className="detail-value">{id}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Gender:</span>
            <span className="detail-value">{gender}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Eye Color:</span>
            <span className="detail-value">
              <span className="color-dot" style={{ backgroundColor: eye_color }}></span>
              {eye_color}
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Hair Color:</span>
            <span className="detail-value">
              <span className="color-dot" style={{ backgroundColor: hair_color }}></span>
              {hair_color}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;