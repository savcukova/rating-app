// number, that you clicked on
const rating = document.querySelectorAll(".nums .num");

// submit button 
const submitButton = document.querySelector(".submit-button");

const rateSection = document.querySelector(".rate");
const selectedSection = document.querySelector(".selected");

// write selected number
const selectedRating = document.querySelector("#num-select");

let selectedRatingStore = null;

// choose number -> click submit -> see result 

rating.forEach(button => {
    button.addEventListener("click", (event) =>{
        rating.forEach(btn => btn.classList.remove("active"));

        event.target.classList.add("active");

        selectedRatingStore = event.target.textContent;
    });
});

submitButton.addEventListener("click", () => {
    if (selectedRatingStore){
        rateSection.classList.add("none");
        selectedSection.classList.remove("none");

        selectedRating.textContent = selectedRatingStore;
    };
})