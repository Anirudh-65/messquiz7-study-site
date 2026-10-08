import React, { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';

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
          <div className="options-list">
            {options.map((opt, i) => (
              <React.Fragment key={i}>
                {opt}
              </React.Fragment>
            ))}
          </div>
          
          <div className="correct-answer">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              <CheckCircle2 size={18} /> Correct Answer: {correctAnswer}
            </div>
            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Quiz = () => {
  const quizData = [
    {
      question: <span>Which is not a Holling type response of predator(P) to prey(F)? a, b, h, and c are constant.</span>,
      options: [
        <span>a) <InlineMath math="P = aF" /></span>, 
        <span>b) <InlineMath math="P = \frac{aF}{1 + ahF}" /></span>, 
        <span>c) <InlineMath math="P = \frac{bF^2}{1 + cF + bhF^2}" /></span>, 
        <span>d) <InlineMath math="P = \frac{a}{1 + bF}" /></span>
      ],
      correctAnswer: "d",
      explanation: "This is NOT a Holling type — it decreases as prey F increases, which makes no ecological sense for a predator response. Holling Type I, II, III are options a, b, c respectively."
    },
    {
      question: <span>Which is not a saturation response of phytoplankton to solar radiation (<InlineMath math="I" />), <InlineMath math="I_0" /> a constant:</span>,
      options: [
        <span>a) <InlineMath math="I/I_0" /></span>, 
        <span>b) <InlineMath math="\frac{I}{I + I_0}" /></span>, 
        <span>c) <InlineMath math="1 - \exp(-I/I_0)" /></span>, 
        <span>d) <InlineMath math="\tanh(-I/I_0)" /></span>
      ],
      correctAnswer: "d",
      explanation: "The negative argument makes tanh return negative values for positive I — not a valid saturation response."
    },
    {
      question: <span>Which is closest to correct Redfield ratio of carbon(C), nitrogen(N) and phosphorus(P) found in a phytoplankton?</span>,
      options: [
        "a) C/P = 100", 
        "b) C/N = 50", 
        "c) N/P = 40", 
        "d) C/P = 90"
      ],
      correctAnswer: "a) C/P = 100",
      explanation: "The Redfield ratio is C:N:P = 106:16:1. So C/P = 106 ≈ 100 (closest)."
    },
    {
      question: <span>Which in the following elements of life is nutrient?</span>,
      options: ["a) C", "b) H", "c) O", "d) N"],
      correctAnswer: "d) N",
      explanation: "C, H, O are readily available from CO₂ and H₂O. Nitrogen is the one that acts as a nutrient — it's a limiting factor for growth."
    },
    {
      question: <span>Which molecule is used for energy production in eukaryote cell?</span>,
      options: [
        <span>a) <InlineMath math="H_2" /></span>, 
        <span>b) <InlineMath math="O_2" /></span>, 
        <span>c) <InlineMath math="P_4" /></span>, 
        <span>d) <InlineMath math="N_2" /></span>
      ],
      correctAnswer: "b",
      explanation: "Eukaryotic cells use O₂ in oxidative phosphorylation (cellular respiration) to produce ATP energy."
    },
    {
      question: <span>Which compound is formed first in nitrogen fixation?</span>,
      options: [
        <span>a) <InlineMath math="NO_3^-" /></span>, 
        <span>b) <InlineMath math="NO_2^-" /></span>, 
        <span>c) <InlineMath math="NH_4^+" /></span>, 
        <span>d) <InlineMath math="NO" /></span>
      ],
      correctAnswer: "c",
      explanation: "Nitrogen fixation: N₂ + 8H⁺ + 8e⁻ → 2NH₃ + H₂. The ammonia (NH₃) quickly becomes ammonium (NH₄⁺) in water. This is the first product."
    },
    {
      question: <span>Nutrient P's origin is in which component of earth system?</span>,
      options: ["a) Atmosphere", "b) Lithosphere", "c) Upper ocean water", "d) Deep ocean water"],
      correctAnswer: "b) Lithosphere",
      explanation: "Phosphorus has no atmospheric reservoir (unlike nitrogen). It originates from rocks (lithosphere) and enters the ocean through river weathering."
    },
    {
      question: <span>In the following reaction <InlineMath math="A + B \rightarrow C" />, which gives reaction rate?</span>,
      options: [
        <span>a) <InlineMath math="\frac{d[A]}{dt}" /></span>, 
        <span>b) <InlineMath math="\frac{d[B]}{dt}" /></span>, 
        <span>c) <InlineMath math="\frac{d[C]}{dt}" /></span>, 
        <span>d) <InlineMath math="-\frac{d[C]}{dt}" /></span>
      ],
      correctAnswer: "c",
      explanation: "Reaction rate is the rate of product formation, which is d[C]/dt (positive)."
    },
    {
      question: <span>In the following reaction <InlineMath math="aA + bB \rightarrow cA + dD" />, what choice will make this reaction autocatalytic?</span>,
      options: [
        <span>a) <InlineMath math="a < b" /></span>, 
        <span>b) <InlineMath math="a < c" /></span>, 
        <span>c) <InlineMath math="a < d" /></span>, 
        <span>d) <InlineMath math="b < d" /></span>
      ],
      correctAnswer: "b",
      explanation: "An autocatalytic reaction is one where a product catalyzes its own formation. If a < c, it means species A appears MORE on the product side than the reactant side."
    },
    {
      question: <span>Following autocatalytic reaction: <InlineMath math="A + X \rightarrow 2X" />, <InlineMath math="[A] + [X] = c" /> — gives logistic equation for <InlineMath math="[X]" />. What is carrying capacity?</span>,
      options: [
        <span>a) <InlineMath math="[A]" /></span>, 
        <span>b) <InlineMath math="[X]" /></span>, 
        <span>c) <InlineMath math="2[X]" /></span>, 
        <span>d) <InlineMath math="c" /></span>
      ],
      correctAnswer: "d",
      explanation: "Since [A] + [X] = c, we can write [A] = c - [X]. The rate equation becomes d[X]/dt = k[X](c - [X]), which is exactly the logistic equation with carrying capacity = c."
    },
    {
      question: <span>In a chemical reaction <InlineMath math="aA \rightarrow bB" />, which is correct form of equilibrium constant, K?</span>,
      options: [
        <span>a) <InlineMath math="K = \frac{a[A]}{b[B]}" /></span>, 
        <span>b) <InlineMath math="K = \frac{[A]^a}{[B]^b}" /></span>, 
        <span>c) <InlineMath math="K = \frac{b[B]}{a[A]}" /></span>, 
        <span>d) <InlineMath math="K = \frac{[B]^b}{[A]^a}" /></span>
      ],
      correctAnswer: "d",
      explanation: "The equilibrium constant is products over reactants, each raised to the power of their stoichiometric coefficients."
    }
  ];

  return (
    <div className="quiz-section">
      <div className="card">
        <h1 className="text-accent" style={{ fontSize: '2.5rem', fontWeight: 700 }}>Interactive Quiz</h1>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
          Test your knowledge on Nutrient Cycles & Ecological Stoichiometry. 
          Click on a question to reveal the options and correct answer.
        </p>
      </div>

      <div className="quiz-questions animate-fade-in" style={{ animationDelay: '0.1s' }}>
        {quizData.map((q, idx) => {
          
          // Helper to determine if this option is the correct one based on prefix (a, b, c, d)
          const isCorrect = (opt) => {
             if (typeof opt === 'string') {
               return opt.startsWith(q.correctAnswer) || opt === q.correctAnswer;
             }
             if (opt.props && opt.props.children) {
               return opt.props.children[0].startsWith(q.correctAnswer);
             }
             return false;
          }

          return (
            <div key={idx} className={`accordion`}>
              <QuizAccordion 
                index={idx + 1}
                question={q.question}
                options={q.options.map((opt, i) => (
                  <div key={i} style={{ 
                    padding: '0.75rem',
                    border: '1px solid',
                    borderColor: isCorrect(opt) ? 'var(--accent-color)' : 'var(--border-color)',
                    backgroundColor: isCorrect(opt) ? 'rgba(217, 4, 41, 0.05)' : 'var(--bg-color)',
                    borderRadius: '6px',
                    marginBottom: '0.5rem'
                  }}>
                    {opt}
                  </div>
                ))}
                correctAnswer={q.correctAnswer.toUpperCase()}
                explanation={q.explanation}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
