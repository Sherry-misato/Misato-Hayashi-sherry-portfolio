# 林 美聡 Research Portfolio

Next.js + TypeScript + Chakra UIで作成したポートフォリオです。GitHub Pagesで公開できます。

## ローカルで確認

```bash
pnpm install
pnpm dev
```

## GitHub Pagesへ公開

1. このフォルダをGitHubリポジトリへpushします。
2. GitHubの `Settings > Pages` を開きます。
3. `Source` で `GitHub Actions` を選択します。
4. `main` ブランチへpushすると自動的に公開されます。

公開処理は `.github/workflows/deploy-pages.yml` に設定済みです。
