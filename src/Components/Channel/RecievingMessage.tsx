import GroupImg from "../../assets/img/groups/group-01.jpg"

export default function RecievingMessage() {
    return (
        <>
            <div className="sidebar-body chat-body">

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>All Groups</h5>
                </div>

                <div className="chat-users-wrap">
                    <div className="chat-list">
                        <a href="group-chat.html" className="chat-user-list">
                            <div className="avatar avatar-lg online me-2">
                                <img src={GroupImg} className="rounded-circle" alt="image" />
                            </div>
                            <div className="chat-user-info">
                                <div className="chat-user-msg">
                                    <h6>The Dream Team</h6>
                                    <p><span className="animate-typing">is typing
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </span>
                                    </p>
                                </div>
                                <div className="chat-user-time">
                                    <span className="time">02:40 PM</span>
                                    <div className="chat-pin">
                                        <i className="ti ti-pin me-2"></i>
                                        <span className="count-message fs-12 fw-semibold">12</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="chat-dropdown">
                            <a className="#" href="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2"></i>Archive Group</a></li>
                                <li><a className="dropdown-item" href="#"><i className="ti ti-volume-off me-2"></i>Mute Notification</a></li>
                                <li><a className="dropdown-item" href="#"><i className="ti ti-logout-2 me-2"></i>Exit Group</a></li>
                                <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2"></i>Pin Group</a></li>
                                <li><a className="dropdown-item" href="#"><i className="ti ti-square-check me-2"></i>Mark as Unread</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="chat-list">
                        <a href="group-chat.html" className="chat-user-list">
                            <div className="avatar avatar-lg online me-2">
                                <img src="assets/img/groups/group-02.jpg" className="rounded-circle" alt="image" />
                            </div>
                            <div className="chat-user-info">
                                <div className="chat-user-msg">
                                    <h6>The Meme Team</h6>
                                    <p>Do you know which...</p>
                                </div>
                                <div className="chat-user-time">
                                    <span className="time">06:12 AM</span>
                                    <div className="chat-pin">
                                        <i className="ti ti-pin me-2"></i>
                                        <i className="ti ti-checks text-success"></i>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="chat-dropdown">
                            <a className="#" href="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2"></i>Archive Group</a></li>
                                <li><a className="dropdown-item" href="#"><i className="ti ti-volume-off me-2"></i>Mute Notification</a></li>
                                <li><a className="dropdown-item" href="#"><i className="ti ti-logout-2 me-2"></i>Exit Group</a></li>
                                <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2"></i>Pin Group</a></li>
                                <li><a className="dropdown-item" href="#"><i className="ti ti-square-check me-2"></i>Mark as Unread</a></li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}