function SideBar({ tabs, activeTab, setActiveTab } : {tabs:string,activeTab:string, setActiveTab:(tabId: string)=>void}) {
  
  const handleTabClick = (tabId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  return (
    <div className="sidebar-menu">
      <div className="logo">
        <a href="index.html" className="logo-normal">
          <img src="assets/img/logo.svg" alt="Logo" />
        </a>
      </div>
      <div className="menu-wrap">
        <div className="main-menu">
          <ul className="nav">
            {tabs.map((tab, indx) => (
              <li
                key={indx}
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title={tab.title}
                data-bs-custom-class="tooltip-primary"
              >
                <a
                  className={activeTab === tab.id ? "active" : ""}
                  data-bs-toggle="tab"
                  data-bs-target={`#${tab.id}`}
                  href="#"
                  onClick={handleTabClick(tab.id)}
                >
                  <i className={tab.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="profile-menu">
          <ul>
            <li>
              <a
                href="#"
                id="dark-mode-toggle"
                className="dark-mode-toggle active"
              >
                <i className="ti ti-moon"></i>
              </a>
              <a href="#" id="light-mode-toggle" className="dark-mode-toggle">
                <i className="ti ti-sun"></i>
              </a>
            </li>
            <li>
              <div className="dropdown">
                <a
                  href="#"
                  className="avatar avatar-md"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src="assets/img/profiles/avatar-16.jpg"
                    alt="img"
                    className="rounded-circle"
                  />
                </a>
                <div className="dropdown-menu dropdown-menu-end p-3">
                  <a href="signin.html" className="dropdown-item">
                    <i className="ti ti-logout-2 me-2"></i>Logout
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
