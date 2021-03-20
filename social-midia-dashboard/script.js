const toggler = document.getElementById("toggler-circle");

const togglerbg = document.getElementById("toggler");

const body = document.body;

toggler.addEventListener("click", function () {
    if (body.classList.contains("dark")) {
        body.classList.replace("dark", "light");
        toggler.style.transform = "tanslateX(20px)";
    } else {
        body.classList.replace("light","dark");
        toggler.style.transform = "translateX(0)";
     }
    });


