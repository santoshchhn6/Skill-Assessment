const fs = require("fs");
const path = require("path");

const convertMDToJSON = () => {
  const file = path.join(__dirname, "./MD_Files/React.md");

  fs.readFile(file, "utf8", (err, data) => {
    if (err) throw err;

    const questions = [];
    //split all questions by "####"
    let str = data.split("####");

    //exracting heading
    let heading = str[0].trim().slice(3).split(".")[0];
    console.log(heading);

    //start index from 1
    for (let i = 1; i < str.length; i++) {
      let wholeQuestion = [];
      let question = "";
      let code = "";
      let options = [];
      let correctOptionIndex = 0;

      // Extract question
      // Split text by "new line"
      wholeQuestion = str[i].split(/\ns*\n/);

      question = wholeQuestion[0];
      question = question.slice(question.indexOf(".") + 2);

      code = wholeQuestion.length > 3 ? wholeQuestion[1] : null;
      code =
        code && code.startsWith("```")
          ? code.slice(code.indexOf("\n") + 1, code.lastIndexOf("\n") + 1)
          : code;
      code = code && code.startsWith("`") ? code.slice(1, -1) : code;

      options = wholeQuestion.length > 3 ? wholeQuestion[2] : wholeQuestion[1];
      options = options.split("\n").map((line, index) => {
        if (line.startsWith("- [x")) correctOptionIndex = index;
        // split line by first instance of "]"
        return line.split(/](.*)/s)[1];
      });

      let newQuestion = {
        question,
        code,
        options,
        correctOptionIndex,
      };
      questions.push(newQuestion);
    }

    // write file in data folder
    fs.writeFile(
      "./data/" + heading + ".json",
      JSON.stringify(questions),
      (err) => {
        if (err) throw err;
      }
    );
  });
};

convertMDToJSON();
