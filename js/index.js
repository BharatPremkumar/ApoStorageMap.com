const btn = document.getElementById("btn");
const btn2 = document.getElementById("genInfo");
const btn3 = document.getElementById("close");
const modal = document.getElementById("myModal");
let count = 0;

let img = new Image();
img.src = "image/oslo.jpg";
img.style.width = "80%";
img.style.height = "50%";
img.style.padding = "10%";
img.style.borderRadius = "10px";
document.getElementById("osloIMG").appendChild(img);
img.style.display = "none";

btn.addEventListener("click", addImg);
btn2.addEventListener("click", addModule);
btn3.addEventListener("click", closeModal);

function addImg() {
  count++;
  if (count % 2 == 0) {
    btn.innerHTML = "View oslo locations";
    img.style.display = "none";
  }
  if (count % 2 != 0) {
    btn.innerHTML = "Close image";
    img.style.display = "block";
  }
}

function addModule() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
