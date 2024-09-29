import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/legacy/image'

const page = () => {
  return (
    <div className="bg-[#F1FFE7] text-[#6C464E] min-h-screen min-w-screen">
        <Navbar />
        <main className="flex flex-col w-screen h-screen gap-10">
            <div className='grid grid-cols-3 w-screen h-screen pt-20'>
                <div className="flex justify-center items-center">
                    <div className="w-[75%] gap-12 flex flex-col">
                        <div>
                            <h1 className="text-5xl font-bold">KRYSTIAN</h1>
                            <p className='text-xl'>Mózg operacji. Wysoce uzdolniony w dziedzinie tworzenia stron internetowych, ale nie tylko! Ukończył technikum elektryczne z zacnym tytułem: teleinformatyk, toteż można by rzec, że poradzi sobie w każdej dziedzinie IT! Obecnie student informatyki na Politechnice Lubelskiej.</p>   
                        </div>
                        <div className='text-right'>
                            <h1 className="text-5xl font-bold">DOMINIKA</h1>
                            <p className='text-xl'>Support, cheerlederka. Próbuje zrobić, to co mózg operacji dokładnie wytłumaczy. Również studentka informatyki na Politechnice Lubelskiej.</p>
                        </div>
                    </div>
                </div>
                <div className="relative col-span-2 w-full h-full flex">
                    <div className="relative h-full w-[50%]">
                        <Image
                        src={"/krystian.jpg"}
                        layout="fill"
                        className="object-cover"
                        />
                    </div>
                    <div className="relative h-full w-[50%]">
                        <Image src={"/dominika.jpg"} layout="fill" className="object-cover" />
                    </div>
                </div>
            </div>
        </main>  
    </div>        
  )
}

export default page
