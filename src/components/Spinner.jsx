import React from 'react'

function Spinner() {
    return (
        <div className="flex justify-center py-12">
            <div style={{ borderTopColor: "transparent" }} className="w-16 h-16 border-4 border-yellow-400 border-solid rounded-full animate-spin">
            </div>
        </div >
    )
}

export default Spinner