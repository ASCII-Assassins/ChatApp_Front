import Group from "../../Components/Group/Group";

function Aside({activeTab} : { activeTab: string }) {
  return (
    <div className="sidebar-group">
      <div className="tab-content">
        <div className="tab-pane fade active show" id="chat-menu">
          {/* Put your content here */}
          {activeTab === "group-menu" && 
          <>
                  <Group/>      
          </>
          }

        </div>
      </div>
    </div>
  );
}

export default Aside;
