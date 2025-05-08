import { Card } from '../details'

const Detail_cards: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-center mb-30">
      <Card
        title="CRYPTO CRYSTAL"
        image="/assets/details/main/crypto_crystal.png"        
        description="世界初の、感覚を持つ鉱物「クリプトクリスタル」は、人間のような人格を持ちながら、ペットのように愛らしく、DNAの重複がないため1つ1つがユニークな存在のNFTプロジェクトです。"
        links={[
          { label: "opensea", url: "#" },
          { label: "discord", url: "#" },
          { label: "x", url: "#" },
        ]}
      />
      <Card
        title="PIPPI VERSE"
        image="/assets/details/main/pippi_verse.png"        
        description="スーパークリプトマンは、日本のクリプトバースで流行した3DステッカーアートのNFTを、様々な影響力のあるアーティストが作成したコレクションです。"
        links={[
          { label: "opensea", url: "#" },
          { label: "video01", url: "#" },
          { label: "x", url: "#" },
        ]}
      />
      <Card
        title="MINTO LAND"
        image="/assets/details/main/minto_land.png"        
        description="株式会社Mintoでは、Webやマンガなどのキャラクターコンテンツをクリエイター集団とともに制作・プロデュースしています。2018年よりブロックチェーン業界に参入し、オリジナルのフルオンチェーンNFTゲームプロジェクト「Crypto Crystal」をリリース、The Sandboxにて「Minto LAND」を開発するなど、積極的に活動しています。"
        links={[
          { label: "video01", url: "#" },
          { label: "video02", url: "#" },
          { label: "x", url: "#" },
        ]}
      />
    </div>
  )
}

export default Detail_cards;