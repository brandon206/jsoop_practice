
class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getsuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		this.set = [];
		//takes in nothing
		//make storage for your card objects
	}

	addCard( suite, faceValue ){
		let newCard = new Card (suite,faceValue);
		this.set.unshift(newCard);
		return this.set.length;
		//adds a card to the deck
		//takes in a string suit and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
	}
	shuffle(){
		let copyArray = this.set.slice(0);
		let shuffledArray = [];

		for(let i = 0; i < copyArray.length; i++){
			let randomIndex = Math.floor(Math.random * this.set.length);
			shuffledArray.push(copyArray[randomIndex]);
			copyArray.splice(copyArray[randomIndex],1);
		}
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
	}
	getCardCount(){
		return this.set.length;
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
	}

	dealCards( numberToDeal ){
		let copyArray = this.set.slice(0);
		let cardsRemoved = this.set.splice(0,numberToDeal);

		if(cardsRemoved > this.set.length){
			return;
		}
		else{
			return cardsRemoved;
		}
		
		//deals out a number of cards
		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it
		//cannot return more cards than the deck has
	}
}