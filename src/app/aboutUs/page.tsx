import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/legacy/image'

const page = () => {
  return (
    <div className="pt-20 bg-[#F1FFE7] text-[#6C464E] min-h-screen min-w-screen">
        <Navbar />
        <div className="p-4 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-10 text-center">O nas</h1>
            <div className='flex flex-row gap-20'>
                <div className='flex flex-row mb-10 w-1/2 h-full gap-3 items-center'>
                    <div className='w-3/4'>
                        <h1 className="text-5xl font-bold">Krystian</h1>                     
                        <p>Mózg operacji. Wysoce uzdolniony w dziedzinie tworzenia stron internetowych, ale nie tylko! Ukończył technikum elektryczne z zacnym tytułem: teleinformatyk, toteż można by rzec, że poradzi sobie w każdej dziedzinie IT! Obecnie student informatyki na Politechnice Lubelskiej.</p>   
                    </div>
                    <div className='relative h-96 w-1/4'>
                        <Image src='/krystian.jpg' layout='fill' objectFit='cover' className='object-cover'></Image>
                    </div>
                </div>
                <div className='flex flex-row mb-10 w-1/2 h-full gap-3 items-center'>
                    <div className='relative h-96 w-1/4'>
                     <Image src='/dominika.jpg' layout='fill' objectFit='cover' className='object-cover'></Image>   
                    </div>
                    <div className='w-3/4'>
                        <h1 className="text-5xl font-bold">Dominika</h1>
                        <p>Support, cheerlederka. Próbuje zrobić, to co mózg operacji dokładnie wytłumaczy. Również studentka informatyki na Politechnice Lubelskiej.</p>
                    </div>
                    
                </div>   
            </div>
            <div className="justify-center">
                <h1 className="text-5xl font-bold">PO RAZ PIERWSZY ŁĄCZĄ SIŁY NA HACKYEAH W 2024 ROKU!!!</h1>
                
                <div className='flex flex-row gap-20 h-full'>
                    <div>
                        <p>Ciężka praca</p>  
                        <div className='relative w-full h-96'>
                            <Image src='/hackyeah.jpg' layout='fill' objectFit='cover' className='object-cover'></Image>
                        </div>  
                    </div>
                    <div>
                        <p>Sztama</p>   
                        <div className='relative w-full h-96'>
                            <Image src='/skiety.jpg' layout='fill' objectFit='cover' className='object-cover'></Image>
                        </div> 
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default page
