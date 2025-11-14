document.addEventListener("DOMContentLoaded", () => {

    const API_URL = "https://script.google.com/macros/s/AKfycbwHZaMaQujdjlAoWDhfJHrRF8c6xkH9BxkLzRgbA_7emhWO1ohIShtN9GXDtZK7TDhqaw/exec";

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const profileImg = document.getElementById("profile-img");

    fetch(API_URL)
        .then(r => r.json())
        .then(imageMap => {

            // FOTO DE PERFIL
            if (imageMap["perfil.jpg"]) {
                profileImg.src = imageMap["perfil.jpg"];
            }

            // PROYECTOS
            document.querySelectorAll(".info-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    const id = btn.dataset.project;
                    const posible = [
                        id + ".jpg",
                        id + ".png",
                        id + ".jpeg"
                    ];

                    let encontrado = null;
                    for (let n of posible) {
                        if (imageMap[n.toLowerCase()]) {
                            encontrado = imageMap[n.toLowerCase()];
                            break;
                        }
                    }

                    if (!encontrado) {
                        alert("Imagen no encontrada para " + id);
                        return;
                    }

                    modalImg.src = encontrado;
                    modal.style.display = "block";
                });
            });
        });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
});
