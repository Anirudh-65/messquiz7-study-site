import React from 'react';
import { Book, Droplet, Leaf, Beaker, Network } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';

const StudyGuide = () => {
  return (
    <div className="study-guide">
      <div className="card">
        <h1 className="text-accent" style={{ fontSize: '2.5rem', fontWeight: 700 }}>Comprehensive Study Guide: Nutrient Cycles & Stoichiometry</h1>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
          An in-depth guide covering Notebook 13 (Nutrient Cycle) and Notebook 14 (Ecological Stoichiometry). 
          This includes the full underlying theory, complete mathematical formulations, ecological insights, and detailed models required for tomorrow's quiz.
        </p>
      </div>

      <div className="card animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h2 className="section-title"><Droplet size={24} /> PART A: NUTRIENT CYCLES (Notebook 13)</h2>
        
        <h3>1. The Grand Aim of Earth System Science</h3>
        <p>
          "The grand aim of all science is to cover the greatest number of empirical facts by logical deduction from the smallest number of hypotheses or axioms." — <em>Albert Einstein</em>
        </p>
        <p>
          The main guiding idea of Earth system studies is that the Earth system evolves due to the <strong>dispersion and transformation of solar and radiogenic energy</strong>. This energy drives regulated material cycles from atomic to planetary scales, which ultimately generate and sustain life forms of increasing complexity. For example, the Carbon cycle is intimately linked to the energy cycle because compounds like glucose (<InlineMath math="C_6H_{12}O_6" />) store the very energy that life forms utilize.
        </p>

        <h3>2. Building Blocks of Life & Bulk Nutrients</h3>
        <p>Living organisms require specific combinations of elements to build their biological machinery. However, not all elements are considered "nutrients" in the ecological sense. Nitrogen (N) and Phosphorus (P) are <strong>bulk nutrients</strong> because they are often the limiting factors for growth in ecosystems.</p>
        
        <table style={{ width: '100%', marginBottom: '2rem' }}>
          <thead>
            <tr>
              <th>Elements</th>
              <th>What they build</th>
              <th>Biological Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>C, H</strong></td>
              <td>Hydrocarbons</td>
              <td>Build <strong>cell membranes</strong></td>
            </tr>
            <tr>
              <td><strong>C, H, O</strong></td>
              <td>Carbohydrates & Sugars</td>
              <td>Primary <strong>source of energy</strong> within cells</td>
            </tr>
            <tr>
              <td><strong>C, H, O, N, S</strong></td>
              <td>Amino acids (Proteins)</td>
              <td>Perform <strong>all functional work</strong> inside the cell</td>
            </tr>
            <tr>
              <td><strong>C, H, O, N, P</strong></td>
              <td>Nucleic acids (DNA, RNA)</td>
              <td>Store and transmit <strong>genetic information</strong></td>
            </tr>
          </tbody>
        </table>
        
        <blockquote>
          <strong>GK Quiz Fact:</strong> It is exceptionally lucky that the Sun did not capture all <InlineMath math="H_2O" /> during the formation of the solar system. Without it, the Earth would not have had the hydrogen necessary to build organisms!
        </blockquote>

        <h3>3. The Nitrogen Cycle: A Complex Microbial Kingdom</h3>
        <p>
          Nitrogen gas (<InlineMath math="N_2" />) constitutes approximately 75% of the atmosphere (about <InlineMath math="386 \times 10^{13}" /> tonnes). Despite its massive abundance, it cannot be assimilated directly by most organisms in its elemental form, making it a critical limiting factor for growth. The cycle relies heavily on specific bacteria to transform nitrogen into usable forms.
        </p>
        
        <h4>Essential Chemical Reactions:</h4>
        <ul>
          <li style={{ marginBottom: '1rem' }}>
            <strong>1. Nitrogen Fixation (Cyanobacteria):</strong> This is the crucial first step where atmospheric nitrogen is converted into biological utility. The <strong>first product</strong> formed is Ammonia (<InlineMath math="NH_3" />).
            <BlockMath math="N_2 + 8H^+ + 8e^- \rightarrow 2NH_3 + H_2" />
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>2. Ammonia to Ammonium:</strong> In water, ammonia rapidly converts to ammonium.
            <BlockMath math="NH_3 + H_2O \leftrightarrow NH_4^+ + OH^-" />
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>3. Nitrification (Step 1 by Nitrosomonas):</strong> Ammonium is oxidized into Nitrite.
            <BlockMath math="2NH_4^+ + 3O_2 \rightarrow 2NO_2^- + 4H^+ + 2H_2O" />
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>4. Nitrification (Step 2 by Nitrobacter):</strong> Nitrite is oxidized into Nitrate.
            <BlockMath math="2NO_2^- + O_2 \rightarrow 2NO_3^-" />
          </li>
        </ul>
        <p><strong>Note for Plants & Animals:</strong> Plants primarily utilize soil nitrogen as inorganic ammonium (<InlineMath math="NH_4^+" />) and nitrate (<InlineMath math="NO_3^-" />) ions for protein synthesis. Animals, in turn, rely entirely on plants as their main nitrogen source.</p>

        <h3>4. The NPZ (Nutrient-Phytoplankton-Zooplankton) Model</h3>
        <p>
          The NPZ model is the foundational framework for modeling marine plankton dynamics. It tracks the flow of nitrogen (or another limiting nutrient) between three compartments: 
          dissolved <strong>Nutrients (N)</strong>, primary producing <strong>Phytoplankton (P)</strong>, and grazing <strong>Zooplankton (Z)</strong>.
        </p>
        
        <h4>Simple Plankton Model (Logistic / Lotka-Volterra type):</h4>
        <p>Before introducing nutrients, the interaction between P and Z is modeled via logistic equations:</p>
        <BlockMath math="\frac{dP}{dt} = bP - k_1PZ" />
        <BlockMath math="\frac{dZ}{dt} = k_2PZ - mZ - k_3Z^2" />
        <p>Here, <InlineMath math="b" /> is the net growth of P, <InlineMath math="m" /> is Z mortality, <InlineMath math="k_1" /> is grazing rate, <InlineMath math="k_2" /> is the conversion efficiency, and <InlineMath math="k_3" /> represents zooplankton self-predation.</p>

        <h4>Full NPZ Model with Ivlev Grazing:</h4>
        <p>When extending the model to include Nutrient dynamics (<InlineMath math="N" />), Michaelis-Menten kinetics are used for nutrient uptake, and Ivlev formulation is used for grazing:</p>
        <BlockMath math="\frac{dP}{dt} = \frac{V_m N P}{k_s + N} - rP - Z R_m(1 - e^{-\Lambda P})" />
        <BlockMath math="\frac{dZ}{dt} = -mZ + (1-\gamma)Z R_m(1 - e^{-\Lambda P})" />
        <BlockMath math="\frac{dN}{dt} = -\frac{V_m N P}{k_s + N} + rP + mZ + \gamma Z R_m(1 - e^{-\Lambda P})" />
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }}>
          <li><InlineMath math="V_m" /> : Maximum nutrient uptake rate</li>
          <li><InlineMath math="k_s" /> : Half-saturation constant for nutrient uptake</li>
          <li><InlineMath math="R_m" /> : Maximum grazing rate</li>
          <li><InlineMath math="\Lambda" /> : Ivlev constant shaping the grazing curve</li>
          <li><InlineMath math="\gamma" /> : Fraction of grazed food that is unassimilated and immediately excreted back to nutrients</li>
        </ul>

        <h4>Mayzaud-Poulet Grazing Modification:</h4>
        <p>An alternative grazing formulation that makes the grazing rate proportional to phytoplankton density. The Ivlev term <InlineMath math="R_m(1 - e^{-\Lambda P})" /> is replaced entirely by <InlineMath math="R_m \Lambda P(1 - e^{-\Lambda P})" />.</p>

        <h3>5. Holling Type Functional Responses (Crucial for Quizzes)</h3>
        <p>Functional responses define exactly how the consumption rate of a predator (P) changes as a function of prey density (F).</p>
        <ul>
          <li><strong>Type I:</strong> <InlineMath math="P = aF" /> — Linear response. Consumption increases indefinitely without saturation.</li>
          <li><strong>Type II:</strong> <InlineMath math="P = \frac{aF}{1 + ahF}" /> — Saturating response. The rate is limited by handling time (<InlineMath math="h" />).</li>
          <li><strong>Type III:</strong> <InlineMath math="P = \frac{bF^2}{1 + cF + bhF^2}" /> — Sigmoidal response. Predator learns or switches to this prey only when it becomes sufficiently abundant.</li>
        </ul>
        <blockquote>
          <strong>Quiz Alert:</strong> If you see an equation like <InlineMath math="P = \frac{a}{1 + bF}" />, <strong>this is NOT a Holling response</strong> because it implies the predator eats <em>less</em> when there is <em>more</em> prey, which defies ecological logic!
        </blockquote>

        <h3>6. The Phosphorus Cycle & Two-Box Ocean Model</h3>
        <p>
          Unlike Nitrogen, <strong>Phosphorus originates purely from the Lithosphere (rocks)</strong>. There is absolutely no atmospheric reservoir for phosphorus. It enters the marine ecosystem exclusively via river weathering.
        </p>
        <h4>Two-Box Model Equations (Upper vs Deep Ocean):</h4>
        <p>The ocean is modeled as a Surface Box (Volume <InlineMath math="V_1" />) and a Deep Box (Volume <InlineMath math="V_2" />). Water cycles between them via overturning flux (<InlineMath math="F_O" />), and rivers input phosphorus (<InlineMath math="F_R x_R" />).</p>
        <p>With biological production added:</p>
        <BlockMath math="\frac{dx_1}{dt} = \frac{F_R x_R - F_O x_1 + F_O x_2 - \text{production}}{V_1}" />
        <BlockMath math="\frac{dx_2}{dt} = \frac{F_O x_1 - F_O x_2 + 0.99 \times \text{production}}{V_2}" />
        <p>Notice the <InlineMath math="0.99" /> factor? This indicates that <strong>99% of dead biological particulate matter remains in the deep ocean</strong>, while only 1% is permanently lost to sediments.</p>
      </div>

      <div className="card animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="section-title"><Leaf size={24} /> PART B: ECOLOGICAL STOICHIOMETRY (Notebook 14)</h2>
        
        <h3>7. What is Ecological Stoichiometry?</h3>
        <p>
          Ecological stoichiometry is the study of the balance of <strong>energy and multiple chemical elements (mass)</strong> in ecological interactions. It relies heavily on the <strong>Law of Conservation of Mass</strong>. It helps us understand how the elemental mismatches between a consumer and its food affect growth, nutrient cycling, and ecosystem structure.
        </p>

        <h3>8. The Redfield Ratio (The Golden Rule of Oceanography)</h3>
        <p>
          Discovered by Alfred Redfield in 1934, marine phytoplankton and the deep ocean universally maintain a remarkably consistent atomic ratio of Carbon, Nitrogen, and Phosphorus.
        </p>
        <div style={{ backgroundColor: 'var(--surface-color)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-color)', margin: '1rem 0', textAlign: 'center' }}>
          <BlockMath math="\text{C : N : P} = 106 : 16 : 1" />
        </div>
        <p><strong>Derived Ratios you MUST know:</strong></p>
        <ul>
          <li><strong>C / P = 106</strong> (Often approximated as 100 on multiple choice quizzes)</li>
          <li><strong>N / P = 16</strong></li>
          <li><strong>C / N = 106 / 16 \approx 6.6</strong></li>
        </ul>
        <p>Because the N:P requirement is 16:1, if the environment provides a ratio less than 16, Nitrogen becomes the limiting nutrient (which is very common in oceans).</p>

        <h3>9. Sterner Nutrient Recycling Model (Strict Homeostasis)</h3>
        <p>
          This model determines how zooplankton recycle nutrients back into the ecosystem based on what they eat. The foundational assumption is <strong>strict homeostasis</strong>: the grazers (zooplankton) maintain a completely rigid, fixed internal N:P ratio regardless of the nutritional quality of their food.
        </p>
        <p>If the food (phytoplankton) has an N:P ratio (<InlineMath math="f_P" />) and the zooplankton has a rigid body ratio (<InlineMath math="b_Z" />), the zooplankton must differentially excrete the excess nutrient.</p>
        <BlockMath math="s_R = f_P \frac{1 - a_N}{1 - a_P}" />
        <p>Where <InlineMath math="s_R" /> is the ratio of N:P released back into the water, and <InlineMath math="a_N, a_P" /> are the accumulation efficiencies. If the food is poor in Nitrogen (<InlineMath math="f_P < b_Z" />), the grazer maximizes Nitrogen retention (<InlineMath math="a_N = L" />) and excretes excess Phosphorus, causing a nonlinear recycling relationship.</p>

        <h3>10. Stoichiometric Producer-Grazer Model (Loladze, Kuang & Elser)</h3>
        <p>
          Traditional predator-prey models assume the environment has a constant carrying capacity <InlineMath math="K" /> dictated by energy (light). However, stoichiometric models recognize that <strong>nutrients</strong> can also set the carrying capacity.
        </p>
        <p>The carrying capacity in this model becomes a minimum function of either energy or available phosphorus (<InlineMath math="P" />):</p>
        <BlockMath math="\text{Carrying Capacity} = \min\left(K, \frac{P - \theta y}{q}\right)" />
        <p>
          Where <InlineMath math="\theta" /> is the grazer's P:C ratio, <InlineMath math="q" /> is the producer's minimum P:C ratio, and <InlineMath math="y" /> is grazer biomass. The key takeaway: <strong>The system is governed by Liebig's Law of the Minimum — whichever factor (Light/Energy vs. Phosphorus/Nutrient) is more restrictive will dictate the carrying capacity.</strong>
        </p>
      </div>

      <div className="card animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h2 className="section-title"><Beaker size={24} /> PART C: CHEMICAL KINETICS & AUTOCATALYSIS</h2>
        
        <h3>11. Reaction Rates & Equilibrium</h3>
        <p>For a standard chemical reaction <InlineMath math="A + B \rightarrow C" />, the reaction rate is defined by the rate of product formation:</p>
        <BlockMath math="\text{Rate} = \frac{d[C]}{dt} = -\frac{d[A]}{dt} = -\frac{d[B]}{dt}" />
        <p>For a reversible reaction <InlineMath math="aA \rightleftharpoons bB" />, the equilibrium constant <InlineMath math="K" /> is the ratio of products to reactants raised to their stoichiometric coefficients:</p>
        <BlockMath math="K = \frac{[B]^b}{[A]^a}" />

        <h3>12. Autocatalysis & Chemical Predators</h3>
        <p>An autocatalytic reaction is one where a chemical species catalyzes its own formation. In the reaction <InlineMath math="aA + bB \rightarrow cA + dD" />, it is autocatalytic if <InlineMath math="a < c" /> (meaning A is amplified by the reaction).</p>
        <p>Consider the system:</p>
        <BlockMath math="A + X \rightarrow 2X \quad (\text{X grows by consuming A})" />
        <p>If the total concentration is conserved such that <InlineMath math="[A] + [X] = c" />, substituting <InlineMath math="[A] = c - [X]" /> into the rate equation gives:</p>
        <BlockMath math="\frac{d[X]}{dt} = k[X](c - [X])" />
        <p>This is exactly the famous <strong>Logistic Equation</strong>, where the carrying capacity is mathematically equal to <InlineMath math="c" /> (the total concentration of the system).</p>
        <p><strong>Chemical Predator-Prey:</strong> If you add <InlineMath math="X + Y \rightarrow 2Y" /> and <InlineMath math="Y \rightarrow 0" /> to the above, <InlineMath math="Y" /> acts as the "predator" consuming <InlineMath math="X" /> (the "prey").</p>
      </div>

      <div className="card animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="section-title"><Network size={24} /> PART D: RAPID FIRE FACTS (GK & Theory)</h2>
        <table style={{ width: '100%', marginBottom: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
          <tbody>
            <tr>
              <td style={{ width: '60%' }}>Which element is exclusively considered a "nutrient" over C, H, O?</td>
              <td><strong className="text-accent">Nitrogen (N)</strong></td>
            </tr>
            <tr>
              <td>Which molecule drives energy production in eukaryotic cells?</td>
              <td><strong className="text-accent">Oxygen (<InlineMath math="O_2" />)</strong></td>
            </tr>
            <tr>
              <td>What is the absolute first compound formed during nitrogen fixation?</td>
              <td><strong className="text-accent">Ammonia (<InlineMath math="NH_3" />) / Ammonium (<InlineMath math="NH_4^+" />)</strong></td>
            </tr>
            <tr>
              <td>Where does the ocean's Phosphorus fundamentally originate from?</td>
              <td><strong className="text-accent">The Lithosphere (Rocks)</strong></td>
            </tr>
            <tr>
              <td>What is the minimum number of components to model the marine nutrient cycle?</td>
              <td><strong className="text-accent">Three (N, P, Z)</strong></td>
            </tr>
            <tr>
              <td>In the chemical reaction A + X → 2X, what is the carrying capacity?</td>
              <td><strong className="text-accent">Total Concentration (c)</strong></td>
            </tr>
            <tr>
              <td>Is <InlineMath math="\tanh(-I/I_0)" /> a valid saturation response for phytoplankton?</td>
              <td><strong className="text-accent">No</strong> (It yields negative values for positive light)</td>
            </tr>
          </tbody>
        </table>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '2rem' }}>
          <em>Master these theoretical foundations, the exact structure of the equations, and the biological meaning behind the math, and you will ace the quiz tomorrow. Good luck! 🚀</em>
        </p>
      </div>
    </div>
  );
};

export default StudyGuide;
