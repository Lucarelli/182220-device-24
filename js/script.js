  var link = document.querySelector(".write-us-btn");
  var popup = document.querySelector(".modal-write-us");
  var close = popup.querySelector(".modal-close");
  var yourName = popup.querySelector("[name=your-name]")
  var form = popup.querySelector("form");
  var email = popup.querySelector("[name=email]");
  var message = popup.querySelector("[name=message]");
  var mapLink = document.querySelector(".map-link");
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");


  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    document.getElementById("overlay").style.display = "block";
    popup.classList.add("modal-show");
    yourName.focus();
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    document.getElementById("overlay").style.display = "none";
  });

  form.addEventListener("submit", function (evt) {
    if (!yourName.value || !email.value || !message.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      popup.classList.remove("modal-error");
      }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.add("modal-error");
        document.getElementById("overlay").style.display = "none";
      }
    }
  });

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    document.getElementById("overlay").style.display = "block";
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    document.getElementById("overlay").style.display = "none";
  });

  window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
        document.getElementById("overlay").style.display = "none";
      }
    }
  });
