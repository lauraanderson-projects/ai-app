function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Hello World",
    autoStart: true,
    cursor: "",
  });
}

let poemGeneratorElement = document.querySelector("#poem-generator");
poemGeneratorElement.addEventListener("submit", generatePoem);
