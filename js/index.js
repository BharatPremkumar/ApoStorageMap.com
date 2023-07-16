const btn = document.getElementById("btn");
let count = 0;

let img = new Image();
img.src = "image/oslo.jpg";
img.style.width = "80%";
img.style.height = "50%";
img.style.padding = "10%";
document.getElementById("osloIMG").appendChild(img);
img.style.display = "none";

btn.addEventListener("click", addImg);

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
