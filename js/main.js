let img = document.getElementById("img")
let imags = document.querySelectorAll(".icons .img")
let container = document.querySelector(".container")


for (let i = 0; i < imags.length; i++) {
  imags[i].addEventListener("click", function (e) {
    var imgSrc = e.target.getAttribute("src")
    img.src = imgSrc;

    var color = e.target.style.color;
    container.style.backgroundColor = color;





  })
}







