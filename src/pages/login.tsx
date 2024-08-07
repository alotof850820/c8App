import UseNavigate from "@/router/hook";
import TopBar from "@/components/TopBar";
import { Icon } from "@iconify/react/dist/iconify.js";
const login = () => {
  const { go } = UseNavigate();

  return (
    <div className="w-[100vw] h-[100vh] bg-[#252525]">
      <div className="w-full h-full text-white flex items-center flex-col gap-[8vw]">
        <TopBar />
        <div className="w-full flex mt-[10vh] items-start justify-center flex-col px-[5vw] gap-[3vw]">
          <div className="text-[5.5vw] font-bold mb-[2vw]">C=8</div>
          <div>立即加入吸吧, 絕密視頻任您瀏覽</div>
          <div className="text-[3.2vw]">試營運期間, 全面八折起</div>
        </div>
        <div className="w-full flex items-start justify-center flex-col px-[5vw] gap-[4vw]">
          <div className="w-full">
            <label className="text-[3vw] font-normal" htmlFor="email">
              郵箱
            </label>
            <div className="flex items-center justify-center relative gap-[3vw]">
              <Icon
                className="absolute left-[5%] top-[30%] text-[#d0cbd6]"
                icon="carbon:email"
                fontSize={"6vw"}
              ></Icon>
              <input className="focus:outline-none focus:border-[#9B73D3] focus:border-[2px] focus:border-solid w-full h-[8vh] rounded-xl border-none pl-[14vw] bg-[#4d4d4d]" type="text" id="email" placeholder="請輸入郵箱" />
            </div>
          </div>

          <div className="text-[3.2vw] text-[#D5D0D4]">
            <div>* 請務必填寫正確郵箱以免造成您的權益損失。</div>
            <div>* 一個郵箱號僅供一組帳號使用，請勿重複註冊。</div>
          </div>
        </div>
        <div className="mt-auto w-full flex p-[4vw] gap-[3vw] items-center justify-center flex-col text-[4vw]">
          <div className="w-full bg-[#9B73D3] rounded-xl p-[3vw] text-center" onClick={() => go("/home")}>
            下一步
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
