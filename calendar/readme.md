# Calendar ＆ TodoList

## 開発理由

基本情報技術者試験に向けて学習を進めている中、モチベーションが続かず、学習時間が落ちてしまう事がありました。<br>
その理由として自分自身、どのくらい勉強しているのか把握出来ていないからではないかと考え、先を見通して予定を立てれるCalendarかつ、直近のやる事を後回しにしない用のTodoListを作成し、TodoListに登録した勉強時間、こなした内容を見返す事ができるようにしたいと思いプロジェクトを開始。

## 開発環境

Windows  Google Chrome  Git

## 使用言語

HTML  CSS  JavaScript 

## 使用方法
使用ブラウザ  Google Chrome推奨。<br>

### Calendar

- tableの上にある、<(先月へ)  >(来月へ)のボタンである。
- 点線で囲まれた部分が今日の日付を示す。
- 好きな日程をクリックすると予定登録画面に切り替わる。

### TodoList

- 予定記述し、タスクに登録ボタンを押すと、記述内容が**Todo List**の下に追加される。
- 追加した内容を削除したいときは、**タスクの横**にある削除ボタンを押す。


## 拘りポイント

なるべく解り易くシンプルに作成することを心がけました。

## 改善点

calenadarにて、第〇週、〇曜日の公休日の判定がうまく出来ませんでした。

## 今後の計画

- indexedDBを追加して、calendar、TodoListに登録した内容を保存できる様にする。
- TodoListに(例)→勉強〇時間<br>
の様に追加した内容(時間)を抽出し、グラフで表示可視化できるようにし、集計のキーワードを追加、削除できるようにしたい。