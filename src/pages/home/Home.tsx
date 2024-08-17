import React from 'react'

function Home() {
    return (
        <div className='bg-stone-50 container flex-grow rounded-3xl p-4 flex flex-col shadow-lg justify-center'>
            <main className='flex justify-between  flex-wrap gap-y-8'>
                <div className="flex flex-grow flex-col justify-center items-center">
                    <h2 className='text-3xl'>Este é o site da <span className='italic font-bold'>FARMAZIL</span></h2>
                    <p>Site para a perfomance goals da Generation Brazil, simula o site de uma farmácia</p>
                </div>
                <div className="flex flex-grow justify-center">

                    <img className='rounded-3xl shadow-lg flex-grow max-w-[40rem] w-full' src="https://images.pexels.com/photos/3683081/pexels-photo-3683081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                </div>
            </main>
        </div>
    )
}

export default Home