// Add your code here
function submitData(userName, userEmail) {
return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com"
    })
})
.then(res => res.json())
.then(data => renderId(data))
 .catch(error => errorMessage(error))
}

function renderId(data) {
    document.body.innerHTML = data.id
} 

function errorMessage(error){
document.body.innerHTML = error.message
}
