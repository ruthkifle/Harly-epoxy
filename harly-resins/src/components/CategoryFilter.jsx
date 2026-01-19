export default function CategoryFilter({ categories, onSelect }) {
  return (
    <div className="choices">
      {categories.map((cat) => (
        <button key={cat} onClick={() => onSelect(cat)}>{cat}</button>
      ))}
    </div>
  );
}
