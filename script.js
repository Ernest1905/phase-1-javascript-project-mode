const signUpBtn = document.querySelector('.signup-btn');
const formContainer = document.querySelector('#form-container');

signUpBtn.addEventListener('click', (event) => {
  event.preventDefault(); // prevent form submission behavior
  
  const form = document.createElement('form');
  
  const nameLabel = document.createElement('label');
  nameLabel.textContent = "Name:";
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.id = 'name';

  
  const emailLabel = document.createElement('label');
  emailLabel.textContent = "Email:";
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.id = 'email';
  
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = "Submit";
  
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(submitBtn);
  
  formContainer.appendChild(form);

  // Add submit event listener to the form
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent form submission behavior
    
    // Get the input values from the form
    const name = nameInput.value;
    const email = emailInput.value;
    
    // Do something with the input values, e.g. send them to a server via AJAX
    console.log(`Name: ${name}, Email: ${email}`);
    
    // Hide the form
    formContainer.removeChild(form);
  });
});
const baseUrl = `http://localhost:3000/houses `
fetch(baseUrl)
 .then((res)=> res.json())
 .then((data) => {
    renderHouses(data)
 }
 )
 .catch((err)=>console.log('error', err))

 function renderHouses(houses) {
    let houseList = document.getElementById('properties')

    houses.forEach((house) => {
        console.log(house);
        let display = document.createElement('div')
        let houseImg = document.createElement('img')
        houseImg.src = house.image_link
        let location = document.createElement('h6')
        location.textContent=house.location
        let space= document.createElement('h6')
        space.textContent=house.bedrooms
        let price = document.createElement('h6')
        price.textContent=house.rent_per_month
        let owner= document.createElement('h6')
        owner.textContent=house.landlord
        let details =document.createElement('h6')
        details.textContent=house.landlord_phone

        
        display.appendChild(houseImg)
        display.appendChild(location)
        display.appendChild(space)
        display.appendChild(price)
        display.appendChild(owner)
        display.appendChild(details)
        
        houseList.appendChild(display)
    });
}

    
