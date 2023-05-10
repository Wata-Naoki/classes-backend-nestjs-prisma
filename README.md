## 初期のセットアップ

### nestプロジェクトを作成
```bash
$ npm i -g @nestjs/cli
$ npm i -g yarn

$ nest new api-lesson
# set strict true in tsconfig.json
```
### パッケージのインストール
```bash
# install prisma
$ yarn add -D prisma
$ yarn add @prisma/client
$ npx prisma init

# docker-compose.ymlファイルを追加する
# データベース立ち上げ
$ docker compose up -d
# データベースをリセットする
$ docker compose rm -s -f -v

# edit DATABASE_URL of .env
# モデル定義をスキーマに加える

# prisma migrateとtype generationの設定
$ npx prisma migrate dev
$ npx prisma studio
$ npx prisma generate

# パッケージのインストール
$ yarn add @nestjs/config @nestjs/jwt @nestjs/passport 
$ yarn add cookie-parser csurf passport passport-jwt bcrypt class-validator
$ yarn add -D @types/express @types/cookie-parser @types/csurf @types/passport-jwt @types/bcrypt
```
### module, controller, serviceを作成
```bash
$ nest g module auth
$ nest g module user
$ nest g module prisma
$ nest g controller auth --no-spec
$ nest g controller user --no-spec
$ nest g service auth --no-spec
$ nest g service user --no-spec
$ nest g service prisma --no-spec
```


### ①.envファイルに以下を追加
```
DATABASE_URL="postgresql://username:password@localhost:5434/myDatabaseName?schema=public"
```
### ②dockerのコンテナの立ち上げする
```
docker compose up -d
```


## コマンド一覧
### バックエンド立ち上げ
```
yarn start
```

### prismaのデータベースリセット
```
npx prisma db push --force-reset
```

### prismaのseedを追加
```
npx prisma db seed
```
