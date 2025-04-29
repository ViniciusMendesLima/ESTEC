export function setGreeting() {
    const greeting = document.querySelector(".greet");
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 0 && hour < 12) {
        greeting.innerHTML = "Bom Dia";
    } else if (hour >= 12 && hour < 18) {
        greeting.innerHTML = "Boa Tarde";
    } else {
        greeting.innerHTML = "Boa Noite";
    }
}