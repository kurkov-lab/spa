let app = angular.module("bmiModule", []);

app.controller('bmi', function bmi() {
    this.mass = 0;
    this.height = 0;
   
    this.bmiResult = 0;

    this.calculate = function calculate() {
        console.log("IS THIS WORKING??");
        this.bmiResult = mass / (height * height);
    }
});
