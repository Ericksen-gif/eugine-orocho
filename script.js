// =========================================
// GREAT LANSBA REALTORS
// MOBILE NAVIGATION
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-navigation");

if (menuToggle && mainNavigation) {
    menuToggle.addEventListener("click", () => {
        mainNavigation.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
}


/* =========================================================
   GREAT LANSBA REALTORS - ABOUT PAGE
   MODERN INTERACTIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* -----------------------------------------------------
       SCROLL REVEAL
       ----------------------------------------------------- */

    const revealElements = document.querySelectorAll(
        ".about-section, .mission-section, .values-section, .leadership-section, .work-cta"
    );

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("about-visible");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {

        element.classList.add("about-reveal");

        revealObserver.observe(element);

    });


    /* -----------------------------------------------------
       IMAGE REVEAL
       ----------------------------------------------------- */

    const aboutImages = document.querySelectorAll(
        ".about-section img, .leadership-section img, .work-cta-image img"
    );

    const imageObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("about-image-visible");
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    aboutImages.forEach((image) => {

        image.classList.add("about-image-reveal");

        imageObserver.observe(image);

    });


    /* -----------------------------------------------------
       ANIMATED COMPANY STATISTICS
       ----------------------------------------------------- */

    const statNumbers = document.querySelectorAll(".stat-number");

    const statsObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const numberElement = entry.target;
                    const target = Number(numberElement.dataset.target);

                    const duration = 1800;
                    const startTime = performance.now();

                    function updateCounter(currentTime) {

                        const progress = Math.min(
                            (currentTime - startTime) / duration,
                            1
                        );

                        const current = Math.floor(progress * target);

                        numberElement.textContent = current;

                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            numberElement.textContent = target;
                        }

                    }

                    requestAnimationFrame(updateCounter);

                    observer.unobserve(numberElement);

                }

            });

        },
        {
            threshold: 0.6
        }
    );


    statNumbers.forEach((number) => {
        statsObserver.observe(number);
    });


    /* -----------------------------------------------------
       SCROLL PROGRESS BAR
       ----------------------------------------------------- */

    const progressBar = document.querySelector(".scroll-progress-bar");

    if (progressBar) {

        window.addEventListener("scroll", () => {

            const scrollTop = window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const scrollPercentage =
                (scrollTop / documentHeight) * 100;

            progressBar.style.width =
                scrollPercentage + "%";

        });

    }

});