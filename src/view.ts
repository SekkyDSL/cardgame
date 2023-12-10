// Viewの情報
type scene = null | "index" | "blackjack" | "result"
class View{
  protected scene: scene;
  protected FrameWidth: number;
  protected FrameHeight: number;
  protected FrameScale: number;
  protected Path: string;

  constructor(){
    this.scene = null;
    this.FrameWidth = 1600;
    this.FrameHeight = 900;
    this.FrameScale = 1;
    this.Path = "../public/assets/background/";
  }

  public makePage(){
    // innerHTMLで画像を表示する
    const game = document.getElementById("game");
    //画像は左右中央配置
    if (game != null){
    game.innerHTML = `
        <div>
        </div>
        `;
    }
  }
}

// 継承クラス indexを作成
class Index extends View{
  constructor(){
    super();
    this.scene = "index";
    this.FrameWidth = 1600;
    this.FrameHeight = 900;
    this.FrameScale = 1;
    this.Path = "../public/assets/background/index.png";
    }
    

    public makeIndexPage(){
        const game = document.getElementById("game");
        function startGame(){
            console.log("start");
        }

        if (game != null){
        game.innerHTML = `
            <div class="background">
                <div class='selectBox'>
                    <div class="title">
                        <h1>Select Game</h1>
                    </div>
                    <div class="selection">
                        <select name="game" id="game">
                            <option value="">--</option>
                            <option value="blackjack">blackjack</option>
                            <option value="poker">war</option>
                        </select>
                    </div>
                    <div class="title">
                        <h1>Select Level</h1>
                    </div>
                    <div class="selection">
                        <select name="level" id="level">
                            <option value="">--</option>
                            <option value="easy">easy</option>
                            <option value="normal">normal</option>
                            <option value="hard">hard</option>
                        </select>
                    </div>
                    <div class="title">
                        <h1>Let's Start</h1>
                    </div>
                    <div class="startButton">
                        <button type="button" onclick="${startGame()}">Start</button>
                    </div>
                </div>    
            </div>
            `;
        }
    } 

}


// 実行
const index = new Index();
index.makeIndexPage();
