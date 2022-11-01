function carregarimagem(){

    var xmlhttprequest = new XMLHttpRequest();
    var url ="https://dog.ceo/api/breeds/image/random"

    xmlhttprequest.open('GET',url,true);

    xmlhttprequest.onreadystatechange = function () {
        if (xmlhttprequest.readyState == 3){
            console.log('carregando o conteudo');
        
    }
    if (xmlhttprequest.readyState == 4){

        var jsonresponse = JSON.parse(xmlhttprequest.responseText);

        console.log('requisiçao finalizada');
        console.log('resultado da requisiçao' + jsonresponse);
        console.log('resultado da requisiçao' + jsonresponse.message);

        var imgDog = document.getElementById('img_dog');
        imgDog.src =jsonresponse.message;

    }
    }

    xmlhttprequest.send(null);
}