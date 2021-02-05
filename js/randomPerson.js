// variable and track element
const baseUrl = 'https://randomuser.me/api/';
const genBtn = getElement('gen-btn');

// add event listener
genBtn.addEventListener('click',updateData);

// function

function updateData(){
    fetch(baseUrl)
        .then(response => response.json())
        .then(data =>{
            const user = data.results[0];
            // upade img
            getElement('person-img').src = user.picture.large;
            getElement('person-img').alt = user.name.last;

            // update name
            updateName(user.name);

            // update personal info
            updatePersonal(user.dob,user.gender);

            // update address
            updateAddress(user.location);

            // update contacts
            updateContacts(user.phone,user.email);
        })
        .catch(error=>{
            console.log(error);
        })
}


function updateName(user){
    getElement('person-name').innerText = `${user.title} ${user.first}`;
    getElement('person-full-name').innerText  = `${user.title} ${user.first} ${user.last}`;

    // object type
    /**
     * {
     * title : 'title',
     * first : 'first name',
     * last : 'last name'
     * }
     */
}

function updatePersonal(dob,gender){
    getElement('person-gender').innerText = gender[0].toUpperCase() + gender.split('').slice(1).join('');
    getElement('person-birth').innerText = getBirthDay(dob.date.split('').slice(5,10).join(''));
    getElement('person-age').innerText = dob.age;
}

function getElement(elementId){
    return document.getElementById(elementId);
}

function getBirthDay(date){
    const month = ['Jan','Feb','Mar','Apr','May','Jon','Jol','Aug','Sep','Oct','Nov','Dec'];
    const monthIndex = parseInt(date.slice(0,2))-1;
    return date.slice(3) +month[monthIndex];
}

function updateAddress(location){
    getElement('person-city').innerText = location.city;
    getElement('person-country').innerText = location.country;
    getElement('person-postcode').innerText = location.postcode;
    getElement('person-state').innerText = location.state;
}

function updateContacts(phone,email){
    getElement('person-phone').innerText = phone;
    getElement('person-email').innerText = email;
}
// calling function
updateData();
