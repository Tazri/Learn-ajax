// track element 
const activityName = document.getElementById('activity-name');
const typeName = document.getElementById('type-name');
const participants = document.getElementById('participants');
const price = document.getElementById('price');
const link = document.getElementById('link');
const genBtn = document.getElementById('gen-btn');

// base api
const baseUrl = 'http://www.boredapi.com/api/activity/';

// update data function 
function updateData(){
    fetch(baseUrl)
        .then(response=> response.json())
        .then(data=>{
            activityName.innerText = data.activity;
            typeName.innerText = data.type;
            participants.innerText = data.participants;
            price.innerText = data.price;
            link.href = data.link;
        })
        .catch(error=> console.log(error));
}

// call updateData
updateData();

// Add even lisenter
genBtn.addEventListener('click',updateData);

// What data I receive from server
/**
 * {
 * activiy : 'something',
 * type : 'type of data',
 * participants : number,
 * price : price,
 * link : 'link'
 * }
 */