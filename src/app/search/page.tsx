"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import EventElement from '../components/EventElement';

interface Miasto {
  value: string;
  label: string;
}

interface Aktywnosc {
  value: string;
  label: string;
}

const miasta: Miasto[] = [
  { value: 'Warszawa', label: 'Warszawa' },
  { value: 'Kraków', label: 'Kraków' },
  { value: 'Łódź', label: 'Łódź' },
  { value: 'Wrocław', label: 'Wrocław' },
  { value: 'Poznań', label: 'Poznań' },
  { value: 'Gdańsk', label: 'Gdańsk' },
  { value: 'Szczecin', label: 'Szczecin' },
  { value: 'Bydgoszcz', label: 'Bydgoszcz' },
  { value: 'Lublin', label: 'Lublin' },
  { value: 'Katowice', label: 'Katowice' },
];

const aktywnosci: Aktywnosc[] = [
    {value: 'sporty drużynowe', label: 'Sporty drużynowe'},
    {value: 'sztuki walki', label: 'Sztuki walki'},
    {value: 'taniec', label: 'Taniec'},
    {value: 'gimnastyka', label: 'Gimnastyka'},
    {value: 'aktywności na świeżym powietrzu', label: 'Aktywności na świeżym powietrzu'},
    {value: 'sporty wodne', label: 'Sporty wodne'},
    {value: 'sztuki wizualne', label: 'Sztuki wizualne'},
    {value: 'muzyka', label: 'Muzyka'},
    {value: 'teatr i performans', label: 'Teatr i performans'},
    {value: 'rękodzieło', label: 'Rękodzieło'},
    {value: 'pisanie i dziennikarstwo', label: 'Pisanie i dziennikarstwo'},
    {value: 'programowanie i kodowanie', label: 'Programowanie i kodowanie'},
    {value: 'eksperymenty naukowe', label: 'Eksperymenty naukowe'},
    {value: 'inżynieria i architektura', label: 'Inżynieria i architektura'},
    {value: 'matematyka i logika', label: 'Matematyka i logika'},
    {value: 'technologia i informatyka', label: 'Technologia i informatyka'},
    {value: 'łamigłówki i gry logiczne', label: 'Łamigłówki i gry logiczne'},
    {value: 'gry wideo', label: 'Gry wideo'},
    {value: 'gry na świeżym powietrzu', label: 'Gry na świeżym powietrzu'},
    {value: 'wymiana kulturalna', label: 'Wymiana kulturalna'},
    {value: 'gotowanie i pieczenie', label: 'Gotowanie i pieczenie'},
    {value: 'ogrodnictwo i hortykultura', label: 'Ogrodnictwo i hortykultura'},
  ];

const Formularz = () => {
  const [miasto, setMiasto] = useState('');
  const [aktywnosc, setAktywnosc] = useState([]);

  const handleChangeMiasto = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMiasto(event.target.value);
  };

  const handleChangeAktywnosc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    
    setAktywnosc((prevState : any) => {
      if (prevState.includes(value)) {
        return prevState.filter((item : any) => item !== value);
      } else {
        return [...prevState, value];
      }
    });
  };

  const eventCity = 'Warszawa';
  const eventActivity = 'sporty drużynowe';

  // Sprawdzamy, czy miasto i aktywność są zgodne, lub czy nie zostały wybrane
  const shouldDisplayEvent =
    (miasto === '' || miasto === eventCity) &&
    (aktywnosc.length === 0 || aktywnosc.some((activity) => activity === eventActivity));
  
  return (
    <div className="pt-20 bg-[#F1FFE7] text-[#6C464E] min-h-screen min-w-screen">
        <Navbar />
        <div className='flex px-10 p-3'>
            <form className='flex flex-col gap-4'>
                <select value={miasto} onChange={handleChangeMiasto} className='text-4xl border-4 rounded-xl appearance-none p-3 border-bg w-[330px] border-[#6C464E] bg-transparent'>
                    <option className='text-base font-bold font-sans' value=''>Wybierz miasto...</option>
                {miasta.map((miasto) => (
                    <option className="text-base font-sans" key={miasto.value} value={miasto.value}>
                        {miasto.label}
                    </option>
                    ))}
                </select>
                <div className='bg-blue-300/60 flex flex-col w-full rounded-xl py-2 px-2'>
                {aktywnosci.map((aktywnosc)=> (
                    <label className='flex justify-between'>
                    {aktywnosc.label}
                    <input type='checkbox' className="accent-[#6C464E]" value={aktywnosc.value}/> 
                    </label>
                ))}
                </div>
            </form>
            <div className='px-8'>
                {shouldDisplayEvent && (
                  <EventElement participants_left='4' title='Yoga' description='Zajęcia z Yogi dla zapracowanych. Wszyscy mile widziani' city="Warszawa" place="Plac" time='29-09-2024' duration='30m' />
                )}
            </div>
        </div>   
    </div>
  );
};

export default Formularz;
