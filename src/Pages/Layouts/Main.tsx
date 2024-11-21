import HeaderChat from "../../Components/Group/HeaderChat"
import Chat from "../../Components/Group/chat"
import FooterChat from "../../Components/Group/FooterChat"
function Main({ activeTab }: { activeTab: string }) {
  return (
    <div className="welcome-content d-flex align-items-center justify-content-center">
        {activeTab === "group-menu" &&
        <>
        <div className="chat chat-messages show" id="middle">
          <div>
          <HeaderChat/>
          {/* <Chat/>
          <FooterChat/> */}
          </div>

        </div>
        </>

      }

    </div>
  );
}

export default Main;
