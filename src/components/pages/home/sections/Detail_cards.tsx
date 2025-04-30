import { Card } from '../details'

const Detail_cards: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-center mb-30">
      <Card
        title="CRYPTO CRYSTAL"
        image="/assets/details/main/crypto_crystal.png"
        description="世界初の、感覚を持つ鉱物「クリプトクリスタル」は、人間のような人格を持ちながら、ペットのように愛らしく、 DNA の重複がないため 1っ 1 つがユニ ー クな存在の NFT プロジェクトです。"
        links={[
          { label: "opensea", url: "#" },
          { label: "discord", url: "#" },
          { label: "x", url: "#" },
        ]}
      />
      <Card
        title="PIPPI VERSE"
        image="/assets/details/main/pippi_verse.png"
        description="ス ー パ ー クリプトマンは、日本のクリプトバ ースで流行した 3D ステッカ ー ア ー トの NFT を、様 々 な影響力のあるア ー ティストが作成したコレクションです。"
        links={[
          { label: "opensea", url: "#" },
          { label: "video01", url: "#" },
          { label: "x", url: "#" },
        ]}
      />
      <Card
        title="MINTO LAND"
        image="/assets/details/main/minto_land.png"
        description="株式会社Ⅵ NTO では、 WEB やマンガなどのキャラクタ ー コンテンツをクリエイタ ー 集団とともに制作・プロデュ ー スしています。 2018 年よりプロックチェ ー ン業界に参入し、オリジナルのフルオンチェ ー ン NFT ゲ ー ムプロジェクト「 CRYPTO CRYSTAL 」をリリ ー ス、 THESANDBOX にて「 MINTO LAND 」を開発するなど、積極的に活動しています。"
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