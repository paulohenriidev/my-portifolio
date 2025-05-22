const form = document.querySelector("#form");
const mask = document.querySelector(".maskForm");
const about = document.querySelector(".aboutMe");

function sendMessage(event) {
  event.preventDefault();
  const nome = document.querySelector("#nome").value;
  const telefone = "5583993755772";
  const mensagem = document.querySelector("#mensagem").value;

  const text = `Olá, me chamo ${nome}, ${mensagem}`;
  const formtmensagem = encodeURIComponent(text);
  const url = `https://whatsa.me/${telefone}/?t=${formtmensagem}`;

  window.open(url, "_blank");
}

function clickedButton() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mask.style.visibility = "visible";
}

function hiddenmascara() {
  about.style.left = "-80%";
  about.style.transform = "translateX(0)";
  form.style.left = "-80%";
  form.style.transform = "translateX(0)";
  mask.style.visibility = "hidden";
}

function clickAbout() {
  about.style.left = "50%";
  about.style.transform = "translateX(-50%)";
  mask.style.visibility = "visible";
}
