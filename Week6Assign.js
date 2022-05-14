class Deck {
    constructor() {
     this.cards = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13];

    }

dealCard() {
   let index = Math.floor(Math.random()*this.cards.length);
   let card = this.cards[index];
   this.cards.splice(index, 1);
   return card;
}

getCards(){
    return this.cards;
}
}

class Player {
    constructor() {
        this.cards = []; 
        this.points = 0;
    }

    addCard(card) {
        this.cards.push(card);
    }


    playCard() {
        return this.cards.pop();
    }

    addPoint() {
        this.points++;
    }
}


class Game {
    constructor () {
        this.player1 = new Player;
        this.player2 = new Player;
        this.deck = new Deck;
    }

    start () {
        for (let i = 0; i < 25; i++) {
           let card = this.deck.dealCard();
            this.player1.addCard(card);
            card = this.deck.dealCard();
           this.player2.addCard(card);
        }
        
        for (let i = 0; i < 25; i ++) {
           let player1Card = this.player1.playCard();
           let player2Card = this.player2.playCard();
            if (player1Card > player2Card) {
                this.player1.addPoint();
                console.log("Player 1 wins!");
            }
            else if(player1Card < player2Card) {
                this.player2.addPoint();
                console.log("Player 2 wins!");
            }
            else {
                console.log("Tie. No winner");
            }
            console.log(
                `
                Player 1: ${this.player1.points}
                Player 2: ${this.player2.points}
            `);
        } if(this.player1.points > this.player2.points) {
            console.log("Player 1 won the game");
        }
        else if(this.player1.points < this.player2.points) {
            console.log("Player 2 won the game.");
        }
        else {
            console.log("Tie game. No winner. Play again!");
        }
    }
}

let game = new Game;
game.start();
