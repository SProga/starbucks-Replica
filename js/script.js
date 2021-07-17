openCity(null, "twenty-five");
function openCity(evt, cityName) {
  let i, tab_content, tab_links, f;
  f = document.getElementById("start");
  f.classList.remove("active");
  tab_content = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tab_content.length; i++) {
    tab_content[i].style.display = "none";
  }
  tab_links = document.getElementsByClassName("tablinks");
  for (i = 0; i < tab_links.length; i++) {
    tab_links[i].className = tab_links[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt ? (evt.currentTarget.className += " active") : null;
  if (!evt) {
    f.className = " active";
  }
}

const s = document.getElementById("starcode");
let m = document.querySelector(".message");
let sp = document.querySelector(".special-message");
const validation = /^\d{8}$/;
let s_img = document.createElement("IMG");

s.addEventListener("blur", function (e) {
  const val = e.target.value;
  const isValid = validation.test(val);
  if (isValid) {
    s.classList.add("success");
    s.classList.remove("error");
    s_img.src = "./imgs/check.png";
    m.appendChild(s_img);
    sp.innerHTML = `<img class="success-icon" src='./imgs/success.png' alt="success"><small class="success-message">Looks good!</small>`;
  } else {
    s.classList.add("error");
    s.classList.remove("success");
    s_img.src = "./imgs/alarm.png";
    m.appendChild(s_img);
    sp.innerHTML = `<img class="error-icon" src='./imgs/close.png' alt="error occured"><small class="error-message">you must enter an 8 digit number</small>`;
  }
});

const bsubmit = document.querySelector(".btn--submit");
bsubmit.addEventListener("click", () => {
  setTimeout(() => {
    s.classList.remove("error", "success");
  }, 2000);
});
