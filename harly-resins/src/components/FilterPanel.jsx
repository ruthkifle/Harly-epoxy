import "../styles/global.css";

export default function FilterPanel({ show, onClose, filters, setFilters }) {

  const toggle = (type, value) => {
    setFilters(prev => {
      const active = prev[type].includes(value);

      return {
        ...prev,
        [type]: active
          ? prev[type].filter(v => v !== value)   // remove
          : [...prev[type], value]               // add
      };
    });
  };

  return (
    <div className={`filter-panel ${show ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>✕</button>
      <h2>Filters</h2>

      {/* COLOR */}
      <div className="filter-section">
        <h3>Color</h3>
        {["Blue","Pink","Green","Teal","Black","White","Purple"].map(c => (
          <label key={c}>
            <input
              type="checkbox"
              checked={filters.color.includes(c)}
              onChange={() => toggle("color", c)}
            />
            {c}
          </label>
        ))}
      </div>

      {/* FLAKE */}
      <div className="filter-section">
        <h3>Flake</h3>
        {["Gold","Silver"].map(f => (
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
        <div className="filter-group">
        <label>Glitter</label>
        <div className="filter-options">
            {["Blue", "Silver", "Rose Gold"].map((g) => (
            <label key={g}>
                <input
                type="checkbox"
                checked={filters.glitter.includes(g)}
                onChange={(e) => {
                    if (e.target.checked) {
                    setFilters({ ...filters, glitter: [...filters.glitter, g] });
                    } else {
                    setFilters({
                        ...filters,
                        glitter: filters.glitter.filter((x) => x !== g),
                    });
                    }
                }}
                />
                {g}
            </label>
            ))}
        </div>
        </div>


        {/* CHAIN */}
        <div className="filter-group">
        <label>Chain</label>
        <div className="filter-options">
            {["Golden", "Silver"].map((c) => (
            <label key={c}>
                <input
                type="checkbox"
                checked={filters.chain.includes(c)}
                onChange={(e) => {
                    if (e.target.checked) {
                    setFilters({ ...filters, chain: [...filters.chain, c] });
                    } else {
                    setFilters({
                        ...filters,
                        chain: filters.chain.filter((x) => x !== c),
                    });
                    }
                }}
                />
                {c}
            </label>
            ))}
        </div>
        </div>


        {/* TASSLE */}
        <div className="filter-group">
        <label>Tassle</label>
        <div className="filter-options">
            {["Golden", "Silver", "Red", "Light Pink", "Black", "Green", "Purple"].map((t) => (
            <label key={t}>
                <input
                type="checkbox"
                checked={filters.tassle.includes(t)}
                onChange={(e) => {
                    if (e.target.checked) {
                    setFilters({ ...filters, tassle: [...filters.tassle, t] });
                    } else {
                    setFilters({
                        ...filters,
                        tassle: filters.tassle.filter((x) => x !== t),
                    });
                    }
                }}
                />
                {t}
            </label>
            ))}
        </div>
        </div>


        {/* HANDLE */}
        <div className="filter-group">
        <label>Handle</label>
        <div className="filter-options">
            {["Golden", "Silver", "Epoxy"].map((h) => (
            <label key={h}>
                <input
                type="checkbox"
                checked={filters.handle.includes(h)}
                onChange={(e) => {
                    if (e.target.checked) {
                    setFilters({ ...filters, handle: [...filters.handle, h] });
                    } else {
                    setFilters({
                        ...filters,
                        handle: filters.handle.filter((x) => x !== h),
                    });
                    }
                }}
                />
                {h}
            </label>
            ))}
        </div>
        </div>

    </div>
  );
}

