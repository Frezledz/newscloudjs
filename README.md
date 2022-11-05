# NEW ScloudJS v1.0

昔作った[Scloudjs](https://github.com/xxXFreezerXxx/ScloudJS)をnpmで使用可能にし、使い勝手を向上させたものです。

## 必要なもの
Node.js (古すぎないバージョン)
## 使い方
1. npmからパッケージをダウンロード&セットアップ
```
npm init -y
npm i scloudjs
```
2. Javascriptファイルを作成していろいろ書く

# コード例
```
const scloudjs = require("scloudjs"); //scloudjsをモジュールとして使えるようにする
let clouddatas = new Object();//このオブジェクトにクラウド変数のデータが入る

const process = (data)=>{//メッセージを受け取ったときにどんな処理をするかを設定する
   const temp = scloudjs.parsedata(data,clouddatas);//受け取ったメッセージを整理する
   clouddatas = temp.clouddatas;//クラウド変数のデータ
   const changedlists = temp.changedlists;//変更された変数一覧
   scloudjs.sendtocloud("HOST",19);//変数HOSTを19にする
   clouddatas["HOST"].value = 19 //自分で設定したクラウド変数はメッセージとしてデータをもらうことができないので自分で設定する
};

scloudjs.setdatas("username","password:","接続したいプロジェクトのid",process);//いろいろデータを設定する

const func = async()=>{//実行

    await scloudjs.login();//scratchにログイン
    await scloudjs.connect();//scratchのクラウド変数サーバーに接続
    await scloudjs.handshake();//プロジェクトに接続
};
func();

```
## その他
プログラミングの知識がない方はブラウザ上で操作できる[ScloudJS GUI Edition](https://github.com/xxXFreezerXxx/ScloudjsGUI)を使うことをお勧めします。
## credit
libraries used : ws