import "./FloatingPetals.css";

function FloatingPetals() {
  return (
    <div className="petals-container">
      {Array.from({ length: 20 }).map((_, index) => (
        <span
          key={index}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
}

export default FloatingPetals;