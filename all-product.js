
let sortedProduct = document.querySelector(".sorted-product");
let accessoriesHeading = document.querySelector(".accessories-heading");

let inputVal = document.querySelector(".input-val");
let pincodeError = document.querySelector(".pincode-error");
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



// fetch api ---------------------------------------

function fetchJSONFile() {
    fetch('data.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data.GirlKids.length);
        let newData = data.GirlKids;

        accessoriesHeading.innerHTML = `
        Accessories<span class="quantity"> (${newData.length})</span>
        `

        
        newData.forEach((item)=>{
            
            // console.log(item)
            sortedProduct.innerHTML += 
            `
            <div class="item">
                <div>
                    <div class="item-image">
                        <a href="product.html"><img src=${item.image} alt="" class="item-img"></a>
                    </div>
                    <div class="item-name">
                        <p>${item.title}</p>
                    </div>
                    <div class="item-price">
                        <span> &#8377;${item.mrp}</span>
                        <span class="item-price-with-discount"> &#8377;${item.price}</span>
                        <span class="item-discount">(23% off)</span>
                    </div>
                    <div class="item-club-price">
                        <span class="club-price-logo"><img src="./images/club price logo.PNG" alt=""></span>
                        <span>Club Price :</span>
                        <span> &#8377;415.03</span>
                    </div>
                </div>
            </div>
            `

        })
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
  }

  fetchJSONFile();
  






  