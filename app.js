var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block"; // Show the skills section
    }
    else {
        skills.style.display = "none"; // Hide the skills section
    }
});
