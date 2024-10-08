document.addEventListener("DOMContentLoaded", function () {
    const menuOpener = document.querySelector(".menu-opener");
    const menu = document.querySelector(".menu nav");
    const menuItems = document.querySelectorAll(".menu nav a"); // Seleciona todos os links do menu

    // Adiciona o evento de clique no botão de menu
    menuOpener.addEventListener("click", function () {
        // Alterna a classe 'active' para mostrar ou ocultar o menu
        menu.classList.toggle("active");
    }); 

    // Adiciona o evento de clique em cada item do menu
    menuItems.forEach((item) => {
        item.addEventListener("click", function () {
            // Remove a classe 'active' para fechar o menu
            menu.classList.remove("active");
        });
    });

    // O restante do seu código
    const projectItems = document.querySelectorAll(".project-item img");
    const overlay = document.querySelector(".project-overlay");
    const overlayImage = document.getElementById("enlarged-image");
    const descriptionDiv = overlay.querySelector(".description");
    const closeBtn = overlay.querySelector(".close-btn");

    projectItems.forEach((item) => {
        item.addEventListener("click", function () {
            const projectDescription = this.parentElement.querySelector(
                ".project-description"
            );
            const linkUrl = this.dataset.link;

            overlay.style.display = "flex";
            overlayImage.src = item.src;

            descriptionDiv.innerHTML = projectDescription.innerHTML;

            const linkElement = descriptionDiv.querySelector("a");
            linkElement.href = linkUrl;
        });
    });

    closeBtn.addEventListener("click", function () {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });

    var typed = new Typed(".text", {
        strings: ["Desenvolvedor Front-end"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
