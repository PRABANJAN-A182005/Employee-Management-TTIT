import { useContext } from "react";
import ActivityContext from "../context/ActivityContext.jsx";

function useActivities() {
    return useContext(ActivityContext);
}

export default useActivities;