const fields = ["full-name", "birth-date", "email", "mobile-num", "gender", "occupation","idtype", "idnum", "birth-date", "authority", "issue-date", "issue-state","expiry-date"];
const outputDiv = document.getElementById("output");

fields.forEach(field => {
    document.getElementById(field).addEventListener("input", updateOutput);
});

function updateOutput() {
    outputDiv.innerHTML = ''; // Clear the output div

    fields.forEach(field => {
        const inputValue = document.getElementById(field).value;
        if (inputValue) {
            const p = document.createElement("p");
            p.classList.add("printedText")
            p.textContent = inputValue;
            outputDiv.appendChild(p);
        }
    });
}

























// const inputFields = document.getElementsByTagName('input'); // This gets a collection of all <input> elements
// const Labels = document.getElementsByTagName('label');
// var array = [];

// // Convert inputFields collection to an array and push each input field
// Array.from(inputFields).forEach((input) => {
//     array.push(input); // Push each input element into the array
// });

// // Now, add event listeners to each input element in the array
// array.forEach((input) => {
//     input.addEventListener('change', function(event) {
//         const inputValue = event.target.value;
//         const printedText=document.querySelector(".printed-text");
//         printedText.innerText=inputValue;
       
//     });
// });