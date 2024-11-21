import { useState, useEffect } from "react";
import SearchBar from "./Searchbar";
import ListGroups from "./ListGroups";
import axios from "axios";

export default function Group() {
    const [groups, setGroups] = useState([]);
    const [myGroups, setMyGroups] = useState([]);
    useEffect(() => {
        async function GetGroups() {
            const AvailableGroups = await axios.get("http://localhost:3000/group/all");
            setGroups(AvailableGroups.data.groups)
            // console.log('+++++++++',AvailableGroups.data.groups);
            try {
                const userGroups = await axios.get("http://localhost:3000/group/mygroups");
                console.log('++++++++++++++++++', userGroups);
                if (userGroups) {
                    setMyGroups(userGroups.data.groups);
                }
            } catch (e) {
                console.log(e.response.data)
            }

        }
        GetGroups();
    }, []);
    return (
        <>
            <SearchBar setGroups={setGroups} groups={groups} />
            <ListGroups myGroups={myGroups} groups={groups} />
        </>
    )
}