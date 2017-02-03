# SECOND

## 開発環境

### エンドポイント等

|種別|URL|備考|
|:--|:--|:--|
|App|[http://localhost:3000](http://localhost:3000)||
|Admin|[http://localhost:4000](http://localhost:4000)||
|MySQL|localhost:3306||
|Redis|localhost:6380||
|MailCatcher(UI)|[http://localhost:1080](http://localhost:1080)||
|MailCatcher(SMTP)|localhost:1025||

### 開発環境の準備

#### Docker for Macのインストール

Docker for Macをインストールします。

[Docker for Mac](https://docs.docker.com/docker-for-mac/)

#### コンテナのビルド

プロジェクトのルートディレクトリに移動し`docker-compose build`でビルドが必要なコンテナをビルドします。

```
$ docker-compose build
```

あるいはNPMモジュールが不足しているためエラーになりますが、`docker-compose up`でコンテナをいきなり起動してもコンテナが存在しなければビルドが行われます。

#### NPMモジュールのインストール

下記のコマンドでコンテナからNPMモジュールをインストールします。あるいは一括で実行したい場合は`bash yarn-install.sh`を実行します。package.jsonが複数に分かれているため複数回インストールが必要になります。

```
$ docker-compose run app bash -c "cd common && yarn install"
$ docker-compose run app bash -c "cd server/app && yarn install"
$ docker-compose run app bash -c "cd server/admin && yarn install"
$ docker-compose run app bash -c "cd client/app && yarn install"
$ docker-compose run app bash -c "cd client/admin && yarn install"
```

上記は`docker-compose run`を経由してホストOSからコマンドを指定していますが、コンテナの中にログインしてインストールすることも可能です。

```
$ docker-compose run app bash # ログイン
root@c0de7516463f:/app# cd common
root@c0de7516463f:/app/common# yarn install
```

#### マイグレーションの実行

sequelize cliを利用してマイグレーションを行います。

```
$ docker-compose run app bash -c "yarn db:migrate"
```

#### コンテナの起動

`docker-compose up`でコンテナを起動します。この場合、Ctrl+Cで終了する事ができます。

```
$ docker-compose up
```

デーモンとして起動したい場合は下記のフラグを有効にします。

```
$ docker-compose up -d # デーモンとして起動する
$ docker-compose down # デーモンとして起動したコンテナを終了する
```

#### よく分からなくなった時

下記のコマンドが使えます。

```
$ docker rm -f $(docker ps -qa) # コンテナをとにかく全て消去する
$ docker rmi $(docker images -q) # イメージをとにかく全て消去する（再ビルド時にイメージの再取得が必要になります）
```
