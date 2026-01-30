import "../styles/global.css";

export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
  // We list the categories in an array to make the code cleaner and easier to manage
  const categories = [
    { id: "all", label: "All" },
    { id: "keychain", label: "Keychains" },
    { id: "bookmark", label: "Bookmarks" },
    { id: "phonestand", label: "Phone Stands" },
    { id: "kitchenware", label: "Kitchenware" },
    { id: "others", label: "Others" },
  ];

  return (
    <nav className="choices">
      <div className="drop2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            // If this button matches the selected category, add the 'active' class
            className={selectedCategory === cat.id ? "active" : ""}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </nav>
  );
}