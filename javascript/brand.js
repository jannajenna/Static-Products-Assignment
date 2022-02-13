const letters = "abcdefghijklmnopqrstuvwxyz";

const letterArray = letters.split("");

/* console.log(letterArray); */

letterArray.forEach(handleLetter);

function handleLetter(letter) {
  alphabetNav(letter);

  brandSection(letter);
}

function alphabetNav(letter) {
  const template = document.querySelector(".alphabettemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("a").textContent = letter;
  copy.querySelector("a").href = `#letter_${letter}`;
  document.querySelector(".alphabetLinks ol").appendChild(copy);
}

function alphabetNav(letter) {
  const template = document.querySelector(".brandtemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h2").textContent = letter;
  clone.querySelector("section").id = `letter_${letter}`;
  document.querySelector(".brandList").appendChild(clone);
}
