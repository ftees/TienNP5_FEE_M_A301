
var index=0;
var myQuestions = [
  {
    question: "JavaScript is a...?",
    answers: {
      a: "Dog",
      b: "House",
      c: "Programming Language",
      d: "Handsome Boy"
    },
    correctAnswer: "c",
    userAnswer: " "
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      a: "Tag: <javascript>  ",
      b: "Tag: <scripting>",
      c: "Tag: <scriptp>",
      d: "Tag: <jsb>"
    },
    correctAnswer: "c",
    userAnswer: " "
  },
  {
    question: "Which of the following is the correct syntax to display “ABC” in an alert box using JavaScript?",
    answers: {
      a: "alertbox(“ABC”);",
      b: "msg(“ABC”);>",
      c: "msgbox(“ABC”);",
      d: "alert(“ABC”)"
    },
    correctAnswer: "a",
    userAnswer: " "
  },
  {
    question: "Which of the following is not a reserved word in JavaScript?",
    answers: {
      a: "interface ",
      b: "throws",
      c: "program",
      d: "short"
    },
    correctAnswer: "c",
    userAnswer: " "
  },
  {
    question: "What is the JavaScript syntax for printing values in Console?",
    answers: {
      a: "print(5)  ",
      b: "console.log(5)",
      c: "console.print(5)",
      d: "print.console(5)"
    },
    correctAnswer: "b",
    userAnswer: " "
  },
  {
    question: "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
    answers: {
      a: "strip()  ",
      b: "trim() ",
      c: "stripped() ",
      d: "trimmed()"
    },
    correctAnswer: "b",
    userAnswer: " "
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d",
    userAnswer: ""
  }
];

function getQuestion(i){
var x;
i= index;
var txt="";
var ansArr = [];
document.getElementById("ques").innerHTML="Question "+(index+1)+": "+myQuestions[index].question;
for(x in myQuestions[index].answers){
       txt +="<input type= radio name=question"+index+" value="+ x +"/>"+x+": "+myQuestions[index].answers[x]+"<br>";
};
document.getElementById("ans").innerHTML=txt;
var radios = document.getElementsByName("question"+index);

for (var i = 0 ; i < radios.length; i++) {
    if (radios[i].checked) {       
        myQuestions[index].userAnswer=radios[i];
        
    }
}
document.getElementById("result").innerHTML = (index+1) + ' out of ' + myQuestions.length;
document.getElementById("a").innerHTML=myQuestions[index].userAnswer;
};
getQuestion(0);

//myQuestions[index].userAnswer=document.querySelector("input[name=question"+index+"]:checked").value;
/*var resetAnswer = (id) => {
  if(myQuestions[id].userAnswer == ""){
      myQuestions.answers.forEach(check => check.checked = false);
  }else{
      answers.forEach(check => {
          if(check.value == myQuestions[id].userAnswer){
              check.checked = true;
          }
      })
  }
}*/
function fun1(){
    index = index-1;
    if(index<0){
      index = myQuestions.length-1;
    }
    if(index==myQuestions.length-1){
      document.getElementById("submit").style.visibility="visible";
    }else  document.getElementById("submit").style.visibility="hidden";
    getQuestion(index);
    
   
}
function fun2(){
    index = index+1;
    if(index>myQuestions.length-1){
      index=0;
    }  
    if(index==myQuestions.length-1){
      document.getElementById("submit").style.visibility="visible";
    }else  document.getElementById("submit").style.visibility="hidden";
    getQuestion(index);
    myQuestions[index].userAnswer=document.querySelector("input[name=question"+index+"]:checked").value;
     
}

function check(){
  var numCorrect = 0;
  
	for(var i=0; i<myQuestions.length; i++){
    
		if(myQuestions[i].userAnswer===myQuestions[i].correctAnswer){
      numCorrect++;
      	
    }
   // document.getElementById("result").innerHTML += myQuestions[i].userAnswer;
	}
  
 
}
