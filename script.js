function pageLoad() {
    let root = document.getElementById("root");
    let myObjects = [
       { 
        tag: "h1",
        content: "Dorina"
       },
       {
           tag: "p",
           content: "Frontend Developer"
       }

    ];
    //console.log(myObjects);

    /*for ( let i = 0; i < myObjects.length; i++) {

    }*/


    console.log(myObjects.length);


    for (myObject of myObjects) {

         root.insertAdjacentHTML("beforeend", `
            <${myObject.tag}>${myObject.content}</${myObject.tag}>
        `);

    //console.log(myObject.tag);

    }
root.addEventListener("click", function() {
 root.classList.toggle("clicked");
});

}
window.addEventListener("load", pageLoad);