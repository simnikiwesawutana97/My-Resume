// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const button = document.getElementById('dark-mode'); // select the button

    // Function to toggle dark mode
    function toggleDarkMode() {
        body.classList.toggle("dark-mode");

        // Change the button text based on the current mode
        if (body.classList.contains("dark-mode")) {
            button.textContent = "Switch to Light Mode";
        } else {
            button.textContent = "Switch to Dark Mode";
        }
    }

    // Check if dark mode is enabled from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        button.textContent = "Switch to Light Mode";
    }

    // Add event listener to the button
    button.addEventListener("click", function () {
        toggleDarkMode();

        // Save the current theme to localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
