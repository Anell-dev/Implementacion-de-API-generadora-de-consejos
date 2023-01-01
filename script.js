const iconGenerateNewAdvice = document.querySelector(".container-img-qr");
const tarjeta = document.querySelector(".card");
const Myfooter = document.querySelector(".attribution");

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

iconGenerateNewAdvice.addEventListener("click", (e) => {
  tarjeta.classList.add("hide");
  Myfooter.classList.add("hide");
  fetchData();
});

const fetchData = async () => {
  try {
    loadingData(true);
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    PintarCard(data);
  } catch (error) {
  } finally {
    loadingData(false);
  }
};

const PintarCard = (data) => {
  const textId = document.querySelector("#id-span");
  const textQuote = document.querySelector("#quote");
  tarjeta.classList.remove("hide");
  Myfooter.classList.remove("hide");
  textId.textContent = `#${data.slip.id}`;
  textQuote.textContent = ` "${data.slip.advice}" `;
};

const loadingData = (estado) => {
  const loading = document.querySelector("#loading");
  if (estado) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};
