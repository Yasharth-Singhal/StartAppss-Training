let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    let value = button.innerText;

    if (value === "C") {
      display.value = "";
    }
    else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }
    else {
      display.value += value;
    }

  });
});
