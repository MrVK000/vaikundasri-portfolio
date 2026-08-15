import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../reveal.directive';
import { TECHNICAL_SKILLS, FINANCE_SKILLS, MARKETING_SKILLS, KEY_SKILLS } from '../../data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section id="skills" class="section skills-section">
      <div class="section-inner">
        <div class="section-header" revealOnScroll>
          <span class="section-tag">Capabilities</span>
          <h2 class="section-title">Skills</h2>
        </div>
        <div class="skills-grid" revealOnScroll>

          <div class="skills-group glass-card">
            <h3 class="skills-group-title">
              <span class="group-icon">📊</span> Marketing Skills
            </h3>
            <div class="skill-tags">
              @for (skill of marketingSkills; track skill; let i = $index) {
                <span class="skill-tag marketing" [style.--delay]="i * 0.07 + 's'">{{ skill }}</span>
              }
            </div>
          </div>

          <div class="skills-group glass-card">
            <h3 class="skills-group-title">
              <span class="group-icon">💰</span> Finance Skills
            </h3>
            <div class="skill-tags">
              @for (skill of financeSkills; track skill; let i = $index) {
                <span class="skill-tag finance" [style.--delay]="i * 0.07 + 's'">{{ skill }}</span>
              }
            </div>
          </div>

          <div class="skills-group glass-card">
            <h3 class="skills-group-title">
              <span class="group-icon">💻</span> Technical Skills
            </h3>
            <div class="skill-tags">
              @for (skill of techSkills; track skill; let i = $index) {
                <span class="skill-tag tech" [style.--delay]="i * 0.08 + 's'">{{ skill }}</span>
              }
            </div>
          </div>

          <div class="skills-group glass-card">
            <h3 class="skills-group-title">
              <span class="group-icon">🌟</span> Key Skills
            </h3>
            <div class="skill-tags">
              @for (skill of keySkills; track skill; let i = $index) {
                <span class="skill-tag key" [style.--delay]="i * 0.1 + 's'">{{ skill }}</span>
              }
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  techSkills = TECHNICAL_SKILLS;
  financeSkills = FINANCE_SKILLS;
  marketingSkills = MARKETING_SKILLS;
  keySkills = KEY_SKILLS;
}
