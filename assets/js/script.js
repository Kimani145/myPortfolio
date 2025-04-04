// Theme Toggle with LocalStorage
const themeToggleButton = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon"); // Add an icon element inside your button

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || 
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", savedTheme); // Apply the saved or default theme
    updateThemeIcon(savedTheme); // Update the icon based on the saved theme
});

themeToggleButton?.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme); // Toggle the theme
    localStorage.setItem("theme", newTheme); // Save the new theme to localStorage
    updateThemeIcon(newTheme); // Update the icon
});

function updateThemeIcon(theme) {
    if (themeIcon) {
        themeIcon.textContent = theme === "light" ? "🌞" : "🌙"; // Sun for light, moon for dark
    }
}

// Greeting Based on Time of Day
const greeting = document.querySelector(".greeting");
if (greeting) {
    const now = new Date();
    const hours = now.getHours();
    let message = "Good Evening";
    let color = "purple";

    if (hours < 12) {
        message = "Good Morning";
        color = "orange";
    } else if (hours < 18) {
        message = "Good Afternoon";
        color = "blue";
    }

    greeting.textContent = message;
    greeting.style.color = color;
}

// Parallax Effect on Header
const header = document.querySelector("header");
if (header) {
    window.addEventListener("scroll", () => {
        header.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
    });
}

// Testimonial Rotation
const testimonials = [
    { quote: "An amazing experience. Their attention to detail is unmatched!", author: "Colleague" },
    { quote: "A great team player with a deep understanding of data annotation.", author: "Project Lead" },
    { quote: "Incredible work ethic! Would love to collaborate again!", author: "Hackathon Teammate" }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

const updateTestimonial = () => {
    const randomIndex = Math.floor(Math.random() * testimonials.length);
    if (quoteElement && authorElement) {
        quoteElement.style.opacity = 0;
        authorElement.style.opacity = 0;

        setTimeout(() => {
            quoteElement.innerText = testimonials[randomIndex].quote;
            authorElement.innerText = "- " + testimonials[randomIndex].author;
            quoteElement.style.opacity = 1;
            authorElement.style.opacity = 1;
        }, 500); // Delay to match fade-out duration
    }
};
setInterval(updateTestimonial, 5000); // Change quote every 5 seconds

// Form Validation
const form = document.querySelector("form");
const nameInput = document.querySelector("input[type='text']");
const emailInput = document.querySelector("input[type='email']");

form?.addEventListener("submit", (e) => {
    let isValid = true;
    
    if (!nameInput?.value.trim()) {
        alert("Name is required");
        isValid = false;
    }
    if (!emailInput?.value.includes("@")) {
        alert("Enter a valid email address");
        isValid = false;
    }
   
   
    
    if (!subjectInput?.value.trim()) {
        alert("Subject is required");
        isValid = false;
    }

     // Validate Phone
     const phonePattern = /^[0-9]{10}$/; // Example: 10-digit phone number
     if (!phonePattern.test(phoneInput?.value.trim())) {
         alert("Enter a valid 10-digit phone number");
         isValid = false;
     }
     if (!isValid) e.preventDefault();
});

// Weather API Integration with Geolocation
const weatherElement = document.querySelector(".weather");
if (weatherElement) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const apiKey = "155f03c084b94ca489f175257252201"; 
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=155f03c084b94ca489f175257252201&q=${lat},${lon}`;

            fetch(apiUrl)
                .then((response) => {
                    if (!response.ok) throw new Error("Failed to fetch weather data");
                    return response.json();
                })
                .then((data) => {
                    weatherElement.textContent = `It's ${data.current.temp_c}°C and ${data.current.condition.text}`;
                })
                .catch((error) => {
                    console.error(error);
                    weatherElement.textContent = "Weather data unavailable";
                });
        }, (error) => {
            console.error(error);
            weatherElement.textContent = "Location access denied. Weather data unavailable.";
        });
    } else {
        weatherElement.textContent = "Geolocation is not supported by this browser.";
    }
}
