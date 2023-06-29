
const minValue = 0;
const maxValue = 10;
const arrayContainer = document.getElementById("arrayContainer");

document.getElementById("form_arraySize").addEventListener("submit", function() {
  event.preventDefault();
  

  // Random array de arraySize
  const arraySize = document.getElementById("input_arraySize").value;
 
  let randomArray = [];
  let ol = document.createElement("ol");
  for (let i = 0; i < arraySize; i++) {
    let randomNum = Math.floor(Math.random() * maxValue)
    randomArray.push(randomNum);
    let li = document.createElement("li");
    li.id = `li_${i}`;
    li.textContent = `${randomNum}`
    li.style.width = (randomNum / 10) * 100 + '%';
    ol.appendChild(li);
  }
  arrayContainer.appendChild(ol);
})


