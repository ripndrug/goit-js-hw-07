const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener("input", handleInput);

function handleInput(e) {
    if (!e.target.value.trim()) {
       return output.textContent = "Anonymous";
    }
        output.textContent = e.target.value;
}