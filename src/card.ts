// カードの情報 確認用


type mark = "spade" | "heart" | "diamond" | "club"

type surface = "front" | "back"

type Card = {
  number: number;
  mark: mark;
  surface: surface;
}

const cardsImage = "../public/assets/card/cards.png";
const cardsPsd  = "../public/assets/card/cards.psd";



const cardinfo ={
  cardheight: 334,
  cardwidth: 440,
  cardScale: 0.5,
}
const cardList: Card[] = [
  {number: 1, mark: "spade", surface: "front"},
  {number: 2, mark: "spade", surface: "front"},
  {number: 3, mark: "spade", surface: "front"},
  {number: 4, mark: "spade", surface: "front"},
  {number: 5, mark: "spade", surface: "front"},
  {number: 6, mark: "spade", surface: "front"},
  {number: 7, mark: "spade", surface: "front"},
  {number: 8, mark: "spade", surface: "front"},
  {number: 9, mark: "spade", surface: "front"},
  {number: 10, mark: "spade", surface: "front"},
  {number: 11, mark: "spade", surface: "front"},
  {number: 12, mark: "spade", surface: "front"},
  {number: 13, mark: "spade", surface: "front"},
  {number: 1, mark: "heart", surface: "front"},
  {number: 2, mark: "heart", surface: "front"},
  {number: 3, mark: "heart", surface: "front"},
  {number: 4, mark: "heart", surface: "front"},
  {number: 5, mark: "heart", surface: "front"},
  {number: 6, mark: "heart", surface: "front"},
  {number: 7, mark: "heart", surface: "front"},
  {number: 8, mark: "heart", surface: "front"},
  {number: 9, mark: "heart", surface: "front"},
  {number: 10, mark: "heart", surface: "front"},
  {number: 11, mark: "heart", surface: "front"},
  {number: 12, mark: "heart", surface: "front"},
  {number: 13, mark: "heart", surface: "front"},
  {number: 1, mark: "diamond", surface: "front"},
  {number: 2, mark: "diamond", surface: "front"},
  {number: 3, mark: "diamond", surface: "front"},
  {number: 4, mark: "diamond", surface: "front"},
  {number: 5, mark: "diamond", surface: "front"},
  {number: 6, mark: "diamond", surface: "front"},
  {number: 7, mark: "diamond", surface: "front"},
  {number: 8, mark: "diamond", surface: "front"},
  {number: 9, mark: "diamond", surface: "front"},
  {number: 10, mark: "diamond", surface: "front"},
  {number: 11, mark: "diamond", surface: "front"},
  {number: 12, mark: "diamond", surface: "front"},
  {number: 13, mark: "diamond", surface: "front"},
  {number: 1, mark: "club", surface: "front"},
  {number: 2, mark: "club", surface: "front"},
  {number: 3, mark: "club", surface: "front"},
  {number: 4, mark: "club", surface: "front"},
  {number: 5, mark: "club", surface: "front"},
  {number: 6, mark: "club", surface: "front"},
  {number: 7, mark: "club", surface: "front"},
  {number: 8, mark: "club", surface: "front"},
  {number: 9, mark: "club", surface: "front"},
  {number: 10, mark: "club", surface: "front"},
  {number: 11, mark: "club", surface: "front"},
  {number: 12, mark: "club", surface: "front"},
  {number: 13, mark: "club", surface: "front"},
];
