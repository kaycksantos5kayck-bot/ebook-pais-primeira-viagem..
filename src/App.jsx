import React, { useState } from 'react';
import { BookOpen, ChevronRight, ChevronLeft, Heart, Shield, Sparkles, MessageCircle, CheckCircle2, Bookmark } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [notes, setNotes] = useState({});
  const [currentNote, setCurrentNote] = useState('');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const pages = [
    {
      title: "Guia do Pai de Primeira Viagem",
      subtitle: "A tua jornada começa aqui",
      type: "cover",
      content: "Bem-vindo à maior e mais gratificante aventura da tua vida. Este guia prático foi desenhado para te dar superpoderes na paternidade, transformando medos em confiança, passo a passo.",
      icon: <Sparkles className="w-16 h-16 text-amber-500 animate-pulse" />
    },
    {
      title: "Capítulo 1: O Primeiro Mês",
      subtitle: "Sobrevivência e Conexão",
      type: "content",
      content: "Os primeiros 30 dias são focados em adaptação. O bebé chora para comunicar necessidades básicas: fome, fralda suja, cólicas ou apenas necessidade de colo e afeto. Não te preocupes em 'mimar' o bebé neste início; o colo gera segurança emocional profunda.",
      tips: [
        "Aprende o 'embrulho' (swaddle) para acalmar o sono.",
        "Divide os turnos da noite com a mãe para ambos descansarem.",
        "Mantém a calma: o teu batimento cardíaco ajuda a acalmar o bebé."
      ],
      icon: <Heart className="w-12 h-12 text-rose-500" />
    },
    {
      title: "Capítulo 2: A Arte da Fralda",
      subtitle: "Técnica e Rapidez",
      type: "content",
      content: "Mudar fraldas parece um desafio olímpico ao início, mas vais tornar-te num mestre em poucos dias. O segredo está na preparação do ambiente e na rapidez de execução para evitar surpresas.",
      tips: [
        "Deixa sempre uma fralda limpa aberta logo abaixo da fralda suja.",
        "Limpa sempre de frente para trás (especialmente em meninas).",
        "Aplica creme protetor apenas se notar vermelhidão."
      ],
      icon: <Shield className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Quiz do Super Pai",
      subtitle: "Testa os teus conhecimentos",
      type: "quiz",
      questions: [
        {
          id: "q1",
          question: "Qual é o principal motivo do choro de um bebé no primeiro mês?",
          options: [
            "Manha e vontade de manipular os pais",
            "Comunicação de necessidades básicas (fome, sono, fralda)",
            "Dores de dentes precoces"
          ],
          correct: 1
        },
        {
          id: "q2",
          question: "O que deve fazer antes de abrir uma fralda suja?",
          options: [
            "Deixar a fralda nova aberta logo abaixo para evitar acidentes",
            "Esperar 10 minutos para garantir que terminou",
            "Limpar o bebé com água fria"
          ],
          correct: 0
        }
      ]
    },
    {
      title: "Conclusão",
      subtitle: "Tu vais ser um pai incrível",
      type: "end",
      content: "Lembra-se: não existem pais perfeitos, existem pais presentes. A tua dedicação, o teu carinho e a tua paciência são tudo o que o teu filho precisa para crescer feliz e seguro.",
      icon: <BookOpen className="w-16 h-16 text-emerald-500" />
    }
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 0);
  };

  const toggleFavorite = (pageIndex) => {
    if (favorites.includes(pageIndex)) {
      setFavorites(favorites.filter(id => id !== pageIndex));
    } else {
      setFavorites([...favorites, pageIndex]);
    }
  };

  const saveNote = () => {
    if (!currentNote.trim()) return;
    setNotes({ ...notes, [currentPage]: currentNote });
    setCurrentNote('');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-between p-4 font-sans text-slate-800 selection:bg-amber-200">
      {/* Top Bar */}
      <header className="w-full max-w-xl flex items-center justify-between bg-white px-5 py-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-amber-500" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Pai de Primeira Viagem</span>
        </div>
        {currentPage > 0 && currentPage < pages.length - 1 && (
          <button 
            onClick={() => toggleFavorite(currentPage)}
            className="p-2 rounded-full hover:bg-slate-50 transition-colors"
          >
            <Bookmark className={`w-5 h-5 transition-colors ${favorites.includes(currentPage) ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}`} />
          </button>
        )}
      </header>

      {/* Main Book Component */}
      <main className="w-full max-w-xl bg-white my-6 flex-1 rounded-3xl shadow-xl border border-slate-100 p-6 flex flex-col justify-center relative overflow-hidden">
        
        {/* Dynamic Content Sections */}
        <div className="flex flex-col items-center text-center space-y-6">
          {pages[currentPage].icon && (
            <div className="mb-2">{pages[currentPage].icon}</div>
          )}
          
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight px-2">
            {pages[currentPage].title}
          </h1>
          
          <p className="text-amber-600 font-medium text-sm bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wide">
            {pages[currentPage].subtitle}
          </p>

          {pages[currentPage].content && (
            <p className="text-slate-600 text-base leading-relaxed max-w-md pt-2">
              {pages[currentPage].content}
            </p>
          )}

          {/* Render Tips if Content Page */}
          {pages[currentPage].type === 'content' && pages[currentPage].tips && (
            <div className="w-full text-left bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3 mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">Dicas de Ouro:</h4>
              {pages[currentPage].tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-tight">{tip}</p>
                </div>
              ))}
            </div>
          )}

          {/* Render Quiz Section */}
          {pages[currentPage].type === 'quiz' && (
            <div className="w-full text-left space-y-6 mt-2">
              {pages[currentPage].questions.map((q) => (
                <div key={q.id} className="space-y-3">
                  <p className="font-semibold text-slate-800 text-base">{q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((option, opIndex) => {
                      const isSelected = quizAnswers[q.id] === opIndex;
                      const isCorrect = q.correct === opIndex;
                      return (
                        <button
                          key={opIndex}
                          disabled={quizSubmitted}
                          onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: opIndex })}
                          className={`w-full p-3 rounded-xl border text-sm text-left transition-all font-medium flex items-center justify-between ${
                            quizSubmitted 
                              ? isCorrect 
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                                : isSelected 
                                  ? 'bg-rose-50 border-rose-300 text-rose-700'
                                  : 'bg-white border-slate-100 text-slate-400'
                              : isSelected
                                ? 'bg-amber-50 border-amber-300 text-amber-800 shadow-sm'
                                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              {!quizSubmitted ? (
                <button 
                  onClick={() => setQuizSubmitted(true)}
                  className="w-full py-3 bg-slate-900 text-white rounded-xl font-semibold text-sm shadow-md hover:bg-slate-800 transition-colors"
                >
                  Confirmar Respostas
                </button>
              ) : (
                <button 
                  onClick={() => { setQuizAnswers({}); setQuizSubmitted(false); }}
                  className="w-full py-3 bg-slate-100 text-slate-600 rounded-xl font-semibold text-sm hover:bg-slate-200 transition-colors"
                >
                  Refazer Quiz
                </button>
              )}
            </div>
          )}
        </div>

        {/* Notes Interactive Area */}
        {pages[currentPage].type === 'content' && (
          <div className="mt-8 pt-6 border-t border-slate-100 w-full">
            <div className="flex items-center gap-2 mb-3 text-slate-400">
              <MessageCircle className="w-4 h-4" />
              <label className="text-xs font-bold uppercase tracking-wider">Anotações do Pai:</label>
            </div>
            
            {notes[currentPage] && (
              <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-100 text-sm text-amber-900 mb-3 italic">
                "{notes[currentPage]}"
              </div>
            )}
            
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Escreve aqui uma nota importante..." 
                value={currentNote}
                onChange={(e) => setCurrentNote(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
              <button 
                onClick={saveNote}
                className="px-4 py-2 bg-amber-500 text-white rounded-xl font-semibold text-sm hover:bg-amber-600 transition-colors shadow-sm"
              >
                Salvar
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Navigation Footer */}
      <footer className="w-full max-w-xl flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="flex-1 py-3.5 bg-white border border-slate-200 rounded-2xl font-bold text-sm text-slate-600 flex items-center justify-center gap-1 shadow-sm hover:bg-slate-50 disabled:opacity-40 transition-all"
        >
          <ChevronLeft className="w-4 h-4" /> Anterior
        </button>
        
        <div className="text-xs font-bold text-slate-400 tracking-widest uppercase px-2 bg-white h-12 flex items-center rounded-2xl border border-slate-100 shadow-sm">
          {currentPage + 1} / {pages.length}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === pages.length - 1}
          className="flex-1 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-1 shadow-md shadow-amber-500/10 hover:brightness-105 disabled:opacity-40 transition-all"
        >
          Próximo <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
            }
        import React, { useState } from 'react';
import { BookOpen, ChevronRight, ChevronLeft, Heart, Shield, Sparkles, MessageCircle, CheckCircle2, Bookmark } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [notes, setNotes] = useState({});
  const [currentNote, setCurrentNote] = useState('');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const pages = [
    {
      title: "Guia do Pai de Primeira Viagem",
      subtitle: "A tua jornada começa aqui",
      type: "cover",
      content: "Bem-vindo à maior e mais gratificante aventura da tua vida. Este guia prático foi desenhado para te dar superpoderes na paternidade, transformando medos em confiança, passo a passo.",
      icon: <Sparkles className="w-16 h-16 text-amber-500 animate-pulse" />
    },
    {
      title: "Capítulo 1: O Primeiro Mês",
      subtitle: "Sobrevivência e Conexão",
      type: "content",
      content: "Os primeiros 30 dias são focados em adaptação. O bebé chora para comunicar necessidades básicas: fome, fralda suja, cólicas ou apenas necessidade de colo e afeto. Não te preocupes em 'mimar' o bebé neste início; o colo gera segurança emocional profunda.",
      tips: [
        "Aprende o 'embrulho' (swaddle) para acalmar o sono.",
        "Divide os turnos da noite com a mãe para ambos descansarem.",
        "Mantém a calma: o teu batimento cardíaco ajuda a acalmar o bebé."
      ],
      icon: <Heart className="w-12 h-12 text-rose-500" />
    },
    {
      title: "Capítulo 2: A Arte da Fralda",
      subtitle: "Técnica e Rapidez",
      type: "content",
      content: "Mudar fraldas parece um desafio olímpico ao início, mas vais tornar-te num mestre em poucos dias. O segredo está na preparação do ambiente e na rapidez de execução para evitar surpresas.",
      tips: [
        "Deixa sempre uma fralda limpa aberta logo abaixo da fralda suja.",
        "Limpa sempre de frente para trás (especialmente em meninas).",
        "Aplica creme protetor apenas se notar vermelhidão."
      ],
      icon: <Shield className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Quiz do Super Pai",
      subtitle: "Testa os teus conhecimentos",
      type: "quiz",
      questions: [
        {
          id: "q1",
          question: "Qual é o principal motivo do choro de um bebé no primeiro mês?",
          options: [
            "Manha e vontade de manipular os pais",
            "Comunicação de necessidades básicas (fome, sono, fralda)",
            "Dores de dentes precoces"
          ],
          correct: 1
        },
        {
          id: "q2",
          question: "O que deve fazer antes de abrir uma fralda suja?",
          options: [
            "Deixar a fralda nova aberta logo abaixo para evitar acidentes",
            "Esperar 10 minutos para garantir que terminou",
            "Limpar o bebé com água fria"
          ],
          correct: 0
        }
      ]
    },
    {
      title: "Conclusão",
      subtitle: "Tu vais ser um pai incrível",
      type: "end",
      content: "Lembra-se: não existem pais perfeitos, existem pais presentes. A tua dedicação, o teu carinho e a tua paciência são tudo o que o teu filho precisa para crescer feliz e seguro.",
      icon: <BookOpen className="w-16 h-16 text-emerald-500" />
    }
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 0);
  };

  const toggleFavorite = (pageIndex) => {
    if (favorites.includes(pageIndex)) {
      setFavorites(favorites.filter(id => id !== pageIndex));
    } else {
      setFavorites([...favorites, pageIndex]);
    }
  };

  const saveNote = () => {
    if (!currentNote.trim()) return;
    setNotes({ ...notes, [currentPage]: currentNote });
    setCurrentNote('');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-between p-4 font-sans text-slate-800 selection:bg-amber-200">
      {/* Top Bar */}
      <header className="w-full max-w-xl flex items-center justify-between bg-white px-5 py-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-amber-500" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Pai de Primeira Viagem</span>
        </div>
        {currentPage > 0 && currentPage < pages.length - 1 && (
          <button 
            onClick={() => toggleFavorite(currentPage)}
            className="p-2 rounded-full hover:bg-slate-50 transition-colors"
          >
            <Bookmark className={`w-5 h-5 transition-colors ${favorites.includes(currentPage) ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}`} />
          </button>
        )}
      </header>

      {/* Main Book Component */}
      <main className="w-full max-w-xl bg-white my-6 flex-1 rounded-3xl shadow-xl border border-slate-100 p-6 flex flex-col justify-center relative overflow-hidden">
        
        {/* Dynamic Content Sections */}
        <div className="flex flex-col items-center text-center space-y-6">
          {pages[currentPage].icon && (
            <div className="mb-2">{pages[currentPage].icon}</div>
          )}
          
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight px-2">
            {pages[currentPage].title}
          </h1>
          
          <p className="text-amber-600 font-medium text-sm bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wide">
            {pages[currentPage].subtitle}
          </p>

          {pages[currentPage].content && (
            <p className="text-slate-600 text-base leading-relaxed max-w-md pt-2">
              {pages[currentPage].content}
            </p>
          )}

          {/* Render Tips if Content Page */}
          {pages[currentPage].type === 'content' && pages[currentPage].tips && (
            <div className="w-full text-left bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3 mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">Dicas de Ouro:</h4>
              {pages[currentPage].tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-tight">{tip}</p>
                </div>
              ))}
            </div>
          )}

          {/* Render Quiz Section */}
          {pages[currentPage].type === 'quiz' && (
            <div className="w-full text-left space-y-6 mt-2">
              {pages[currentPage].questions.map((q) => (
                <div key={q.id} className="space-y-3">
                  <p className="font-semibold text-slate-800 text-base">{q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((option, opIndex) => {
                      const isSelected = quizAnswers[q.id] === opIndex;
                      const isCorrect = q.correct === opIndex;
                      return (
                        <button
                          key={opIndex}
                          disabled={quizSubmitted}
                          onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: opIndex })}
                          className={`w-full p-3 rounded-xl border text-sm text-left transition-all font-medium flex items-center justify-between ${
                            quizSubmitted 
                              ? isCorrect 
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                                : isSelected 
                                  ? 'bg-rose-50 border-rose-300 text-rose-700'
                                  : 'bg-white border-slate-100 text-slate-400'
                              : isSelected
                                ? 'bg-amber-50 border-amber-300 text-amber-800 shadow-sm'
                                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              {!quizSubmitted ? (
                <button 
                  onClick={() => setQuizSubmitted(true)}
                  className="w-full py-3 bg-slate-900 text-white rounded-xl font-semibold text-sm shadow-md hover:bg-slate-800 transition-colors"
                >
                  Confirmar Respostas
                </button>
              ) : (
                <button 
                  onClick={() => { setQuizAnswers({}); setQuizSubmitted(false); }}
                  className="w-full py-3 bg-slate-100 text-slate-600 rounded-xl font-semibold text-sm hover:bg-slate-200 transition-colors"
                >
                  Refazer Quiz
                </button>
              )}
            </div>
          )}
        </div>

        {/* Notes Interactive Area */}
        {pages[currentPage].type === 'content' && (
          <div className="mt-8 pt-6 border-t border-slate-100 w-full">
            <div className="flex items-center gap-2 mb-3 text-slate-400">
              <MessageCircle className="w-4 h-4" />
              <label className="text-xs font-bold uppercase tracking-wider">Anotações do Pai:</label>
            </div>
            
            {notes[currentPage] && (
              <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-100 text-sm text-amber-900 mb-3 italic">
                "{notes[currentPage]}"
              </div>
            )}
            
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Escreve aqui uma nota importante..." 
                value={currentNote}
                onChange={(e) => setCurrentNote(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
              <button 
                onClick={saveNote}
                className="px-4 py-2 bg-amber-500 text-white rounded-xl font-semibold text-sm hover:bg-amber-600 transition-colors shadow-sm"
              >
                Salvar
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Navigation Footer */}
      <footer className="w-full max-w-xl flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="flex-1 py-3.5 bg-white border border-slate-200 rounded-2xl font-bold text-sm text-slate-600 flex items-center justify-center gap-1 shadow-sm hover:bg-slate-50 disabled:opacity-40 transition-all"
        >
          <ChevronLeft className="w-4 h-4" /> Anterior
        </button>
        
        <div className="text-xs font-bold text-slate-400 tracking-widest uppercase px-2 bg-white h-12 flex items-center rounded-2xl border border-slate-100 shadow-sm">
          {currentPage + 1} / {pages.length}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === pages.length - 1}
          className="flex-1 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-1 shadow-md shadow-amber-500/10 hover:brightness-105 disabled:opacity-40 transition-all"
        >
          Próximo <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
}

