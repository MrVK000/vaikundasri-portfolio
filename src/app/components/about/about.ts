import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../reveal.directive';
import { NAME, CAREER_OBJECTIVE, TECHNICAL_SKILLS, FINANCE_SKILLS, MARKETING_SKILLS, KEY_SKILLS } from '../../data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section id="about" class="section about-section">
      <div class="section-inner">
        <div class="section-header" revealOnScroll>
          <span class="section-tag">Who I Am</span>
          <h2 class="section-title">About Me</h2>
        </div>
        <div class="about-grid" revealOnScroll>
          <div class="about-card glass-card">
            <div class="about-icon">🎯</div>
            <h3>Career Objective</h3>
            <p>{{ objective }}</p>
          </div>
          <div class="about-card glass-card">
            <div class="about-icon">👤</div>
            <h3>Professional Profile</h3>
            <p>
              I am <strong>{{ name }}</strong>, an MBA student with dual specialization in
              <strong>Marketing &amp; Finance</strong> at MEPCO Schlenk Engineering College, Sivakasi —
              a premier technical institution known for academic excellence.
              With a strong foundation in Business Administration, hands-on research experience,
              and exposure to both financial analysis and marketing strategy,
              I bring analytical thinking, leadership, and a drive to create measurable business impact.
            </p>
          </div>
          <div class="about-card glass-card highlight-card">
            <div class="about-highlights">
              <div class="highlight-item">
                <span class="highlight-num">{{ edu }}+</span>
                <span class="highlight-label">Years of Education</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-num">{{ certs }}</span>
                <span class="highlight-label">Certifications</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-num">{{ skills }}</span>
                <span class="highlight-label">Core Skills</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-num">2</span>
                <span class="highlight-label">Specializations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.scss'
})
export class AboutComponent {
  name = NAME;
  objective = CAREER_OBJECTIVE;
  edu = 16;
  certs = 3;
  skills = TECHNICAL_SKILLS.length + FINANCE_SKILLS.length + MARKETING_SKILLS.length + KEY_SKILLS.length;
}
