function SummaryCard({title, value}){
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">
                {title}
            </p>

            <p className="text-2xl font-bold">
                {value}
            </p>
        </div>
    );
}

export default SummaryCard;