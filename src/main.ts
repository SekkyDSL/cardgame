import Phaser from "phaser";

const config = {
  parent: document.getElementById("game"),
};


// カードの情報 確定
type mark = "spade" | "heart" | "diamond" | "club"
type surface = "front" | "back"
type Card = {
  number: number;
  mark: mark;
  surface: surface;
}
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


// プレイヤーの情報 BlackJack用
type action = "wait" | "hit" | "stand" // betが追加されるかも
class Player{
  protected name: string = "Player"; // プレイヤー名
  protected handCards: Card[] = []; // 手札
  protected handBets: number[] = []; // ベット
  protected sumNumber: number = 0; // 手札の合計
  protected sumBet: number = 0; // ベットの合計
  protected isBust: boolean = false; // バーストしたかどうか
  protected playerState: action = "wait"; // プレイヤーの状態

  constructor(name: string){
      this.name = name;
  }

  // 名前をセットする
  public setName(name: string){
      this.name = name;
  }

  // 名前を取得する
  public getName(): string{
      return this.name;
  }

  // 手札を1枚セットする
  public setHandCard(cards: Card){
      this.handCards.push(cards);
  }

  // 手札を複数枚セットする
  public setHandCards(cards: Card[]){
      this.handCards = cards;
  }

  // cardListからランダムにカードを1枚取得する ただし、cardListからは削除する
  public getHandCards(cardList: Card[]): Card {
      const randomIndex = Math.floor(Math.random() * cardList.length);
      const card = cardList[randomIndex];
      cardList.splice(randomIndex, 1);
      return card;
  }

  // 手札の合計値を計算する
  public calSumNumber(){
      let sum: number = 0;
      this.handCards.forEach((card) => {
        //10以上の場合は10として計算する
        if(card.number >= 10){
            sum += 10;
        }
        //そのほかはそのまま足す
        else{
            sum += card.number;
        }
      }
      )
      this.sumNumber = sum;
  }

  // 手札の合計を返す
  public getSumNumber(): number{
      return this.sumNumber
  }

  // ベットを追加する
  public setBet(bet: number){
      this.handBets.push(bet)
  }

  // ベットの合計を計算する
  public calSumBet(){
      let sum: number = 0;
      this.handBets.forEach((bet) => {
          sum += bet
      })
      this.sumBet = sum
  }

  // ベットの合計を返す
  public getSumBet(): number{
      return this.sumBet
  }

  // バーストしているかどうかを計算し，isBustに入れる
  public calBust(){
      if(this.sumNumber > 21){
          this.isBust = true
      }
      else{
          this.isBust = false
      }
  }

  // バースト状況を返す
  public getBust(): boolean{
      return this.isBust
  }

  // Player状況を入れる
  public setPlayerStateID(playerState :action){
      this.playerState = playerState
  }

  // Player状況を取得する
  public getPlayerStateID(): action{
      return this.playerState
  }
}




























