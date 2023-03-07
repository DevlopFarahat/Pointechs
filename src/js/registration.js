
class Registration{

        userFormOne;
        userFormTwo;

        showRestaurantDataForm(adminDataForm){
            adminDataForm.style.display = "none";
        }
        hideRestaurantDataForm(adminDataForm){
            adminDataForm.style.display = "block";
        }

}
let registration = new Registration();

let nextBtn = document.querySelector("#admin-data-next");
let previousBtn = document.querySelector("#restaurant_data_previous");
let submitBtn = document.querySelector("#submit_btn");
let adminDataForm = document.querySelector(".admin-data");
let restaurantDataForm = document.querySelector(".restaurant-data");
nextBtn.addEventListener('click',()=>{
    registration.showRestaurantDataForm(adminDataForm);
    restaurantDataForm.classList.remove("restaurant-data-hide");
})
previousBtn.addEventListener('click',()=>{
    restaurantDataForm.classList.add("restaurant-data-hide");
    registration.hideRestaurantDataForm(adminDataForm);
})