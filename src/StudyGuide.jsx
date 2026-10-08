import React from 'react';
import { Book, Droplet, Leaf, Beaker, Network } from 'lucide-react';

const StudyGuide = () => {
  return (
    <div className="study-guide">
      <div className="card">
        <h1 className="text-accent">Quick Study Guide: Nutrient Cycles & Ecological Stoichiometry</h1>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
          Covers Notebook 13 (Nutrient Cycle) + Notebook 14 (Ecological Stoichiometry). 
          Focuses on main theory, GK-type facts, key equations, and basic numericals.
        </p>
      </div>

      <div className="card animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h2 className="section-title"><Droplet size={24} /> PART A: NUTRIENT CYCLES (Notebook 13)</h2>
        
        <h3>1. The Big Picture — Why Nutrients Matter</h3>
        <blockquote>
          <strong>Guiding Idea:</strong> Earth system evolves due to dispersion and transformation of solar and radiogenic energy, which drives regulated material cycles at atomic to planetary scales — generating and sustaining life forms of increasing complexity.
        </blockquote>
        
        <table>
          <thead>
            <tr>
              <th>Element(s)</th>
              <th>What they build</th>
              <th>Role</th>
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
              <td>Carbohydrates & sugars</td>
              <td><strong>Energy source</strong> in cells</td>
            </tr>
            <tr>
              <td><strong>C, H, O, N, S</strong></td>
              <td>Amino acids → Proteins</td>
              <td>Do <strong>all work</strong> in cells</td>
            </tr>
            <tr>
              <td><strong>C, H, O, N, P</strong></td>
              <td>Nucleic acids (DNA, RNA)</td>
              <td>Store <strong>genetic information</strong></td>
            </tr>
          </tbody>
        </table>
        
        <p className="text-secondary">
          <strong>Remember:</strong> Out of C, H, O, N — the <strong>nutrient</strong> is <strong>N</strong> (Nitrogen). C, H, O are not considered nutrients because they come from water and CO₂ easily. <strong>N and P are bulk nutrients.</strong>
        </p>

        <h3>2. Nitrogen Cycle — The Basics</h3>
        <p><strong>Nitrogen (N₂)</strong> makes up ~3/4 of the atmosphere (~386 × 10¹³ tonnes), but most organisms cannot use N₂ directly. It is a limiting factor for growth.</p>
        
        <table>
          <thead>
            <tr>
              <th>Process</th>
              <th>Reaction</th>
              <th>Organisms</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nitrogen Fixation</strong></td>
              <td>N₂ + 8H⁺ + 8e⁻ → <strong>2NH₃</strong> + H₂</td>
              <td>Cyanobacteria</td>
            </tr>
            <tr>
              <td><strong>Ammonia → Ammonium</strong></td>
              <td>NH₃ + H₂O ↔ NH₄⁺ + OH⁻</td>
              <td>—</td>
            </tr>
            <tr>
              <td><strong>Nitrification Step 1</strong></td>
              <td>2NH₄⁺ + 3O₂ → 2NO₂⁻ + 4H⁺ + 2H₂O</td>
              <td><em>Nitrosomonas</em></td>
            </tr>
            <tr>
              <td><strong>Nitrification Step 2</strong></td>
              <td>2NO₂⁻ + O₂ → 2NO₃⁻</td>
              <td><em>Nitrobacter</em></td>
            </tr>
          </tbody>
        </table>

        <h3>3. NPZ Model (Nutrient-Phytoplankton-Zooplankton)</h3>
        <p>This is a fundamental model in marine ecology. (N = Nutrient, P = Phytoplankton, Z = Zooplankton)</p>
        <div className="math-formula">
          dP/dt = f(I)g(N)P - h(P)Z - i(P)P<br/>
          dZ/dt = γ h(P)Z - j(Z)Z<br/>
          dN/dt = -f(I)g(N)P - (1-γ)h(P)Z + i(P) + j(Z)
        </div>
        <p>Where <strong>f(I)</strong> = light growth, <strong>g(N)</strong> = nutrient growth, <strong>h(P)</strong> = grazing, <strong>γ</strong> = assimilation efficiency.</p>

        <h3>4. Holling Type Functional Responses (VERY IMPORTANT)</h3>
        <ul>
          <li><strong>Type I:</strong> Pred = a·Prey (Linear)</li>
          <li><strong>Type II:</strong> Pred = a·Prey / (1 + a·h·Prey) (Saturating)</li>
          <li><strong>Type III:</strong> Pred = b·Prey² / (1 + c·Prey + b·h·Prey²) (Sigmoidal)</li>
        </ul>
      </div>

      <div className="card animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="section-title"><Leaf size={24} /> PART B: ECOLOGICAL STOICHIOMETRY (Notebook 14)</h2>
        
        <h3>8. What is Ecological Stoichiometry?</h3>
        <p>The balance of <strong>energy and mass</strong> affecting living systems. Based on the Law of Conservation of Mass.</p>

        <h3>9. The Redfield Ratio (CRITICAL CONCEPT!)</h3>
        <div className="math-formula text-accent" style={{ fontSize: '1.25rem', textAlign: 'center', fontWeight: 'bold' }}>
          C : N : P = 106 : 16 : 1
        </div>
        <ul>
          <li><strong>C/P = 106</strong> (closest to 100 on quizzes)</li>
          <li><strong>C/N ≈ 6.6</strong></li>
          <li><strong>N/P = 16</strong></li>
        </ul>

        <h3>10. Sterner Nutrient Recycling Model</h3>
        <p><strong>Key Assumption:</strong> Grazers (zooplankton) <strong>maintain their N:P ratio</strong> (strict homeostasis).</p>
        <div className="math-formula">
          R₂N = g·P_N·(1 - a_N)<br/>
          R₂P = g·P_P·(1 - a_P)<br/>
          s_R = f_P · (1 - a_N)/(1 - a_P)
        </div>

        <h3>11. Stoichiometric Producer-Grazer Model (Loladze)</h3>
        <p><strong>Key insight:</strong> The carrying capacity is limited by BOTH energy (light, K) and nutrients (P). Whichever is lower wins (min function).</p>
        <div className="math-formula">
          Carrying Capacity changes to: min(K, (P - θy)/q)
        </div>
      </div>

      <div className="card animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h2 className="section-title"><Network size={24} /> PART C & D: QUICK FACTS & NUMERICALS</h2>
        
        <table>
          <tbody>
            <tr>
              <td>Which element is a "nutrient"?</td>
              <td><strong className="text-accent">N (Nitrogen)</strong></td>
            </tr>
            <tr>
              <td>First compound in N-fixation?</td>
              <td><strong className="text-accent">NH₃ → NH₄⁺</strong></td>
            </tr>
            <tr>
              <td>Source of Phosphorus?</td>
              <td><strong className="text-accent">Lithosphere</strong> (No atmosphere reservoir)</td>
            </tr>
            <tr>
              <td>Equilibrium constant K (aA → bB)?</td>
              <td><strong className="text-accent">K = [B]^b / [A]^a</strong></td>
            </tr>
            <tr>
              <td>Autocatalytic reaction carrying capacity?</td>
              <td><strong className="text-accent">c (total concentration)</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudyGuide;
