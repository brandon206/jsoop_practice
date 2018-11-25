

class Account{
	constructor(){
		this.amountOfMoney = null;
		this.withdrawAmount = null;
		//store the amount of money in the account
	}
	add( amount ){
		if(typeof amount === "number"){
			let updatedAmountOfMoney = this.amountOfMoney += amount;
			return updatedAmountOfMoney;
		}
		//add money to the amount stored in the account
		//takes in an amount
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( amount ){
		if(amount > this.amountOfMoney){
			this.withdrawAmount = this.amountOfMoney;
			this.amountOfMoney -= this.withdrawAmount;
		}
		else {
			this.withdrawAmount = amount;
			this.amountOfMoney -= this.withdrawAmount;
		}
		return this.withdrawAmount;
		//removes funds from an account
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.amountOfMoney;
		//returns the amount in the account
	}
}