import "../styles/global.css";

export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <nav className="choices">
      <div className="drop2">

        <button onClick={() => onCategoryChange("all")}>All</button>
        <button onClick={() => onCategoryChange("keychain")}>Keychains</button>
        <button onClick={() => onCategoryChange("bookmark")}>Bookmarks</button>
        <button onClick={() => onCategoryChange("phonestand")}>Phone Stands</button>
        <button onClick={() => onCategoryChange("kitchenware")}>Kitchenware</button>
        <button onClick={() => onCategoryChange("other")}>Others</button>

      </div>
    </nav>
  );
}
