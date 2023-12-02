


document.addEventListener("DOMContentLoaded", function() {
  const createStar = () => {
      const star = document.createElement("div");
      star.classList.add("star");

      // Random position, size, and color
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      const size = Math.random() * 3;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      const colors = ['#fff', '#ffe9c4', '#d4fbff'];
      star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      // Append the star to the body
      document.body.appendChild(star);

      // Fade-in effect
      setTimeout(() => star.style.opacity = 1, 100);

      // Schedule fade-out effect at a random time
      setTimeout(() => {
          star.style.opacity = 0;
          // Remove the star after it fades out
          setTimeout(() => document.body.removeChild(star), 2000);
      }, Math.random() * 5000 + 7000); // Fade out between 5 to 12 seconds
  };

  const addStar = () => {
      createStar();
      // Schedule the next star creation
      setTimeout(addStar, Math.random() * 1000); // New star every 0 to 1 second
  };

  // Start adding stars
  addStar();

  // ... existing bao animation code ...
});



document.addEventListener("DOMContentLoaded", function() {
  const baoContainer = document.getElementById("bao");
  let scaleWidth = 1.0;
  let scaleHeight = 1.0;
  let growing = true;
  const cycleDuration = 2800; // 2 seconds per cycle
  const changeRate = 0.001; // Increment scale by 0.01

  setInterval(() => {
      if (growing) {
          scaleWidth += changeRate;
          scaleHeight -= changeRate;
          if (scaleWidth >= 1.02) growing = false;
      } else {
          scaleWidth -= changeRate;
          scaleHeight += changeRate;
          if (scaleWidth <= 0.98) growing = true;
      }

      baoContainer.style.transform = `scaleX(${scaleWidth}) scaleY(${scaleHeight})`;
  }, cycleDuration / 50); // Divide cycle duration by number of steps (50 in this case)
});



