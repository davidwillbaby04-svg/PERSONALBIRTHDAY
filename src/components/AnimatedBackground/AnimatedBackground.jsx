import "./AnimatedBackground.css";

function AnimatedBackground() {
  return (
    <div className="animated-bg">

      <div className="moon"></div>

      <div className="stars">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

    </div>
  );
}

export default AnimatedBackground;