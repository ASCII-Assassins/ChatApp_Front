import CreateGroup from "./createGroup"
import { useState } from "react";
export default function SearchBar({ setGroups, groups }) {
    const [searchKey, setSearchKey] = useState('');
    // const [filterGroup, setFilterGroup] = useState(groups);

    function handleSearchChange(e) {
        const searchKey = e.target.value
        setSearchKey(searchKey);
    }
    console.log(searchKey);

    const filtredGroups = groups.filter((group) => group.name.toLowerCase().includes(searchKey.toLocaleLowerCase()));
    if(!filtredGroups){
        console.log('not found')
    }

    return (
        <>
            <div className="chat-search-header">
                <div className="header-title d-flex align-items-center justify-content-between">
                    <h4 className="mb-3">Group</h4>
                    <div className="d-flex align-items-center mb-3">
                        <CreateGroup setGroups={setGroups} />
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
                            <input type="text" className="form-control" onChange={handleSearchChange} placeholder="Search For Groups" />
                            <span className="input-group-text"><i className="ti ti-search"></i></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}