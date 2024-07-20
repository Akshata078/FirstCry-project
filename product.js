
let checkPincode = document.querySelector(".check-pincode");

checkPincode.addEventListener("click", () => {
    let pincodeInput = inputVal.value.trim();

    pincodeError.classList.remove("pincode-error");
    pincodeError.classList.remove("display-pincode");

    if (pincodeInput.length !== 6) {
        pincodeError.textContent = "PIN code must be 6 digits long";
        pincodeError.classList.add("display-pincode");
        return;
    }

    for (let i = 0; i < pincodeInput.length; i++) {
        if (pincodeInput[i] < '0' || pincodeInput[i] > '9') {
            pincodeError.textContent = "PIN code must contain only digits";
            pincodeError.classList.add("display-pincode");
            return;
        }
    }
    pincodeError.textContent = "";
});



let sortprod = document.querySelector(".left-container");

function fetchJSONFile() {
    fetch('data.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let newData = data.GirlKids;

            newData.forEach((item) => {
                 console.log(item)


                sortprod.innerHTML =
                    `<div class="img-block">
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src=${item.image} alt="" class="swiper-slide-img"></div>
        <div class="swiper-slide"><img src=${item.image} alt="" class="swiper-slide-img"></div>
        <div class="swiper-slide"><img src=${item.image} alt="" class="swiper-slide-img"></div>
        <div class="swiper-slide"><img src=${item.image} alt="" class="swiper-slide-img"></div>
        <div class="swiper-slide"><img src=${item.image} alt="" class="swiper-slide-img"></div>
    </div>
    <div class="swiper-btn-next"></div>
    <div class="swiper-btn-prev"></div>
</div>
<div class="product-img-wrap">
    <div class="prod-img"><img src=${item.image} alt=""></div>
    <div class="prod-btn">
        <div class="add-to-cart-btn">
            <button>ADD TO CART</button>
        </div>
        <div class="shortlist-btn">
            <button>SHORTLIST</button>
        </div>
    </div>
</div>
</div>`
            })
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}

fetchJSONFile();














