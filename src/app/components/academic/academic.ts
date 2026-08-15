import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../reveal.directive';
import { EDUCATION } from '../../data';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section id="academic" class="section academic-section">
      <div class="section-inner">
        <div class="section-header" revealOnScroll>
          <span class="section-tag">Education</span>
          <h2 class="section-title">Academic Journey</h2>
        </div>
        <div class="timeline" revealOnScroll>
          @for (item of education; track item.level; let i = $index) {
            <div class="timeline-item" [style.--delay]="i * 0.15 + 's'">
              <div class="timeline-connector">
                <div class="timeline-dot">{{ item.icon }}</div>
                @if (!$last) { <div class="timeline-line"></div> }
              </div>
              <div class="timeline-card glass-card">
                <div class="tl-header">
                  <span class="tl-level">{{ item.level }}</span>
                  <span class="tl-year">{{ item.year }}</span>
                </div>
                <p class="tl-institution">{{ item.institution }}</p>
                <div class="tl-marks">
                  <span class="marks-label">Score</span>
                  <span class="marks-value">{{ item.marks }}</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './academic.scss'
})
export class AcademicComponent {
  education = EDUCATION;
}
