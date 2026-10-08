import React, { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

const QuizAccordion = ({ question, options, correctAnswer, explanation, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="accordion-title">
          <span className="text-accent" style={{ marginRight: '0.5rem' }}>Q{index}.</span>
          {question}
        </div>
        <ChevronDown className="accordion-icon" size={20} />
      </div>
      
      {isOpen && (
        <div className="accordion-content">
          <ul className="options-list">
            {options.map((opt, i) => (
              <li key={i} style={{ 
                borderColor: opt.trim() === correctAnswer.trim() ? 'var(--accent-color)' : 'var(--border-color)',
                backgroundColor: opt.trim() === correctAnswer.trim() ? 'rgba(230, 32, 32, 0.05)' : 'var(--bg-color)'
              }}>
                {opt}
              </li>
            ))}
          </ul>
          
          <div className="correct-answer">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              <CheckCircle2 size={18} /> Correct Answer: {correctAnswer}
            </div>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)' }}>{explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Quiz = () => {
  const quizData = [
    {
      question: "Which is not a Holling type response of predator(P) to prey(F)? a, b, h, and c are constant.",
      options: ["a) P = aF", "b) P = aF/(1 + ahF)", "c) P = bF²/(1 + cF + bhF²)", "d) P = a/(1 + bF)"],
      correctAnswer: "d) P = a/(1 + bF)",
      explanation: "This is NOT a Holling type — it decreases as prey F increases, which makes no ecological sense for a predator response. Holling Type I, II, III are options a, b, c respectively."
    },
    {
      question: "Which is not a saturation response of phytoplankton to solar radiation (I), I₀ a constant:",
      options: ["a) I/I₀", "b) I/(I + I₀)", "c) 1 - exp(-I/I₀)", "d) tanh(-I/I₀)"],
      correctAnswer: "d) tanh(-I/I₀)",
      explanation: "The negative argument makes tanh return negative values for positive I — not a valid saturation response."
    },
    {
      question: "Which is closest to correct Redfield ratio of carbon(C), nitrogen(N) and phosphorus(P) found in a phytoplankton?",
      options: ["a) C/P = 100", "b) C/N = 50", "c) N/P = 40", "d) C/P = 90"],
      correctAnswer: "a) C/P = 100",
      explanation: "The Redfield ratio is C:N:P = 106:16:1. So C/P = 106 ≈ 100 (closest)."
    },
    {
      question: "Which in the following elements of life is nutrient?",
      options: ["a) C", "b) H", "c) O", "d) N"],
      correctAnswer: "d) N",
      explanation: "C, H, O are readily available from CO₂ and H₂O. Nitrogen is the one that acts as a nutrient — it's a limiting factor for growth."
    },
    {
      question: "Which molecule is used for energy production in eukaryote cell?",
      options: ["a) H₂", "b) O₂", "c) P₄", "d) N₂"],
      correctAnswer: "b) O₂",
      explanation: "Eukaryotic cells use O₂ in oxidative phosphorylation (cellular respiration) to produce ATP energy."
    },
    {
      question: "Which compound is formed first in nitrogen fixation?",
      options: ["a) NO₃", "b) NO₂", "c) NH₄", "d) NO"],
      correctAnswer: "c) NH₄",
      explanation: "Nitrogen fixation: N₂ + 8H⁺ + 8e⁻ → 2NH₃ + H₂. The ammonia (NH₃) quickly becomes ammonium (NH₄⁺) in water. This is the first product."
    },
    {
      question: "Nutrient P's origin is in which component of earth system?",
      options: ["a) Atmosphere", "b) Lithosphere", "c) Upper ocean water", "d) Deep ocean water"],
      correctAnswer: "b) Lithosphere",
      explanation: "Phosphorus has no atmospheric reservoir (unlike nitrogen). It originates from rocks (lithosphere) and enters the ocean through river weathering."
    },
    {
      question: "In the following reaction A + B → C, which gives reaction rate?",
      options: ["a) d[A]/dt", "b) d[B]/dt", "c) d[C]/dt", "d) -d[C]/dt"],
      correctAnswer: "c) d[C]/dt",
      explanation: "Reaction rate is the rate of product formation, which is d[C]/dt (positive)."
    },
    {
      question: "In the following reaction aA + bB → cA + dD, what choice will make this reaction autocatalytic?",
      options: ["a) a < b", "b) a < c", "c) a < d", "d) b < d"],
      correctAnswer: "b) a < c",
      explanation: "An autocatalytic reaction is one where a product catalyzes its own formation. If a < c, it means species A appears MORE on the product side than the reactant side."
    },
    {
      question: "Following autocatalytic reaction: A + X → 2X, [A] + [X] = c — gives logistic equation for [X]. What is carrying capacity?",
      options: ["a) [A]", "b) [X]", "c) 2[X]", "d) c"],
      correctAnswer: "d) c",
      explanation: "Since [A] + [X] = c, we can write [A] = c - [X]. The rate equation becomes d[X]/dt = k[X](c - [X]), which is exactly the logistic equation with carrying capacity = c."
    },
    {
      question: "In a chemical reaction aA → bB, which is correct form of equilibrium constant, K?",
      options: ["a) K = a[A]/(b[B])", "b) K = [A]^a / [B]^b", "c) K = b[B]/(a[A])", "d) K = [B]^b / [A]^a"],
      correctAnswer: "d) K = [B]^b / [A]^a",
      explanation: "The equilibrium constant is products over reactants, each raised to the power of their stoichiometric coefficients."
    }
  ];

  return (
    <div className="quiz-section">
      <div className="card">
        <h1 className="text-accent">Interactive Quiz</h1>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
          Test your knowledge on Nutrient Cycles & Ecological Stoichiometry. 
          Click on a question to reveal the options and correct answer.
        </p>
      </div>

      <div className="quiz-questions animate-fade-in" style={{ animationDelay: '0.1s' }}>
        {quizData.map((q, idx) => (
          <QuizAccordion 
            key={idx}
            index={idx + 1}
            question={q.question}
            options={q.options}
            correctAnswer={q.correctAnswer}
            explanation={q.explanation}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
