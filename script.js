// ===============================
// Portfolio JavaScript
// ===============================


// 1. Smooth scrolling
document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// 2. Skills hover message
const skills = document.querySelectorAll(".skill");

skills.forEach(function(skill) {

    skill.addEventListener("click", function() {

        alert("You selected: " + this.textContent);

    });

});


// 3. Contact button
const contactButton = document.querySelector(".contact-btn");

if (contactButton) {

    contactButton.addEventListener("click", function() {

        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });

    });

}


// 4. Current year in footer
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// 5. Project card click
const projects = document.querySelectorAll(".project");

projects.forEach(function(project) {

    project.addEventListener("click", function() {

        this.classList.toggle("active");


        
    });


});

