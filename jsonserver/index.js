// track element 
const getBtn = document.getElementById('get-data');
const sendBtn = document.getElementById('send-data');
const baseUrl = 'http://localhost:3000/contacts/';

function getData(){
    // send get request
    sendRequest(baseUrl)
        .then(response=>{
            console.log(response)
        })
}

// Add event Listener
getBtn.addEventListener('click',getData);
sendBtn.addEventListener('click',function(event){
    event.preventDefault();
    let data = {
        name : 'Md Tazri',
        email : 'mdtazri@gmail.com',
        
    }
    let jsonData = JSON.stringify(data);
    sendRequest(baseUrl,'POST',jsonData)
        .then(response=>{
            console.log(response);
        })
});

// sendRequest Data Funtion

function sendRequest(url,method = 'GET',jsonData){
    return new Promise(resolve=>{
        const xhr = new XMLHttpRequest();
        // prepare ajax request
        xhr.open(method,url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-type','application/json');
        xhr.send(jsonData);
        xhr.onload = function(){
            resolve({
                response : xhr.response,
                status : xhr.status
            })
        }
    })
}