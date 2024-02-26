import { Icon } from "@iconify/react/dist/iconify.js"
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
    <div className="up">
      <div className="list_box">
        <div className="list">
          <div>購物說明</div>
          <div>購買須知</div>
          <div>付款說明</div>
          <div>運送政策</div>
          <div>出貨公告</div>
          <div>退換貨政策</div>
          <div>電子發票說明</div>
        </div>
        <div className="list">
          <div>About us.</div>
          <div>品牌故事</div>
          <div>門市位置</div>
          <div>會員權益</div>
        </div>
        <div className="list">
          <div>Follow us.</div>
          <p>dress up to the nines</p>
          <div className="icon_box">
            <Icon icon="ph:instagram-logo" />
            <Icon icon="ph:facebook-logo" />
            <Icon icon="ph:twitter-logo" />
            <Icon icon="ph:youtube-logo" />
          </div>
        </div>
      </div>
      <div className="pay">
        <Icon icon="ph:credit-card-bold" />
        <Icon icon="ph:credit-card-bold" />
        <Icon icon="ph:credit-card-bold" />
        <Icon icon="ph:credit-card-bold" />
      </div>
    </div>
    <div className="down">
      <div className="link_box">
        <div className="link">防詐騙宣導</div>
        <div className="link">隱私政策</div>
        <div className="link">條款與細則</div>
        <div className="link">線上即時客服</div>
      </div>
      <div className="info_box">
        <div className="info">2024 © C8® 六九號商店</div>
        <div className="info">門市地址：台北市士林區xx路xx號</div>
        <div className="info">客服信箱：service@nineselect.com</div>
      </div>
    </div>
  </div>
  )
}

export default Footer
