import GroupImg from "/assets/img/groups/group-01.jpg"
import { useState } from "react"

interface Group {
    _id: string;
    name: string;
    isPrivate: boolean;
    members: string[];
}
interface ListGroupsProps {
    groups: Group[];
    myGroups: Group[];
}
export default function ListGroups({ groups, myGroups }: ListGroupsProps) {
    const [view, setView] = useState("all");
    const toggleView = () => {
        setView(view === "all" ? "my" : "all");
    };

    const groupsToDisplay = view === "all" ? groups : myGroups;

    return (
        <>
            <div className="sidebar-body chat-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>{view === 'all' ? 'All Groups' : 'My Groups'}</h5>
                    <button onClick={toggleView} className="btn btn-primary">
                        {view === 'all' ? 'Show My Groups' : 'Show All Groups'}
                    </button>
                </div>

                <div className="overflow-auto mb-5" style={{ maxHeight: '400px' }}>
                    { }
                    {groupsToDisplay.length >0 ? groupsToDisplay?.map((group, index) => (
                        <div className="chat-users-wrap" key={index}>
                            <div className="chat-list">
                                <div className="chat-user-list">
                                    <div className="avatar avatar-lg online me-2">
                                        <img src={GroupImg} className="rounded-circle" alt="image" />
                                    </div>
                                    <div className="chat-user-info">
                                        <div className="chat-user-msg">
                                            <h6>{group.name}</h6>
                                            <p><span className="animate-typing">...
                                            </span>
                                            </p>
                                        </div>
                                        <div className="chat-user-time">
                                            <span className="time">{group.isPrivate == false ? "Public" : "Private"}</span>
                                            <div className="chat-pin">
                                                <i className="ti ti-pin me-2"></i>
                                                <span className="count-message fs-12 fw-semibold">{group?.members.length}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

                    )):
                    <p className="d-flex justify-content-center">There's no group available in the moment</p> 
                    }
                </div>


            </div>
        </>
    )
}