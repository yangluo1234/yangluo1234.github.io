const topHeading = document.querySelector("h1");
console.log(topHeading);
console.log(topHeading.textContent);
topHeading.textContent = "New Heading";
topHeading.style.color = "blue";

const firstPara = document.querySelector("p");
console.log(firstPara);
console.log(firstPara.textContent);
firstPara.textContent = "New first paragraph text";

const mySection = document.querySelector("section");
console.log(mySection);
let myNewContent = `
<h2>this is an image of a cat</h2>
<p>do you like it?</p>`;
mySection.innerHTML = myNewContent;

const h2Heading = document.querySelector("#second-heading");
console.log(h2Heading);
console.log(h2Heading.textContent);

const allParas = document.querySelectorAll("p");
console.log(allParas);
for (let i = 0; i < allParas.length; i++) {
  //allParas[i].textContent = "Paragraph " + (i + 1) + " text changed";
  //allParas[i].style.backgroundColor = "green";
  allParas[i].classList.add("para-style");
  console.log("Para", i + 1, allParas[i].textContent);
}

const allAnothers = document.querySelectorAll(".another");
console.log(allAnothers);

for (let i = 0; i < allAnothers.length; i++) {
  console.log("Another", i + 1, allAnothers[i].textContent);
}

function toggleMe() {
  const myImg = document.querySelector("img");
  console.log(myImg);
  myImg.classList.toggle("round");
}
