let count = 0;

const display = document.querySelector(".display");
const addBtn = document.getElementById("number");
const subBtn = document.getElementById("operator");
const resetBtn = document.getElementById("reset");

// initial value
display.textContent = count;




addBtn.addEventListener("click", () => {
  if(count==10)
    display.textContent = "Limit Exceeded";
  else
  count++;
  display.textContent = count;
});


subBtn.addEventListener("click", () => {
if(count>0)
{
  count--;
  display.textContent = count;
}
});


resetBtn.addEventListener("click", () => {
  count = 0;
  display.textContent = count;
});


