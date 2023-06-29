
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
  ol.id = "array_ol";
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
  // Bubble sort
  for (let i = 0; i < maxValue; i++) {
    for (let j = 0; j < maxValue -i -1; j++) {
      if (randomArray[j] > randomArray[j + 1]) {
        let aux = randomArray[j];
        randomArray[j] = randomArray[j+1];
        randomArray[j+1] = aux; 
        updateDOM(j);
      }
    }
  }
}

function updateDOM(j) {
  let ol = document.getElementById("array_ol"); 
  let ele1 = ol.getElementsByTagName('li')[j];
  let ele2 = ol.getElementsByTagName('li')[j+1];
  let ele1Val = ele1.style.width;
  let ele2Val = ele2.style.width;
  ele1.style.width = ele2Val;
  ele2.style.width = ele1Val;
}

