const tickboxes = document.querySelectorAll(".custom-checkbox");
const progressbar = document.querySelector(".progress-val");

let cnt2 = 0;
tickboxes.forEach((tickbox) => {
  let cnt = 0;
  let flag = 0;
  tickbox.addEventListener("click", () => {
    if (cnt == 0) {
      const newImage = document.createElement("img");
      newImage.src =
        "data:image/png;base64,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";
      newImage.style.width = "100%";
      newImage.style.height = "100%";
      cnt2++;
      cnt++;
      tickbox.appendChild(newImage);
      const inputtext = tickbox.parentElement.querySelector(".goal-input");
      if (inputtext) {
        inputtext.style.textDecorationLine = "line-through";
        inputtext.style.color = "green";
      }
    } else if (cnt == 1) {
      const inputtext = tickbox.parentElement.querySelector(".goal-input");
      if (inputtext) {
        inputtext.style.textDecorationLine = "none";
        inputtext.style.color = "black";
      }
      const image = tickbox.querySelector("img");
      if (image) {
        image.remove();

        if (cnt2) cnt2--;
      }
      cnt = 0;
    }
    const alerttext = document.querySelector(".alert-text");
    if (cnt2 >= 3) {
      alerttext.innerHTML = "";
    } else {
      alerttext.innerHTML = "Please set all the 3 goals!";
    }
    if (cnt2 <= 3) {
      progressbar.innerHTML = `${cnt2}/3 task done`;
      progressbar.style.width = `${(cnt2 / 3) * 100}%`;
      if (cnt2 == 0) progressbar.style.height = "0%";
      else progressbar.style.height = "100%";
    }
  });
});
