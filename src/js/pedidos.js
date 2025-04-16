const select = document.getElementById('sallerSelect');
const input = document.getElementById('nameSaller');

select.addEventListener("change", function() {
    input.value = this.value;
})