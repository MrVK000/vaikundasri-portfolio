import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../reveal.directive';
import { WORK_EXPERIENCE } from '../../data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section id="experience" class="section experience-section">
      <div class="section-inner">
        <div class="section-header" revealOnScroll>
          <span class="section-tag">Work</span>
          <h2 class="section-title">Work Experience</h2>
        </div>
        <div class="exp-card glass-card" revealOnScroll>
          <div class="exp-header">
            <div class="exp-logo">🏭</div>
            <div class="exp-meta">
              <h3 class="exp-company">{{ exp.company }}</h3>
              <span class="exp-type">Summer Internship / Project</span>
            </div>
            <span class="exp-duration">{{ exp.duration }}</span>
          </div>
          <div class="exp-divider"></div>
          <div class="exp-body">
            <div class="exp-label">Study Title</div>
            <p class="exp-study">{{ exp.study }}</p>
          </div>
          <div class="exp-tags">
            <span class="tag">Marketing Research</span>
            <span class="tag">Consumer Behaviour</span>
            <span class="tag">Data Analysis</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  exp = WORK_EXPERIENCE;
}
