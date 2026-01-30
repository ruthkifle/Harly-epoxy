import "../styles/global.css";

export default function FilterPanel({ show, onClose, filters, setFilters, onApplyFilters, selectedCategory }) {

  const clearAllFilters = () => {
    const cleared = {
      color: [],
      flake: [],
      glitter: [],
      chain: [],
      tassle: [],
      handle: []
    };
    setFilters(cleared);
    onApplyFilters(cleared); // Tell the database to reset too
  };

  const toggle = (type, value) => {
    const activeList = filters[ type ].includes(value)
      ? filters[ type ].filter(v => v !== value) // Remove if already there
      : [ value ]; // Add it (Keeping it to one selection makes filtering easier)

    const updatedFilters = { ...filters, [ type ]: activeList };
    setFilters(updatedFilters);

    // This sends the new filter state to the Backend
    onApplyFilters(updatedFilters);
  };

  return (
    <div className={`filter-panel ${show ? "open" : ""}`}>
      <div className="filter-header">
        <h2>Filters</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="filter-body">
        {/* COLOR - Updated with your new JSON values */}
        <div className="filter-section">
          <h3>Color</h3>
          <div className="filter-grid">
            {[ "Black", "Blue", "Clear", "Golden", "Green", "Multicolored", "Orange", "Pink", "Purple", "Red", "Silver", "White" ].map(c => (
              <label key={c} className={filters.color.includes(c) ? "active-label" : ""}>
                <input
                  type="checkbox"
                  checked={filters.color.includes(c)}
                  onChange={() => toggle("color", c)}
                />
                {c}
              </label>
            ))}
          </div>
        </div>

        {/* FLAKE */}
        <div className="filter-section">
          <h3>Flake</h3>
          {[ "Golden", "Silver", "Pink", "No flakes" ].map(f => (
            <label key={f}>
              <input
                type="checkbox"
                checked={filters.flake.includes(f)}
                onChange={() => toggle("flake", f)}
              />
              {f}
            </label>
          ))}
        </div>

        {/* GLITTER */}
        <div className="filter-section">
          <h3>Glitter</h3>
          {[ "Blue", "Golden", "Multi", "Rose Gold", "Silver", "No glitter" ].map(g => (
            <label key={g}>
              <input
                type="checkbox"
                checked={filters.glitter.includes(g)}
                onChange={() => toggle("glitter", g)}
              />
              {g}
            </label>
          ))}
        </div>

        {/* Only show Chain if it's a Keychain */}
        {selectedCategory === "keychain" && (
          <div className="filter-section">
            <h3>Chain</h3>
            {[ "Golden", "Silver" ].map(ch => (
              <label key={ch}>
                <input type="checkbox" checked={filters.chain.includes(ch)} onChange={() => toggle("chain", ch)} />
                {ch}
              </label>
            ))}
          </div>
        )}

        {/* Only show Tassle if it's a Bookmark */}
        {selectedCategory === "bookmark" && (
          <div className="filter-section">
            <h3>Tassle</h3>
            {[ "Blue", "Golden", "Green", "Pink", "White" ].map(t => (
              <label key={t}>
                <input type="checkbox" checked={filters.tassle.includes(t)} onChange={() => toggle("tassle", t)} />
                {t}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="filter-footer">
        <button className="clear-btn" onClick={clearAllFilters}>Clear All</button>
      </div>
    </div>
  );
}