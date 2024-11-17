fetch(url, {
    method: "post",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
}
)
.then((response) =>{
    if(response.status === 200){
        return response.json();
    }else if(response.status === 400){
        throw "unsuccessful";
    }else{
        throw "something went wrong";
        }
    
})
.then((resJson) => {
    alert(resJson[""] + " has been added");
})
.catch((error) => {
    alert(error);
})