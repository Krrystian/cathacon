"use client"
import React from 'react'

interface EventElementProps{
    title?: string,
    description?: string,
    time?: string,
    duration?: string
    participants_left: string,
    city: string,
    place:string
}
const EventElement: React.FC<EventElementProps> = ({title, description, time, duration, participants_left, city, place}) => {
    const noLeft = Number(participants_left) > 0 ? false : true
  return (
    <div className='border-4 bg-white border-[#6C464E] rounded-xl w-[400px] h-[250px] p-2'>
        <div className='flex flex-col justify-between items-center h-full py-4'>
            <p className='text-4xl font-medium'>{title}</p>
            <div className='w-full h-[2px] bg-[#6C464E]/50'></div>
            <div className='flex flex-col'>
                <p className='italic font-medium'>{description}</p>
                <div className='flex w-full justify-between'>
                    <p>{time + " " + city + ", " + place}</p>
                    <p>{duration}</p>
                </div>
                <div className='flex justify-between items-center pt-2'>
                    <p>Zostało miejsc: <span className={`${noLeft? "text-red-500 font-bold":""}`}>{participants_left || "0"}</span></p>
                    <button className={`p-2 rounded-xl bg-blue-300/60 ${noLeft? "bg-gray-300 cursor-default":"bg-blue-300/60"}`}>Zapisz się</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default EventElement