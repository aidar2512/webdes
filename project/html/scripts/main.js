const MyHeading = document.querySelector("h1");
const imgElement = document.querySelector("img");

const img1 = "img/Alatoo.png";
const img2 = "img/jjk.jpg";
function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1){
        imgElement.setAttribute("src",img2);
    } else {
        imgElement.setAttribute("src", img1)
    }
}
imgElement.onclick = changePhoto;