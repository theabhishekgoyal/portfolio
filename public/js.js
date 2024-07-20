$(document).ready(function() {
    $(window).scroll(function() {
        // Sticky navbar on scroll
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Show/hide scroll-up button
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll-up button click event
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll on menu items click
    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation
    new Typed(".typing", {
        strings: ["Developer", "Programmer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["Developer", "Programmer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

// Filter projects based on category
function filterSelection(category) {
    var projects = document.getElementsByClassName("project-column");

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var categories = project.className.split(" ");
        var shouldShow = category === "all" || categories.indexOf(category) > -1;
        project.style.display = shouldShow ? "block" : "none";
    }
}

// Initially show all projects
filterSelection("all");

// Add class utility function
function w3AddClass(element, name) {
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Remove class utility function
function w3RemoveClass(element, name) {
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.experience-item');
    const buttons = document.querySelectorAll('.toggle-btn');

    // Reveal items with animation on page load
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 300); // Staggered animation
    });

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const details = this.nextElementSibling;

            if (details.classList.contains('show')) {
                details.classList.remove('show');
                this.textContent = 'See Details';
            } else {
                details.classList.add('show');
                this.textContent = 'Hide Details';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.menu-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Adjust scroll position for fixed header
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust 80px to match header height
                behavior: 'smooth'
            });
        });
    });
});
