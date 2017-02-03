# SECOND front-end

## 開発環境構築

### ソース取得

```bash
git clone git@github.com:relationslab/second-app.git
```

### モジュールインストール

- NodeJS
  - v6.9.4
  - バージョン管理ツールを使用することをオススメ
    - [nvm](https://github.com/creationix/nvm), [nodebrew](https://github.com/hokaccha/nodebrew), [ndenv](https://github.com/riywo/ndenv)
- yarn
  - [インストール手順](https://yarnpkg.com/en/docs/install)
  - [使い方](https://yarnpkg.com/en/docs/usage)

### Nodeモジュールインストール

```bash
yarn
```

### ビルド／起動

- 開発環境

    ```bash
    yarn client:start
    ```

    http://localhost:8008 で開発用のサーバ（webpack-dev-server）が起動します。
    ファイル更新を自動検知し、差分更新します。

- production

    ```bash
    yarn client:build
    ```

    /dist にbundle.jsが出力されます。

### デプロイ

未定

## マークアップ連携用環境

[react-storybook](https://github.com/storybooks/react-storybook) を使用します。

### 環境構築

開発環境の構築時に、同時に構築されます。

### 起動

```bash
yarn client:storybook
```

http://localhost:9001 で storybook サーバが起動します。
Hot Module Replacement で、可能な限り自動で、差分更新します。

### ロジック側との連携

1. ロジック側とマークアップ側で、作成するビューを決定
1. ロジック：　ビューに対応するコンポーネントとスタイルのスケルトンを作成
1. ロジック：　ビューの状態を表現する story を作成
1. マークアップ：　コンポーネントとスタイルをコーディング
1. マークアップ：　storybook上で、状態ごとの表示を確認
1. マークアップ：　対応するブランチにPUSHして、ロジック側に確認依頼
1. ロジック：　確認できたら、コンポーネントへロジックをつなぐ作業へ（引き渡し完了）

## 使用する技術

### 構成

- SPAで作り、SSRも視野に入れます

### ライブラリ／パッケージ

- コンパイラ/ビルド
  - babel 6 (es2015 + stage-3 + react)
  - webpack 1 (babel, stylus, svg, json)
  - HMR
- コンポーネント
  - React 15
  - Redux
  - redux-saga
  - react-router-redux
  - redux-form
- スタイル
  - stylus
  - BEM
  - FLOCSS
- 通信
  - isomorphic-fetch
- テスト
  - jest
- lint
  - ESLint + airbnb

### ディレクトリ構成

- /dist
  - index.html
  - bundle.js
- /src/client/app
  - actions
  - api
  - components
  - constants
  - containers
  - reducers
  - sagas
  - stores
  - styles
  - utils
  - AppRouter.tsx
  - index.tsx
- /src/client/storybook
  - stories
    - (コンポーネントごとのディレクトリ)
    - index.stories.js
  - config.js
- .babelrc
- .eslintrc
- package.json
- webpack.config.babel.js
- yarn.lock
