import CreateGroup from "./createGroup"
import { useState } from "react";

interface Group{
    name: String,
    description: string,
    owner: string,
    members: [],
    isPrivate: boolean
}
export default function SearchBar({ setGroups, groups }) {
    const [searchKey, setSearchKey] = useState('');
    function handleSearchChange(e :any) {
        const searchKey = e.target.value
        setSearchKey(searchKey);
    }
    if(searchKey !== ''){
        const filtredGroups = groups.filter((group: Group) => group.name.toLowerCase().includes(searchKey.toLowerCase()));
        if(!filtredGroups){
            console.log('not found')
        }else{
            console.log('°°°°°°°°°°°°°',filtredGroups);
        }
    }

    return (
        <>
            <div className="chat-search-header">
                <div className="header-title d-flex align-items-center justify-content-between">
                    <h4 className="mb-3">Group</h4>
                    <div className="d-flex align-items-center mb-3">
                        <CreateGroup setGroups={setGroups} />
                        <div className="dropdown">
                            <div  data-bs-toggle="dropdown" className="fs-16 text-default">
                                <i className="ti ti-dots-vertical"></i>
                            </div>
                            <ul className="dropdown-menu p-3">
                                <li><div className="dropdown-item" data-bs-toggle="modal" data-bs-target="#invite"><i className="ti ti-send me-2"></i>Invite Others</div></li>
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