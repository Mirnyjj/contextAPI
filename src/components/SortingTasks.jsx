/* eslint-disable react/prop-types */
import '../App.css'
import SortIcon from '@mui/icons-material/Sort';
import { useContext } from "react";
import { AppContext } from "../contextApp";

function SortTasksAlphabetically() {
    const { isLoadingSort, fetchBySort } = useContext(AppContext)


    return (
        <button className="ButtonSort" disabled={isLoadingSort} onClick={() => fetchBySort()}>
            <SortIcon />
        </button>
    )
}

export default SortTasksAlphabetically