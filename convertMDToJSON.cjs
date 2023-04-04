const fs = require("fs");
const path = require("path");

const convertMDToJSON = () => {
  const file = path.join(__dirname, "./src/data/MD_Files/React.md");

  fs.readFile(file, "utf8", (err, data) => {
    if (err) throw err;

    const questions = [];
    let str = data.split("\n");

    let heading = "";
    let optionIndex = 0;
    let question = "";

    let code = "";
    let readingCode = false;
    let firstLine = false;

    let options = [];
    let correctOptionIndex = 0;

    //reading data line by line
    for (let i = 0; i < str.length; i++) {
      // console.log(str[i]);

      if (str[i].startsWith("## ")) {
        heading = str[i].split(" ")[1].split(".")[0];
        // console.log(heading);
      }

      if (str[i].startsWith("#### ")) {
        if (question) {
          let newQuestion = {
            question,
            code,
            options,
            correctOptionIndex,
          };
          questions.push(newQuestion);

          question = "";
          code = "";
          options = [];
          correctOptionIndex = 0;
        }
        question = str[i].slice(str[i].indexOf(".") + 2);

        // console.log(question);
      }

      if (str[i].startsWith("- [")) {
        if (str[i].startsWith("- [x")) {
          correctOptionIndex = optionIndex;
          console.log(correctOptionIndex);
        }
        options.push(str[i].slice(6));
        optionIndex = optionIndex + 1 <= 3 ? optionIndex + 1 : 0;
        // console.log(options);
      }

      if (str[i].startsWith("```")) {
        if (!readingCode) {
          readingCode = true;
          firstLine = true;
        } else {
          readingCode = false;
          console.log(code);
        }
      }

      if (readingCode) {
        if (!firstLine) code += str[i] + "\n";
        firstLine = false;
      }

      if (str[i].startsWith("`") && str[i].endsWith("`") && str[i].length > 3)
        code = str[i];
    }
    //read remaind last one
    let newQuestion = {
      question,
      code,
      options,
      correctOptionIndex,
    };
    questions.push(newQuestion);

    console.log(questions);

    // write file in data folder
    fs.writeFile(
      "./src/data/data/" + heading + ".json",
      JSON.stringify(questions),
      (err) => {
        if (err) throw err;
      }
    );
  });
};

convertMDToJSON();
