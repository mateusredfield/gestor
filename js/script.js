
function logicaServico(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4){
            alert("testando de dentro do xhr");
            console.log("console log");
        }
    };
    xhr.open('GET', '../php/index.php');
    xhr.send();
}


document.addEventListener('readystatechange', event => { 
    if (event.target.readyState === "complete") {
    }
});

