export const CharCounterCircle = () => {
    return (
        <>
            <svg className="w-full h-full" viewBox="0 0 36 36">

                <circle
                    cx="18" cy="18" r="15.915"
                    className="stroke-current text-gray-700"
                    stroke-width="2"
                    fill="transparent"
                ></circle>

                <circle
                    cx="18" cy="18" r="15.915"
                    className="stroke-current text-yellow-500"
                    stroke-width="2"
                    fill="transparent"
                    stroke-dasharray="100"
                    stroke-dashoffset="80"
                    stroke-linecap="round"
                    transform="rotate(-90 18 18)"
                ></circle>

                <text
                    x="18" y="21"
                    className="fill-current text-gray-400 text-xs font-bold"
                    text-anchor="middle"
                >20
                </text>
            </svg>
        </>
    )
}
