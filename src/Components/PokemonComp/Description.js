// Description.js
import React from "react";

const Description = ({
  heightpok,
  weightpok,
  pokstat1,
  pokstat2,
  pokstat3,
  pokstat4,
  pokstat5,
  pokstat6,
  posbs1,
  posbs2,
  posbs3,
  posbs4,
  posbs5,
  posbs6,
}) => {
  return (
    <div className="description-container bg-white rounded-lg shadow-lg p-6 mt-4">
      <h2 className="text-2xl font-semibold mb-4">Pokemon Stats</h2>
      <div className="divider h-px bg-gray-400 mb-4"></div>
      <div className="attributes">
        <div className="attribute">
          <span className="attribute-name">
            <strong style={{ color: "blue" }}>Height:</strong>
          </span>{" "}
          <span className="attribute-value">
            <strong style={{ color: "red" }}>{heightpok * 10} cm</strong>
          </span>
        </div>
        <div className="attribute">
          <span className="attribute-name">
            <strong style={{ color: "blue" }}>Weight:</strong>
          </span>{" "}
          <span className="attribute-value">
            <strong style={{ color: "red" }}>{weightpok * 0.1} kg</strong>
          </span>
        </div>
      </div>
      <div className="stats mt-6">
        <h3 className="text-lg font-semibold mb-4">Stats</h3>
        <div className="stats-grid grid grid-cols-2 gap-4">
          <div className="stat">
            <span className="stat-name">
              <strong style={{ color: "blue" }}>{pokstat1}:</strong>
            </span>{" "}
            <span className="stat-value">
              <strong style={{ color: "red" }}>{posbs1}</strong>
            </span>
          </div>
          <div className="stat">
            <span className="stat-name">
              <strong style={{ color: "blue" }}>{pokstat2}:</strong>
            </span>{" "}
            <span className="stat-value">
              <strong style={{ color: "red" }}>{posbs2}</strong>
            </span>
          </div>
          <div className="stat">
            <span className="stat-name">
              <strong style={{ color: "blue" }}>{pokstat3}:</strong>
            </span>{" "}
            <span className="stat-value">
              <strong style={{ color: "red" }}>{posbs3}</strong>
            </span>
          </div>
          <div className="stat">
            <span className="stat-name">
              <strong style={{ color: "blue" }}>{pokstat4}:</strong>
            </span>{" "}
            <span className="stat-value">
              <strong style={{ color: "red" }}>{posbs4}</strong>
            </span>
          </div>
          <div className="stat">
            <span className="stat-name">
              <strong style={{ color: "blue" }}>{pokstat5}:</strong>
            </span>{" "}
            <span className="stat-value">
              <strong style={{ color: "red" }}>{posbs5}</strong>
            </span>
          </div>
          <div className="stat">
            <span className="stat-name">
              <strong style={{ color: "blue" }}>{pokstat6}:</strong>
            </span>{" "}
            <span className="stat-value">
              <strong style={{ color: "red" }}>{posbs6}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
