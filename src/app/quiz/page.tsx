"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

interface QuestionProps {
  question: string;
  options: string[];
  answer: string;
}

const QuestionItem: React.FC<{
  question: QuestionProps;
  onSelect: (answer: number[]) => void;
  selectedAnswer: number[];
}> = ({ question, onSelect, selectedAnswer }) => {
  const [hoveredOption, setHoveredOption] = React.useState<string | null>(null);

  const handleOptionSelect = (index: number) => {
    const newSelectedAnswer = question.options.map((_, i) => (i === index ? 1 : 0));
    onSelect(newSelectedAnswer);
  };

  return (
    <div className="px-10 flex flex-col gap-2 pb-8">
      <h3 className="text-2xl font-medium">{question.question}</h3>
      <div className="grid grid-cols-3 gap-4">
        {question.options.map((option, index) => (
          <motion.div
            key={option}
            onHoverStart={() => setHoveredOption(option)}
            onHoverEnd={() => setHoveredOption(null)}
            className={`p-4 rounded-xl cursor-pointer flex items-center justify-center text-center duration-300 transition-all ${
              hoveredOption === option || selectedAnswer[index] === 1 ? "bg-blue-300" : "bg-blue-300/50"
            }`}
            onClick={() => handleOptionSelect(index)}
          >
            <input
              type="radio"
              id={`option-${question.question + index}`}
              name={question.question}
              className="peer hidden"
              value={option}
              checked={selectedAnswer[index] === 1}
              onChange={() => handleOptionSelect(index)}
            />
            <label
              htmlFor={`option-${question.question + index}`}
              className="text-xl cursor-pointer"
            >
              {option}
              {selectedAnswer[index] === 1}
            </label>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Quiz: React.FC = () => {
  const questions: QuestionProps[] = [
      {
        question: 'Wybierz przedział, w którym znajduje się obecny wiek dziecka:',
        options: ['4-5 lat', '6-7 lat', '8-9 lat'],
        answer: ''
      },
        {
          question: 'Jaka jest osobowość Twojego dziecka?',
          options: [
            'Aktywna fizycznie, lubi się ruszać',
            'Ciekawska, lubi eksperymentować',
            'Kreatywna, ma bogatą wyobraźnię',
            'Skoncentrowana, lubi wyzwania intelektualne',
            'Towarzyska, lubi pracować w grupie',
          ],
          answer: ''
        },
        {
          question: 'Czy Twoje dziecko ma jakieś ograniczenia fizyczne lub zdrowotne, które warto wziąć pod uwagę?',
          options: [
            'ADHD',
            'Astma',
            'Brak',
            'Brak koordynacji ruchowej',
            'Problemy ze słuchem',
            'Płaskostopie',
            'Skolioza',
            'Wada wymowy',
            'Wada wzroku',
          ],
          answer: ''
        },
        {
          question: 'Jaki jest preferowany czas trwania zajęć?',
          options: ['Długie, powyżej godziny','Krótkie maksymalnie 30 minut', 'Średnie, 30-60 minut'],
          answer: ''
        },
        {
          question: 'Czy wolisz, aby zajęcia odbywały się w pomieszczeniu, czy na świeżym powietrzu?',
          options: ['Na świeżym powietrzu', 'Nie ma to znaczenia', 'W pomieszczeniu'],
          answer: ''
        },
        {
          question: 'Czy dziecko ma preferencje dotyczące zajęć indywidualnych czy grupowych?',
          options: ['Zajęcia grupowe','Zajęcia indywidualne'],
          answer: ''
        },
        {
          question: 'Jakie cechy chcesz rozwijać u swojego dziecka?',
          options: [
            'Dyscyplina',
            'Inteligencja emocjonalna',
            'Kondycja fizyczna i zdrowie',
            'Kreatywność i wyrażanie siebie',
            'Umiejętności naukowe i techniczne',
            'Umiejętności społeczne',
          ],
          answer: ''
        },
        {
          question: 'Na jakim rodzaju aktywności Twoje dziecko najlepiej się koncentruje?',
          options: [
            'Artystyczne, wymagające twórczości',
            'Fizyczne, wymagające ruchu',
            'Naukowe, wymagające logiki i analizy',
            'Towarzyskie, wymagające współpracy z innymi'
          ],
          answer: ''
        },
        {
          question: 'Czy Twoje dziecko lubi nowe wyzwania, czy woli pracować nad tym, co już zna?',
          options: ['Lubi odkrywać nowe rzeczy', 'Woli doskonalić umiejętności, które już zna'],
          answer: ''
        },
      ];

  const [answers, setAnswers] = useState<number[][]>(Array(questions.length).fill([]));

  const handleSelectAnswer = (index: number, answer: number[]) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    if (answers.every((answer) => answer.includes(1))) {
      console.log('Odpowiedzi:', answers.flat());
      try {
        const response = await fetch("/quiz", {
          method: "POST",
        });
        const data = await response.json();
        console.log(data);
      } catch (error: any) {
        console.log(error);
      }
    } else {
      alert('Wszystkie pytania powinny mieć zaznaczoną odpowiedź!');
    }
  };

  return (
    <div className="pt-20 bg-[#F1FFE7] text-[#6C464E] min-h-screen min-w-screen">
      <Navbar />
      <div className="p-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-10 text-center">Znajdź najlepsze zajęcia dla swojego dziecka!</h1>
        <div className="flex flex-col gap-5 w-[70%]">
          {questions.map((question, index) => (
            <QuestionItem
              key={index}
              question={question}
              selectedAnswer={answers[index]}
              onSelect={(answer) => handleSelectAnswer(index, answer)}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={handleSubmit}
            className="bg-[#6C464E] text-white py-2 px-6 rounded-lg hover:bg-[#3E2C2F] transition-colors"
          >
            Zatwierdź Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;