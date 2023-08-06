export default function NotFound() {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 dark:text-slate-300">
                <div className="flex items-center">
                    <div className="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
                        404
                    </div>
                    <div className="ml-4 text-lg text-gray-500 uppercase tracking-wider">
                        Not Found
                    </div>
                </div>
            </div>
        </>
    );
}
