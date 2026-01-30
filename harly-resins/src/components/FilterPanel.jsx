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
      {/* Overlay to dim the background when panel is open */}
      {show && <div className="filter-overlay" onClick={onClose}></div>}

      <div className={`filter-sidebar ${show ? "open" : ""}`}>
        <div className="filter-header">
          <h2>Filter & Sort</h2>
          <button className="close-panel-btn" onClick={onClose}>✕</button>
        </div>

        <div className="filter-scroll-area">
          {/* SECTION: COLOR */}
          <div className="filter-group">
            <h4>Color</h4>
            <div className="filter-pills">
              {[ "Black", "Blue", "Clear", "Golden", "Green", "Multicolored", "Orange", "Pink", "Purple", "Red", "Silver", "White" ].map(c => (
                <button
                  key={c}
                  className={`pill ${filters.color.includes(c) ? "active" : ""}`}
                  onClick={() => toggle("color", c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* SECTION: FLAKE */}
          <div className="filter-group">
            <h4>Flakes</h4>
            <div className="filter-pills">
              {[ "Golden", "Silver", "Pink", "No flakes" ].map(f => (
                <button
                  key={f}
                  className={`pill ${filters.flake.includes(f) ? "active" : ""}`}
                  onClick={() => toggle("flake", f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* SECTION: GLITTER */}
          <div className="filter-group">
            <h4>Glitter</h4>
            <div className="filter-pills">
              {[ "Blue", "Golden", "Multi", "Rose Gold", "Silver", "No glitter" ].map(g => (
                <button
                  key={g}
                  className={`pill ${filters.glitter.includes(g) ? "active" : ""}`}
                  onClick={() => toggle("glitter", g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* DYNAMIC SECTIONS */}
          {selectedCategory === "keychain" && (
            <div className="filter-group">
              <h4>Chain Type</h4>
              <div className="filter-pills">
                {[ "Golden", "Silver" ].map(ch => (
                  <button key={ch} className={`pill ${filters.chain.includes(ch) ? "active" : ""}`} onClick={() => toggle("chain", ch)}>{ch}</button>
                ))}
              </div>
            </div>
          )}

          {selectedCategory === "bookmark" && (
            <div className="filter-group">
              <h4>Tassel Color</h4>
              <div className="filter-pills">
                {[ "Blue", "Golden", "Green", "Pink", "White" ].map(t => (
                  <button key={t} className={`pill ${filters.tassle.includes(t) ? "active" : ""}`} onClick={() => toggle("tassle", t)}>{t}</button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="filter-actions">
          <button className="reset-all-btn" onClick={clearAllFilters}>Reset All</button>
          <button className="apply-btn" onClick={onClose}>Show Results</button>
        </div>
      </div>
    </>
  );
}