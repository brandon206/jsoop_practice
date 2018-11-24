
class Calculator{
	constructor(){
		this.operator = "";
		this.number1 = null;
		this.number2 = null;
		//takes in nothing
		//make storage for the operator and the numbers
	loadOperator( operator ){
		if( operator === "+" || operator === "-" || operator === "*" || operator === "/"){
			this.operator = operator;
			return true;
			}
		else{
			return false;
			}
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
	}
	loadNumber( number ){
		if (typeof number === "number" && (this.number1 === null || this.number2 === null) ){
			let lengthOfNumber1 = null;
			let lengthOfNumber2 = null;
			if(this.number1 === null && this.number2 === null){
				this.number1 = number;
				lengthOfNumber1 = this.number1.toString().length;
				return lengthOfNumber1;
			}
			else if(this.number1 !== null && this.number2 === null){
				this.number2 = number;
				lengthOfNumber2 = this.number2.toString().length;
				lengthOfNumber1 = this.number1.toString().length;
				return (lengthOfNumber2 + lengthOfNumber1);
			}
		}
		else {
			// if(typeof number === "number"){
			// 	let lengthOfNumber = number.toString().length;
			// 	return lengthOfNumber;
			// }
			return false;
		}
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(){
		switch(this.operator){
			case "+":
				const add_result = this.number1 + this.number2;
				this.number1 = null;
				this.number2 = null;
				return add_result;
				break;
			case "-":
				const sub_result = this.number1 - this.number2;
				this.number1 = null;
				this.number2 = null;
				return sub_result;
				break;
			case "*":
				const multi_result = this.number1 * this.number2;
				this.number1 = null;
				this.number2 = null;
				return multi_result;
				break;
			case "/":
				const div_result = this.number1 / this.number2;
				this.number1 = null;
				this.number2 = null;
				return div_result;
				break;
			default: 
				return "not a valid operation";
		}
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
	}
}