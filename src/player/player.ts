type Card = {
    number: number;
    mark: string;
}

export class Player{
    
    protected name: string = "Player";
    protected handCards: Card[] = [];
    protected handBets: number[] = [];
    protected sumNumber: number = 0;
    protected sumBet: number = 0;
    protected isBust: boolean = false;
    protected playerState: string = ""; // "wait" or "play"


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

    // 手札を取得する 
    public getHandCards(): Card[]{
        return this.handCards;
    }

    // 手札の合計値を計算する
    public calSumNumber(){
        let sum: number = 0;
        this.handCards.forEach((card) => {
            sum += card.number
        })
        this.sumNumber = sum
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

    // バースト状況を入れる
    public setBust(result: boolean){
        this.isBust = result
    }

    // バースト状況を返す
    public getBust(): boolean{
        return this.isBust
    }

    // Player状況を入れる
    public setPlayerStateID(playerState :string){
        this.playerState = playerState
    }

    // Player状況を取得する
    public getPlayerStateID(): string {
        return this.playerState
    }

}




