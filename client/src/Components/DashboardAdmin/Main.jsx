import stats from '../../data/stats.json'


function Main() {
    return (

        <>
            <section className="text-gray-600 body-font">

                <div className="flex flex-wrap -m-4 text-center">
                    {stats.map((stat) => (
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-800 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">{stat.value}</h2>
                                <p className="leading-relaxed">{stat.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default Main

