import { Card } from '../details'

const Detail_cards: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-center mb-30 lg:p-4 md:px-40 px-20">
      <Card
        title="CRYPTO CRYSTAL"
        image="/assets/details/main/crypto_crystal.png"        
        description="世界初の、感覚を持つ鉱物「クリプトクリスタル」は、人間のような人格を持ちながら、ペットのように愛らしく、DNAの重複がないため1つ1つがユニークな存在のNFTプロジェクトです。"
        links={[
          { label: "opensea", url: "https://opensea.io/collection/cryptocrystal" },
          { label: "discord", url: "https://discord.com/invite/UUDYg7btXx" },
          { label: "x", url: "https://mobile.twitter.com/_cryptocrystal" },
        ]}
      />
      <Card
        title="PIPPI VERSE"
        image="/assets/details/main/pippi_verse.png"        
        description="スーパークリプトマンは、日本のクリプトバースで流行した3DステッカーアートのNFTを、様々な影響力のあるアーティストが作成したコレクションです。"
        links={[
          { label: "opensea", url: "https://opensea.io/collection/super-crypto-man" },
        ]}
      />
      <Card
        title="MINTO LAND"
        image="/assets/details/main/minto_land.png"        
        description="株式会社Mintoでは、Webやマンガなどのキャラクターコンテンツをクリエイター集団とともに制作・プロデュースしています。2018年よりブロックチェーン業界に参入し、オリジナルのフルオンチェーンNFTゲームプロジェクト「Crypto Crystal」をリリース、The Sandboxにて「Minto LAND」を開発するなど、積極的に活動しています。"
        links={[
          { label: "video01", url: "https://www.youtube.com/watch?v=YLIcJCKO338&themeRefresh=1" },
          { label: "video02", url: "https://www.youtube.com/watch?v=LErpXdR5uG4" },
          { label: "website", url: "https://www.sandbox.game/jp/quan/" },
        ]}
      />
    </div>
  )
}

export default Detail_cards;