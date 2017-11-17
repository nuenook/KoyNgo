// input only reccomand commendation

// ***********only 2 choices ************
//               true or false
// *******************************

//example
var question = 1 == 2;
var answer = false; // input answer

// 1)
var question1 = 5 + 7 == 10 + 2 || (2+2 == 4);
var answer1 = ; // input answer

// 2)
var question2 = 5 + 7 != 10 + 2 && 2+2 == 4;
var answer2 = ; // input answer

// 3)
var question3 = 33 + 33 != 66 || 22 == 11 + 11 && 0 == 5-5;
var answer3 = ; // input answer

// 4)
var question4 = "25" + 5 == 30 && 7 + 7 == 14;
var answer4 = ; // input answer

// 5)
var question5 = !!!!!!!!!(5 - 5 == 0);
var answer5 = ; // input answer

// end test ingore on below









describe("Grading exams", function() {
    it("question 1", function() {
      expect(question1).toEqual(answer1);
    });

    it("question 2", function() {
        expect(question2).toEqual(answer2);
      });

      it("question 3", function() {
        expect(question3).toEqual(answer3);
      });

      it("question 4", function() {
        expect(question4).toEqual(answer4);
      });

      it("question 5", function() {
        expect(question5).toEqual(answer5);
      });
  });
      
  
  