var PenguinPromise = d3.json("classData.json");


var classroom = [];//to be used in log only


PenguinPromise.then(
function(data)
{
    classroom = data;
    console.log("baller code bro", data);  
    makeSummary(data[0]);
    console.log(makeSummary(data[0]));
   //document.getElemenetById("demo").innerHTML =makeSummary(data[0]);
    console.log(AllGrades(data));
},
function(err)
{
  console.log("this code is bad", err);      
})



var makeSummary = function(penguin)
{   
    var summary = {};
    summary.picture = penguin.picture;
    summary.meanQuiz = getMeanQuiz(penguin);
    summary.meanHomework = getMeanHomework(penguin);
    summary.meanTests = getMeanTests(penguin);
    summary.final = getFinal(penguin);
    summary.totalGrade = weightThisGrade(penguin);
   
    return summary;
}



//get Grade function
var getGrade = function(quiz)
{
    return quiz.grade;
}

//average quiz grade for a given penguin function
var getMeanQuiz = function(penguin)
{
    var quizzes = penguin.quizes;
    var quizgrades = quizzes.map(getGrade)
    var meanQuizzes = d3.mean(quizgrades)
    return meanQuizzes;
}

//average homework grade for a given penguin function
var getMeanHomework = function(penguin)
{
    var homeworks = penguin.homework;
    var homeworkgrades = homeworks.map(getGrade)
    var meanHomework = d3.mean(homeworkgrades)
    return meanHomework;
}

var getMeanTests = function(penguin)
{
    var tests = penguin.test;
    var testGrades = tests.map(getGrade)
    var meanTest = d3.mean(testGrades)
    return meanTest;
}

var getFinal = function(penguin)
{
    var final = penguin.final;
    var mappedFinal = final.map(getGrade)
    var meanFinal = d3.mean(mappedFinal)
    return meanFinal;
}


var weightThisGrade = function(penguin)
{
    var QuizTotal = getMeanQuiz(penguin);
    var HomeworkTotal = getMeanHomework(penguin);
    var TestTotal = getMeanTests(penguin);
    var FinalTotal = getFinal(penguin);
    
    var weightedQuiz = .2 * QuizTotal;
    var weightedHomework = .15 * HomeworkTotal;
    var weightedTest = .3 * TestTotal;
    var weightedFinal = .35 * FinalTotal;
    
    var weightedGrade = weightedQuiz + weightedHomework + weightedTest + weightedFinal;
    
    return weightedGrade;
}

var AllGrades = function(penguin)
{
    var AllTotals = penguin.map(makeSummary);
    return AllTotals;
}
//why did this work???
