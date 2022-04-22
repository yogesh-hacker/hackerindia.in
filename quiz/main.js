const quizData = [  
  {  
   question: "A webpage displays a picture. What tag was used to display that picture?",  
   a: "picture",  
   b: "image",  
   c: "img",  
   d: "src",  
   correct: "c",  
  },
  {  
   question: "<b> tag makes the enclosed text bold. What is other tag to make text bold?",  
   a: "strong",  
   b: "dar",  
   c: "black",  
   d: "emp",  
   correct: "a",  
  },  
  {  
   question: "Tags and test that are not directly displayed on the page are written in _____ section.",  
   a: "<html>",  
   b: "<head>",  
   c: "<body>",  
   d: "<title",  
   correct: "b",  
  },  
  {  
   question: "Which tag inserts a line horizontally on your web page?",  
   a: "<hr>",  
   b: "<line>",  
   c: "<line direction='horizontal'", 
   d: "<tr>",  
   correct: "a",  
  },  
  {  
   question: "What should be the first tag in any HTML document?",  
   a: "<head>",  
   b: "<title>",  
   c: "<html>",  
   d: "<document>",  
   correct: "c",  
  },
  {  
   question: "Which tag allows you to add a row in a table?",  
   a: "<td> and </td>",  
   b: "<cr> and </cr>",  
   c: "<th> and </th>",  
   d: "<tr> and </tr>",  
   correct: "d",  
  },
    {  
   question: "How can you make a bulleted list?",  
   a: "<list>",  
   b: "<nl>",  
   c: "<ol>",  
   d: "<ul>",  
   correct: "d",  
  },
  {  
   question: "How can you make a numbered list?",  
   a: "<dl>",  
   b: "<ol>",  
   c: "<list>",  
   d: "<ul>",  
   correct: "b",  
  },
  {  
   question: "How can you make an e-mail link?",  
   a: "<a href = 'xxx@yyy'>",  
   b: "<mail href = 'xxx@yyy'>",  
   c: "<mail> xxx@yyy </mail >",  
   d: "<a href = 'mailto:xxx@yyy'>",  
   correct: "d",  
  },
  {  
   question: "What is the correct HTML for making a hyperlink?",  
   a: "<a href='https://ABC.com'>click</a>",  
   b: "<a name='https://ABC.com'>click</a>",  
   c: "<a>https://ABC.com</a>",  
   d: "<a url='http://ABC.com'>click</a>",  
   correct: "a",  
  }, 
  {  
   question: "Choose the correct HTML tag to make a text italic",  
   a: "<i>",  
   b: "<italic>",  
   c: "<ii>",  
   d: "<italics>",  
   correct: "a",  
  },
  {  
   question: "Choose the correct HTML tag to make a text bold?",  
   a: "<bold>",  
   b: "<b>",  
   c: "<bolds>",  
   d: "<bi>",  
   correct: "b",  
  },
  {  
   question: "What is the correct HTML for adding a background color?",  
   a: "bgcolor = 'red'",  
   b: "bodycolor = 'red'",  
   c: "backgroundcolor = 'red'",  
   d: "background = 'red'",  
   correct: "a",  
  },
  {  
   question: "Choose the correct HTML tag for the smallest size heading?",  
   a: "<h7>",  
   b: "<h5>",  
   c: "<h6>",  
   d: "<h9>",  
   correct: "c",  
  },
  {  
   question: "What is the correct HTML tag for inserting a line break?",  
   a: "<lb>",  
   b: "<br>",  
   c: "<line>",  
   d: "<enter>",  
   correct: "b",  
  },
  {  
   question: "What does vlink attribute mean?",  
   a: "very good link",  
   b: "virtual link",  
   c: "active link",  
   d: "visited link",  
   correct: "d",  
  },
  {  
   question: "Which attribute is used to name an element uniquely?",  
   a: "id",  
   b: "class",  
   c: "name",  
   d: "None of the above",  
   correct: "a",  
  },
  {  
   question: "Which tag creates a check box for a form in HTML?",  
   a: "<input type='checkbox'>",  
   b: "<checkbox>",  
   c: "<input = checkbox>",  
   d: "<input checkbox>",  
   correct: "a",  
  },
  {  
   question: "To create a combo box (drop down box) which tag will you use?",  
   a: "<select>",  
   b: "<list>",  
   c: "<input type='combobox'",  
   d: "<combobox>",  
   correct: "c",  
  },
  {  
   question: "Which of the following is not a pair tag?",  
   a: "<br>",  
   b: "<u>",  
   c: "<i>",  
   d: "<img>",  
   correct: "d",  
  },
  {  
   question: "To create HTML document you require a",  
   a: "Editor",  
   b: "Computer",  
   c: "Video Player",  
   d: "Python",  
   correct: "a",  
  },
  {  
   question: "The special formatting codes in HTML document used to present content are",  
   a: "tags",  
   b: "attributes",  
   c: "values",  
   d: "None",  
   correct: "a",  
  },
  {  
   question: "HTML documents are saved in",  
   a: "Machine language codes",  
   b: "Binary codes",  
   c: "ACSII",  
   d: "None",  
   correct: "c",  
  },
  {  
   question: "Some tags enclose the text. Those tags are known as",  
   a: "Couple tags",  
   b: "Single tags",  
   c: "Double tags",  
   d: "Pair tags",  
   correct: "d",  
  },
  {  
   question: "The _____ character tells browsers to stop tagging the text",  
   a: "$",  
   b: "/",  
   c: "@",  
   d: ">",  
   correct: "b",  
  },
  {  
   question: "HTML language's inventor was",  
   a: "Time Berners Lee",  
   b: "J.K William",  
   c: "John Dalton",  
   d: "Hector Barbosa",  
   correct: "a",  
  },
  {  
   question: "Marquee is a tag in HTML to",  
   a: "Scrolling effect",  
   b: "Mark the list",  
   c: "Mark the text",  
   d: "None",  
   correct: "a",  
  },
  {  
   question: "There are ____ different of heading tags in HTML",  
   a: "4",  
   b: "5",  
   c: "6",  
   d: "7",  
   correct: "c",  
  },
  {  
   question: "How many rating do you give to this HTML quiz ?",  
   a: "1",  
   b: "2",  
   c: "5",  
   d: "4",  
   correct: "c",  
  },
  {  
   question: "CSS is stand for",  
   a: "Cascading Style Select",  
   b: "Cascading Style Services",  
   c: "Cascading Style Sheets",  
   d: "Cascading Sheet Styles",  
   correct: "c",  
  },
  {  
   question: "The way the browser displays the object can be modified by _____",  
   a: "CSS",  
   b: "JavaScript",  
   c: "Minecraft",  
   d: "Python",  
   correct: "a",  
  },
  {  
   question: "Which of the following CSS code is valid?",  
   a: "*{}",  
   b: "*[]",  
   c: "*()",  
   d: "*<>",  
   correct: "a",  
  },
  {  
   question: "Which of the following is an style related to color?",  
   a: "outline-color: ;",  
   b: "border-color: ;",  
   c: "RGB()",  
   d: "bgcolor: ;",  
   correct: "c",  
  },
  {  
   question: "CSS latest version",  
   a: "3",  
   b: "4",  
   c: "2",  
   d: "1",  
   correct: "a",  
  },
  {  
   question: "Outline used for_____",  
   a: "set or remove outline",  
   b: "change outline style",  
   c: "add outline",  
   d: "None",  
   correct: "b",  
  },
  {  
   question: "Which is the correct code",  
   a: "@import()",  
   b: "%import()",  
   c: "&import()",  
   d: "None",  
   correct: "a",  
  },
  {  
   question: "Which of the following is a valid alignment?",  
   a: "align: top;",  
   b: "text-align: bottom;",  
   c: "align-items: right;",  
   d: "align: right;",  
   correct: "c",  
  },
  {  
   question: "Which color code is correct for black",  
   a: "RGB(0,255,200)",  
   b: "#FFFFFF",  
   c: "#000000",  
   d: "#F0F0F0",  
   correct: "c",  
  },
  {  
   question: "Which is an universal mark ?",  
   a: "*",  
   b: "+",  
   c: "#",  
   d: ".",  
   correct: "b",  
  },
  {  
   question: "Which is invalid for class",  
   a: ".class1",  
   b: ".class2",  
   c: "#class5",  
   d: ".class8",  
   correct: "c",  
  },
  {  
   question: "Which special character used for id ?",  
   a: "*",  
   b: "#",  
   c: ".",  
   d: "@",  
   correct: "b",  
  },
  {  
   question: "How many color defination in css",  
   a: "2",  
   b: "9",  
   c: "7",  
   d: "3",  
   correct: "d",  
  },
  {  
   question: "Which is the correct color format",  
   a: "#0000",  
   b: "#000",  
   c: "#white",  
   d: "None",  
   correct: "b",  
  },
  {  
   question: "Who is the inventor of CSS ?",  
   a: "Håkon Wium Lie",  
   b: "Brendan Eich",  
   c: "Guido van Rossum",  
   d: "Tim Berners Lee",  
   correct: "a",  
  },
  {  
   question: "Which of the following is the correct syntax for referring the external style sheet?",  
   a: "<style src = example.css>",  
   b: "<style src = 'example.css>'",  
   c: "<stylesheet>example.css<stylesheet>",  
   d: "<link rel='stylesheet' href='style.css'/>",  
   correct: "d",  
  },
  {  
   question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",  
   a: "a{text-decoration: underline}",  
   b: "a{text-decoration: no-underline}",  
   c: "a{text-decoration: none}",  
   d: "None",  
   correct: "c",  
  },
  {  
   question: "The CSS property used to specify whether the text is written in the horizontal or vertical direction?",  
   a: "writing-mode",  
   b: "word-break",  
   c: "text-decoration",  
   d: "None",  
   correct: "a",  
  },
  {  
   question: "Which of the following property is used as the shorthand property for the padding properties?",  
   a: "padding-left",  
   b: "padding-right",  
   c: "padding",  
   d: "All of the above",  
   correct: "c",  
  },
  {  
   question: "Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?",  
   a: "text-transform: capital;",  
   b: "text-style: capital",  
   c: "transform: capitalize",  
   d: "text-transform: capitalize",  
   correct: "d",  
  },
  {  
   question: "The CSS property used to specify the transparency of an element is -",  
   a: "clearfix",  
   b: "opacity",  
   c: "transparency",  
   d: "overlay",  
   correct: "b",  
  },
  
 ];  
 
 
 
 
 const quiz = document.getElementById("quiz");  
 const answerElements = document.querySelectorAll(".answer");  
 const questionElement = document.getElementById("question");  
 const a_text = document.getElementById("a_text");  
 const b_text = document.getElementById("b_text");  
 const c_text = document.getElementById("c_text");  
 const d_text = document.getElementById("d_text");  
 const submitButton = document.getElementById("submit");  
 let currentQuiz = 0;  
 let score = 0;  
 const deselectAnswers = () => {  
  answerElements.forEach((answer) => (answer.checked = false));  
 };  
 const getSelected = () => {  
  let answer;  
  answerElements.forEach((answerElement) => {  
   if (answerElement.checked) answer = answerElement.id;  
  });  
  return answer;  
 };  
 const loadQuiz = () => {  
  deselectAnswers();  
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;  
  a_text.innerText = currentQuizData.a;  
  b_text.innerText = currentQuizData.b;  
  c_text.innerText = currentQuizData.c;  
  d_text.innerText = currentQuizData.d;  
 };  
 loadQuiz();  
 submitButton.addEventListener("click", () => {  
  const answer = getSelected();  
  if (answer) {  
   if (answer === quizData[currentQuiz].correct) score++;  
   currentQuiz++;  
   if (currentQuiz < quizData.length) loadQuiz();  
   else {
      setTimeout( 100000);
        var Body = 'Name: Sakina' + '<br>' + 'Total Score' + score;
            // Sending Email
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "yogeshkumarjamre1@gmail.com",
                Password : "77A2553C0EB68FD27C237938AC5EAF675F0D",
                SecureToken: "9951f9e5-be2c-4a6d-bd0e-58e5f88b1c4d",
                To: 'yogeshkumarjamre1@gmail.com',
                From: "yogeshkumarjamre1@gmail.com",
                Subject: "New message:",
                Body : Body})
    quiz.innerHTML = `  
       <h2>Thanks for playing this quiz.<br>You will get your result within 3 hours</h2>  
       <button onclick="window.location.replace('https://www.hackerindia.ml')">Go to Home</button>  
     ` // location.reload() won't work in CodePen for security reasons;  
   }  
  }  
 });
