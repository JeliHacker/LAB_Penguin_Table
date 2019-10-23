var PenguinPromise = d3.json("classData.json");


var classroom = [];//to be used in log only


PenguinPromise.then(
function(data)
{
    classroom = data;
    console.log("baller code bro", data);  
    
    AllGrades(data);
    console.log(AllGrades(data));
    //AllGrades(data);
    
    //makeTable(data);
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






//THE FUNCTION WHERE ALL THE MAGIC HAPPENS
var AllGrades = function(penguin)
{
    var demo = d3.select("#demo")
    var AllTotals = penguin.map(makeSummary);
    var showPictures = 
        d3.select("tbody")
        .selectAll("tr")
        .data(penguin)
        .enter()
        .append("tr")
    
    showPictures
    .append("img")
    .text(function(totals){
            // return makeSummary.picture;})
            return totals.picture
        })
        .attr("src", function(totals)
              {
                return "penguins/" + totals.picture
              })
    
    
    
    showPictures
    .append("td")
    .text(function(totals)
    {
        var getMeanQuiz = function(penguin)
        {
            var quizzes = penguin.quizes;
            var quizgrades = quizzes.map(getGrade)
            var meanQuizzes = d3.mean(quizgrades)
            return meanQuizzes;
        }
        return getMeanQuiz(totals);
    })
    
    
    
    
    
    
    
    
    
    //HOMEWORK AVERAGE
    showPictures
    .append("td")
    .text(function(totals)
         {
        var getMeanHomework = function(penguin)
{
    var homeworks = penguin.homework;
    var homeworkgrades = homeworks.map(getGrade)
    var meanHomework = d3.mean(homeworkgrades)
    return meanHomework;
}
        return getMeanHomework(totals);
    })
    //HOMEWORK AVERAGE
    
    
    
    //TEST AVERAGE
    showPictures
    .append("td")
    .text(function(totals)
         {
        
        var getMeanTests = function(penguin)
{
    var tests = penguin.test;
    var testGrades = tests.map(getGrade)
    var meanTest = d3.mean(testGrades)
    return meanTest;
}
        return getMeanTests(totals);
    })
    //TEST AVERAGE
    
    
    //FINAL GRADE
    showPictures
    .append("td")
    .text(function(totals)
    {
        var getFinal = function(penguin)
        {
            var final = penguin.final;
            var mappedFinal = final.map(getGrade)
            var meanFinal = d3.mean(mappedFinal)
            return meanFinal;
        }
        return getFinal(totals);
    })
    //FINAL GRADE
    
    
    
    
    //WEIGHTED FINAL GRADE
    showPictures
    .append("td")
    .text(function(totals)
         {
        var weightThisGrade1 = function(penguin)
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
       return weightThisGrade1(totals)
    })
    //WEIGHTED FINAL GRADE
    
    
    return AllTotals;
}
//END OF ALLGRADES



































//DRAFT CODE


var AllActualGrades = function(penguin)
{
    
        
        /*d3.select("tbody").append("tr")
        .selectAll("td")
        .data(penguin)
        .enter()
        .append("td")
        .text(function(totals)
            {
                // return makeSummary.picture;})
                var totals = AllTotals;
                return totals.meanQuiz
            })
    */
}
//why did this work???
