export default function SearchBar() {
    return (
        <>
            <div className="chat-search-header">
                <div className="header-title d-flex align-items-center justify-content-between">
                    <h4 className="mb-3">Group</h4>

                    <div className="d-flex align-items-center mb-3">
                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#new-chat" className="add-icon btn btn-primary p-0 d-flex align-items-center justify-content-center fs-16 me-2"><i className="ti ti-plus"></i></a>

                        <div className="dropdown">
                            <a href="javascript:void(0);" data-bs-toggle="dropdown" className="fs-16 text-default">
                                <i className="ti ti-dots-vertical"></i>
                            </a>
                            <ul className="dropdown-menu p-3">
                                <li><a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#invite"><i className="ti ti-send me-2"></i>Invite Others</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="search-wrap">
                    <form action="#">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search For Contacts or Messages" />
                            <span className="input-group-text"><i className="ti ti-search"></i></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}