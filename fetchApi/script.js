// track element 
const getBtn = document.getElementById('get-btn');
const sendBtn = document.getElementById('send-btn');
const baseUrl = 'http://localhost:3000/contacts';

// Add event listener 
getBtn.addEventListener('click',getData);
sendBtn.addEventListener('click',function(event){
    event.preventDefault();
    let data = {
        title : "Md Tazri",
        body : "mdtazri@gmail.com"
    }
    
    let jsonData = JSON.stringify(data);
    console.log(jsonData);
    fetch(baseUrl,{
        method : 'POST',
        body : jsonData,
        headers : {
            'Content-Type' : 'aplication/json; charset=UTF-8',
        }
    })
        .then(response=> response.json())
        .then(data=>{
            console.log(data);
        })
});

// function for work
function getData(){
    fetch(baseUrl)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            console.log(typeof data);
        })
}

