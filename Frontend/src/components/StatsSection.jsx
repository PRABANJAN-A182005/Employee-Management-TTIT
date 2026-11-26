function StatsSection({ stats }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <article
                        key={index}
                        className="StatsArticle flex flex-col rounded-md items-start justify-center p-4 bg-white shadow-md">
                        <div className="flex flex-row items-center justify-between w-full">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">
                                {stat.title}
                            </h2>
                            {Icon && (
                                <Icon
                                    size={16}
                                    className="text-blue-700"
                                />)}
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            {stat.value}
                        </h1>
                        <p className={`mt-2 text-sm ${stat.descriptionColor || "text-green-600"}`}>
                            {stat.description}
                        </p>
                    </article>
                );
            })}
        </div>
    );
}

export default StatsSection;
