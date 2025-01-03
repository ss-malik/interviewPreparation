document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector("input").value;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://joke.deno.dev/type/general/${number}`, true);

  xhr.onload = function (e) {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = "";
      response.forEach(function (joke) {
        output += `
        <li>SETUP :  ${joke.setup}</li>
        <li>PUNCHLINE :  ${joke.punchline}</li>
        <br/> <hr/>
        `;
      });
      document.querySelector("#jokes").innerHTML = output;
    }
  };
  console.log(xhr);

  xhr.send();

  e.preventDefault();
}
