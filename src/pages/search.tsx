import TopBar from "@/components/TopBar";
import "./search.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import Popup from "@/components/Popup";
import { ChangeEvent, useState } from "react";
import UseNavigate from "@/router/hook";

const Search = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterType, setFilterType] = useState<string | null>(null);
  const { go } = UseNavigate();
  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterType(event.target.value);
  };
  const close = () => {
    setShowFilter(false);
  };

  return (
    <div className="search_container theme_bg">
      <TopBar>
        <div className="top_box">
          <input className="search_input input theme_font" type="text" />

          <div className="more theme_note" onClick={() => setShowFilter(true)}>
            <Icon className=" theme_font" icon="prime:filter-fill"></Icon>
          </div>
        </div>
      </TopBar>
      <div className="main">
        <div className="latest_box theme_font">
          <h6>最近</h6>
          <div className="tags_box">
            {[
              1123,
              2123,
              31,
              4,
              5,
              6,
              7,
              "九陰白骨爪",
              "九陰白骨",
              "九陰白",
              "超派鐵拳",
            ].map((item) => (
              <div className="tags" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="hot_box theme_font">
          <h6>熱搜</h6>
          <div className="hot_box_content">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div
                key={item}
                className="hot_search_video"
                onClick={() => {
                  go(`/video/${item}`);
                }}
              >
                <div className="video_box">
                  <img
                    src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                  />
                  <div className="date">03:57</div>
                </div>

                <div className="desc_box">
                  <div className="limit_row_1">`123123123123123123123123</div>
                  <div className="desc theme_desc limit_row_1">
                    觀看次數：12次．11小時前
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Popup
        className="popup_container theme_font"
        show={showFilter}
        height="50vh"
        background="#252525"
        onClose={close}
      >
        <div className="popup">
          <h6 className="title ">排列順序</h6>

          <div className="arrangement_box ">
            <div className="left">
              <Icon className="icon" icon="ion:arrow-up"></Icon>
              時間新到舊
            </div>
            <div className="radio">
              <input
                type="radio"
                name="filterType"
                value=""
                checked={filterType === null}
                onChange={handleFilterChange}
                id="arrange_last"
              />
              <label htmlFor="arrange_last"></label>
            </div>
          </div>
          <div className="arrangement_box ">
            <div className="left">
              <Icon className="icon" icon="ion:arrow-down"></Icon>
              時間舊到新
            </div>
            <div className="radio">
              <input
                type="radio"
                name="filterType"
                value=""
                checked={filterType === null}
                onChange={handleFilterChange}
                id="arrange_old"
              />
              <label htmlFor="arrange_old"></label>
            </div>
          </div>
          <h6 className="title">排序方式</h6>
          <div className="sort_box">
            <div className="left">
              <Icon className="icon" icon="mdi:heart-outline"></Icon>
              喜歡數
            </div>
            <div className="radio">
              <input
                type="radio"
                name="sortType"
                value=""
                checked={filterType === null}
                onChange={handleFilterChange}
                id="likeCount"
              />
              <label htmlFor="likeCount"></label>
            </div>
          </div>
          <div className="sort_box">
            <div className="left">
              <Icon className="icon" icon="mdi:star-outline"></Icon>
              收藏數
            </div>
            <div className="radio">
              <input
                type="radio"
                name="sortType"
                value=""
                checked={filterType === null}
                onChange={handleFilterChange}
                id="favoriteCount"
              />
              <label htmlFor="favoriteCount"></label>
            </div>
          </div>
          <div className="sort_box">
            <div className="left">
              <Icon className="icon" icon="mdi:eye-outline"></Icon>
              觀看數
            </div>
            <div className="radio">
              <input
                type="radio"
                name="sortType"
                value=""
                checked={filterType === null}
                onChange={handleFilterChange}
                id="viewCount"
              />
              <label htmlFor="viewCount"></label>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default Search;
