// document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    // if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
    //     alert("hi 1");
    // }
    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
//     if (event.target.readyState === "complete") {
        
//     }
// });

//<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
function logicaServico(){
    //alert("testando")
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4){
            //document.getElementById('botaoServico').innerHTML = xhr.responseText;
            alert("testando de dentro do xhr");
            console.log("console log");
        }
    };
    xhr.open('GET', '../php/index.php');
    xhr.send();
    //     $.ajax({url:"../php/index.php", success:function(){
    //         alert("testando")
    //     }
    // })
}


document.addEventListener('readystatechange', event => { 
    if (event.target.readyState === "complete") {
        //alert("testando")
    }
});

