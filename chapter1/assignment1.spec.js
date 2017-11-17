// input only reccomand commendation

// *********** choice ************
// string, number, boolean, object
// *******************************

//example
var question = 16;
var answer = "number"; // input answer

// 1)
var question1 = 16 + 25;
var answer1 = ""; // input answer

// 2)
var question2 = "16" + 25;
var answer2 = ""; // input answer

// 3)
var question3 = 16 + "25";
var answer3 = ""; // input answer

// 4)
var question4 = {answer:16 + "25"};
var answer4 = ""; // input answer

// 5)
var question5 = 16+25 === 40+1;
var answer5 = ""; // input answer

// end test ingore on below









describe("Grading exams", function() {
    it("question 1", function() {
      expect(typeof(question1)).toEqual(answer1);
    });

    it("question 2", function() {
        expect(typeof(question2)).toEqual(answer2);
      });

      it("question 3", function() {
        expect(typeof(question3)).toEqual(answer3);
      });

      it("question 4", function() {
        expect(typeof(question4)).toEqual(answer4);
      });

      it("question 5", function() {
        expect(typeof(question5)).toEqual(answer5);
      });
  });
      
  
  