/*
Rules of the game: https://en.wikipedia.org/wiki/Klondike_(solitaire)
Glossary of patience terms: https://en.wikipedia.org/wiki/Glossary_of_patience_terms#T

1 Tableau is comprised of seven Piles (aka Depots)

Remaining cards form the Stock (aka Talon), a facedown pile where cards are drawn from.

Objective of the game is to complete the 4 Foundation piles from Ace to King,
each pile containing all of the cards for one suit.

Cards are drawn from the Stock and form the Waste pile. There are multiple variants
of the game that differ in how many cards at a time are drawn from the Stock, and 
how many times one is allowed to go through the entire set of cards in the Stock.
They include:

- 1 card at a time, once through the deck
- 1 card at a time, three times through the deck
- 1 card at a time, unlimited times through the deck
- 3 cards at a time, three times through the deck
- 3 cards at a time, unlimited times through the deck
*/

class Game {
    settings: GameSettings;
    duration: number;
}

class GameSettings {
    cardsPerDraw: 1 | 3;
    timesThroughDeck: 1 | 3 | "infinity";

    constructor(settings: {
        cardsPerDraw: 1 | 3;
        timesThroughDeck: 1 | 3 | "infinity";
    }) {
        this.cardsPerDraw = settings.cardsPerDraw;
        this.timesThroughDeck = settings.timesThroughDeck;
    }
}

enum Suit {
    Spades,
    Hearts,
    Clubs,
    Diamonds,
}

enum Rank {
    Ace,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
}

class Card {
    suit: Suit;
    rank: Rank;
}

class Stock {
    gameSettings: GameSettings;
    timesThroughDeck: number;
    cards: Card;

    draw() {
		
    }
}

class Waste {

}

class Tableau {
    depots: [Depot, Depot, Depot, Depot, Depot, Depot, Depot];

    constructor() {

    }
}

class Foundation {
    suit: Suit;
    cards: Card[];
    // foundation is a Stack, Last in First out

    topOfStack() {
        if (this.cards.length === 0) return null;
        return this.cards[this.cards.length - 1];
    }

    push(card: Card) {
        if (card.suit !== this.suit) return false;
        if (card.rank !== this.topOfStack().)
    }
}

class Depot {

}