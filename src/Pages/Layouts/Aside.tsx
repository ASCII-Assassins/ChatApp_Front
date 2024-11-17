import SearchBar from "../../Components/Channel/Searchbar";
import RecievingMessage from "../../Components/Channel/RecievingMessage";

function Aside({activeTab} : { activeTab: string }) {
  return (
    <div className="sidebar-group">
      <div className="tab-content">
        <div className="tab-pane fade active show" id="chat-menu">
          {/* Put your content here */}
          {activeTab === "group-menu" && 
          <>
                        <SearchBar/>
                        <RecievingMessage/> 
          </>

          }

        </div>
      </div>
    </div>
  );
}

export default Aside;
