// Total number of levels
const totalLevels = 30;

// Target the UL element
const levelsList = document.getElementById("levels-list");

// Generate levels dynamically
for (let i = 1; i <= totalLevels; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.textContent = `LEVEL ${i}`;
  a.href = `level${i}.html`;  // Example: level1.html, level2.html ...
  a.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default navigation
    alert(`You clicked Level ${i}! Redirecting...`);
    window.location.href = a.href; // Then go to the page
  });

  li.appendChild(a);
  levelsList.appendChild(li);
}
