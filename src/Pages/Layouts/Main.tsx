import HeaderChat from "../../Components/Channel/HeaderChat"
import Chat from "../../Components/Channel/chat"
import FooterChat from "../../Components/Channel/FooterChat"
function Main({ activeTab }: { activeTab: string }) {
  return (
    <div className="welcome-content d-flex align-items-center justify-content-center">
        {activeTab === "group-menu" &&
        <>
        <div className="chat chat-messages show" id="middle">
          <div>
          <HeaderChat/>
          <Chat/>
          <FooterChat/>
          </div>

        </div>
        </>

      }

    </div>
  );
}

export default Main;
