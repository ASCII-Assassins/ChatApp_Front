export default function HeaderChat() {
    return (
        <>
            <div className="chat-header">
                <div className="user-details">
                    <div className="d-xl-none">
                        <a className="text-muted chat-close me-2" href="#">
                            <i className="fas fa-arrow-left"></i>
                        </a>
                    </div>
                    <div className="avatar avatar-lg online flex-shrink-0">
                        <img src="assets/img/groups/group-01.jpg" className="rounded-circle" alt="image" />
                    </div>
                    <div className="ms-2 overflow-hidden">
                        <h6>The Dream Team</h6>
                        <p className="last-seen text-truncate">40 Member, <span className="text-success">24 Online</span></p>
                    </div>
                </div>
                <div className="chat-options">
                    <ul>
                        <li>
                            <div className="avatar-list-stacked avatar-group-md d-flex">
                                <span className="avatar avatar-rounded">
                                    <img src="assets/img/profiles/avatar-06.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img src="assets/img/profiles/avatar-01.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                </span>
                                <a className="avatar bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
                                    35+
                                </a>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="btn chat-search-btn" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search">
                                <i className="ti ti-search" ></i>
                            </a>
                        </li>
                        <li title="Group Info" data-bs-toggle="tooltip" data-bs-placement="bottom">
                            <a href="javascript:void(0)" className="btn" data-bs-toggle="offcanvas" data-bs-target="#contact-profile">
                                <i className="ti ti-info-circle" ></i>
                            </a>
                        </li>
                        <li>
                            <a className="btn no-bg" href="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" ></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li><a href="index.html" className="dropdown-item"><i className="ti ti-x me-2"></i>Close Group</a></li>
                                <li><a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#mute-notification"><i className="ti ti-volume-off me-2"></i>Mute Notification</a></li>
                                <li><a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#disappearing-messages"><i className="ti ti-clock-hour-4 me-2"></i>Disappearing Message</a></li>
                                <li><a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#clear-chat"><i className="ti ti-clear-all me-2"></i>Clear Message</a></li>
                                <li><a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-chat"><i className="ti ti-trash me-2"></i>Delete Group</a></li>
                                <li><a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#report-user"><i className="ti ti-thumb-down me-2"></i>Report</a></li>
                                <li><a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#block-user"><i className="ti ti-ban me-2"></i>Block</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="chat-search search-wrap contact-search">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search Contacts" />
                            <span className="input-group-text"><i className="ti ti-search"></i></span>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}