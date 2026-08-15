import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../reveal.directive';
import { PERSONAL_DETAILS } from '../../data';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section id="personal" class="section personal-section">
      <div class="section-inner">
        <div class="section-header" revealOnScroll>
          <span class="section-tag">Details</span>
          <h2 class="section-title">Personal Information</h2>
        </div>
        <div class="personal-grid" revealOnScroll>
          @for (detail of details; track detail.label) {
            <div class="personal-item glass-card">
              <span class="personal-icon">{{ detail.icon }}</span>
              <div class="personal-content">
                <span class="personal-label">{{ detail.label }}</span>
                <span class="personal-value">{{ detail.value }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './personal.scss'
})
export class PersonalComponent {
  details = PERSONAL_DETAILS;
}
