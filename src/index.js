function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
  console.log(response.data.answer);
}

function generatePoem(event) {
  event.preventDefault();

  let poemSubject = document.querySelector("#poem-subject");

  let apiKey = "bd809658a5b50o74b7f3fe9fa5dft8a8";
  let context =
    "you are a writer who loves writing poems. your commision is to generate 5 line poem. each line of the poem should start on a new line using html format. example: Beneath the waves where secrets sigh,<br>The ocean breathes a lullaby,<br>With whispers of a distant shore. add a signature at the end with the topic entered.";
  let prompt = `Generate a poem based on the subject ${poemSubject.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = "Generating Poem...";

  axios.get(apiUrl).then(displayPoem);
}

let poemGeneratorElement = document.querySelector("#poem-generator");
poemGeneratorElement.addEventListener("submit", generatePoem);
