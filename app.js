
const minValue = 0;
const maxValue = 10;
let randomArray;
const arrayContainer = document.getElementById("arrayContainer");
document.getElementById("create_btn").addEventListener("click", () => { randomArray = createRandomArray(); });
document.getElementById("sort_btn").addEventListener("click", sortArray);

function createRandomArray() {
  event.preventDefault(); // Random array de arraySize
  const arraySize = document.getElementById("size_input").value;
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
  return randomArray;
}


function sortArray() {
  console.log("SORTARRAY!!!!!!!!");
  console.log(randomArray);
  // Bubble sort
  console.log(randomArray);
  for (let i = 0; i < maxValue; i++) {
    for (let j = 0; j < maxValue -i -1; j++) {
      if (randomArray[j] > randomArray[j + 1]) {
        let aux = randomArray[j];
        randomArray[j] = randomArray[j+1];
        randomArray[j+1] = aux; 
      }
    }
  }
  console.log(randomArray);
}

