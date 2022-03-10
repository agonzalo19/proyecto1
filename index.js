//crear funcion para hacer fetch conseguir datos del post

async function getPost(){
    const res= await fetch ("http://localhost:3000/posts");
    const finalRes = await res.json();
    showPost(finalRes);
}

// Pintar la respuesta del fetch

function showPost(myData){
    const title1 = document.querySelector ("#card1 h4");
    const paragraph1 = document.querySelector ("#card1 p");
    const title2 = document.querySelector ("#card2 h4");
    const paragraph2 = document.querySelector ("#card2 p");
    const title3 = document.querySelector ("#card3 h4");
    const paragraph3 = document.querySelector ("#card3 p");
    
    title1.innerHTML = myData[0].title;
    paragraph1.innerHTML = myData[0].description;
    title2.innerHTML = myData[1].title;
    paragraph2.innerHTML = myData[1].description;
    title3.innerHTML = myData[2].title;
    paragraph3.innerHTML = myData[2].description;
   console.log(myData);
}
getPost()



