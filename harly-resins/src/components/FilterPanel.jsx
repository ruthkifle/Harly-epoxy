import React from "react";
import "../styles/global.css";

export default function FilterPanel({ show, onClose, filters, setFilters, onApplyFilters, selectedCategory }) {

  const clearAllFilters = () => {
    const cleared = { color: [], flake: [], glitter: [], chain: [], tassle: [], handle: [] };
    setFilters(cleared);
    onApplyFilters(cleared);
  };

  const toggle = (type, value) => {
    // Pro logic: clicking the same pill twice deselects it
    const activeList = filters[ type ].includes(value) ? [] : [ value ];
    const updatedFilters = { ...filters, [ type ]: activeList };
    setFilters(updatedFilters);
    onApplyFilters(updatedFilters);
  };

  return (
    <>
      {show && <div className="filter-overlay fade-in" onClick={onClose} aria-hidden="true"></div>}

      <div className={`filter-sidebar ${show ? "open" : ""}`}>
        <div className="filter-header">
          <h2>Filter</h2>
          <button className="close-panel-btn" onClick={onClose} aria-label="Close filters">✕</button>
        </div>

        <div className="filter-scroll-area">
          {/* SECTION: COLOR */}
          <div className="filter-group">
            <h4>Resin Color</h4>
            <div className="filter-pills">
              {[ "Black", "Blue", "Clear", "Golden", "Green", "Multicolored", "Orange", "Pink", "Purple", "Red", "Silver", "White" ].map(c => (
                <button
                  key={c}
                  className={`pill-btn ${filters.color.includes(c) ? "active" : ""}`}
                  onClick={() => toggle("color", c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* SECTION: FLAKE */}
          <div className="filter-group">
            <h4>Foil Flakes</h4>
            <div className="filter-pills">
              {[ "Golden", "Silver", "Pink", "No flakes" ].map(f => (
                <button
                  key={f}
                  className={`pill-btn ${filters.flake.includes(f) ? "active" : ""}`}
                  onClick={() => toggle("flake", f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* DYNAMIC SECTIONS */}
          {selectedCategory === "keychain" && (
            <div className="filter-group border-top">
              <h4>Chain Color</h4>
              <div className="filter-pills">
                {[ "Golden", "Silver" ].map(ch => (
                  <button key={ch} className={`pill-btn ${filters.chain.includes(ch) ? "active" : ""}`} onClick={() => toggle("chain", ch)}>{ch}</button>
                ))}
              </div>
            </div>
          )}

          {selectedCategory === "bookmark" && (
            <div className="filter-group border-top">
              <h4>Tassel Color</h4>
              <div className="filter-pills">
                {[ "Blue", "Golden", "Green", "Pink", "White" ].map(t => (
                  <button key={t} className={`pill-btn ${filters.tassle.includes(t) ? "active" : ""}`} onClick={() => toggle("tassle", t)}>{t}</button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="filter-actions">
          <button className="reset-all-btn" onClick={clearAllFilters}>Reset Filters</button>
          <button className="apply-btn" onClick={onClose}>Show Results</button>
        </div>
      </div>
    </>
  );
}