import useActivities from "../hooks/useActivities.js";
function RecentActivities() {
    const { activities } = useActivities();
    const getActivityColor = (action) => {
        switch (action) {
            case "Added":
                return "bg-blue-500";
            case "Updated":
                return "bg-green-500";
            case "Deleted":
                return "bg-red-500";
            default:
                return "bg-gray-500";
        }
    };

    const getTimeAgo = (date) => {
        const seconds = Math.floor(
            (Date.now() - new Date(date).getTime()) / 1000
        );
        if (seconds < 60) return "Just now";
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes} minutes ago`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours} hours ago`;
        const days = Math.floor(hours / 24);
        return `${days} days ago`;
    };

    return (
        <section className="RecentActivities flex flex-col rounded-md m-4 p-4 bg-white shadow-md">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
                Recent Activities
            </h2>
            {activities.length === 0 ? (
                <p className="text-gray-500 text-sm">
                    No recent activities.
                </p>
            ) : (
                activities.map((activity) => (
                    <div
                        key={activity.id}
                        className="flex gap-2 justify-between items-center w-full p-2"
                    >
                        <div className="flex items-center gap-3">
                            <span className={`w-2 h-2 shrink-0 rounded-full ${getActivityColor(activity.action)}`} />
                            <div>
                                <h3 className="text-sm font-medium text-gray-800">
                                    Employee {activity.action}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {activity.employeeName}
                                </p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 whitespace-nowrap">
                            {getTimeAgo(activity.createdAt)}
                        </p>
                    </div>
                    ))
                )}
        </section>
    );
}
export default RecentActivities;
