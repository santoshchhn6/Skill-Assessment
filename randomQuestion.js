const Questions = require("./data/React.json");

let previousIndex = [];

function getRandomQuestion() {
  let index = Math.floor(Math.random() * Questions.length);
  if (previousIndex.includes(index)) getRandomQuestion();
  previousIndex.push(index);
  return Questions[index];
}

for (let i = 0; i < 15; i++) {
  console.log(getRandomQuestion());
}
