

class Bank{
	constructor(bank_name){
		this.bank_name = bank_name;
		this.all_accounts = {};
		//takes in the name of the bank.
		//makes an object to store all accounts into
	}
	makeAccount(accountNum ){
		if(this.all_accounts[accountNum]){
			return false;
		}
		else {
			this.all_accounts[accountNum] = new Account ();
			return this.all_accounts[accountNum];
		}
		//makes an account
		//takes in the account number of an account
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns fals
		//otherwise makes an new Account object
		//returns the Account object that was constructed
	}
	checkForAccount( accountNum ){
		if(this.all_accounts[accountNum]){
			return true;
		}
		else{
			return false;
		}
		//checks if an account exists or not
		//takes in the account number of an account
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
	}
	removeAccount( accountNum ){
		if(!this.all_accounts[accountNum]){
			return `account ${accountNum} does not exist`;
		}
		else if(this.all_accounts[accountNum].amountOfMoney > 0){
			return "account is not empty";
		}
		else{
			delete this.all_accounts[accountNum];
			return `account ${accountNum} deleted`;
		}
		
		//removes an account
		//takes in an account number
		//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
			//'account is not empty'
		//otherwise deletes the account from the constructor storage
		//returns 
			'account <accountNumber> deleted'

	}
	deposit( accountNum , depositValue ){
		if(!this.all_accounts[accountNum]){
			return "account does not exist";
		}
		else {
			let newAmount = this.all_accounts[accountNum].add(depositValue);
			return `account ${accountNum} now has ${newAmount}`
		}
		//deposits money into an account
		//takes in an account number and a numeric amount
		//if the account doesn't exist, returns
			//'account does not exist'
		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>
	}
	withdraw( accountNumber, amount ){
		if(!this.all_accounts[accountNumber]){
			return "account does not exist";
		}
		else {
			let removedAmount = this.all_accounts[accountNumber].remove(amount);
			let newAmount = this.all_accounts[accountNumber].getAmount();
			return `removed ${removedAmount} from account ${accountNumber}. It now has ${newAmount}`;
		}
		//removes money from an account
		//takes in an account number and an amount
		//checks if the account exists, if not
			//return 'account does not exist'
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
	}
}