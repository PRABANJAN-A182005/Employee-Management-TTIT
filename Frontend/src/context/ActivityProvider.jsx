import { useState } from "react";
import ActivityContext from "./ActivityContext.jsx";

function ActivityProvider({ children }) {

    const [activities, setActivities] = useState([]);

    const addActivity = (action, employeeName) => {

        const newActivity = {
            id: crypto.randomUUID(),
            action,
            employeeName,
            createdAt: new Date().toISOString()
        };

        setActivities(prev => [
            newActivity,
            ...prev
        ]);
    };

    return (
        <ActivityContext.Provider
            value={{ activities, addActivity }}
        >
            {children}
        </ActivityContext.Provider>
    );
}

export default ActivityProvider;
