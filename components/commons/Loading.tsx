import React from "react";

interface LoadingProps {
    
}
 
const Loading: React.FC<LoadingProps> = () => {
    return ( 
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-gray-700">Loading...</p>
        </div>
     );
}
 
export default Loading;