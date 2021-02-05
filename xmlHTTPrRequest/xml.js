// track element 
const getBtn = document.getElementById('get-btn');
const sendBtn = document.getElementById('send-btn');
const getUrl = 'https://jsonplaceholder.typicode.com/posts/1';
const sendUrl = 'https://jsonplaceholder.typicode.com/posts'

function getData(){
    sendRequest(getUrl)
        .then(response => console.log(response));    
}

function sendData(){
    let dataSend = {
        title : 'I am the programmer.',
        body : 'This is not simple.',
        userId : 1
    }

    let jsonData = JSON.stringify(dataSend);
    // send request 
    sendRequest(sendUrl,'POST',jsonData)
        .then(response => console.log(response));
}

// addEventListener
getBtn.addEventListener('click',getData);
sendBtn.addEventListener('click',sendData);

// function for send request 
function sendRequest(url,method = 'GET',data){
    return new Promise(resolve =>{
        const xml = new XMLHttpRequest();
        xml.open(method,url);
        xml.responseType = 'json';
        xml.setRequestHeader('Content-Type','application/json');
        xml.send(data)
        xml.onload = function(){
            resolve({
                response : xml.response,
                status : xml.status
            });
        }
    })
}