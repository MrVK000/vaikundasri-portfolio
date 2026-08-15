import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../reveal.directive';
import { CERTIFICATIONS } from '../../data';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section id="certifications" class="section certs-section">
      <div class="section-inner">
        <div class="section-header" revealOnScroll>
          <span class="section-tag">Achievements</span>
          <h2 class="section-title">Certifications</h2>
        </div>
        <div class="certs-grid" revealOnScroll>
          @for (cert of certs; track cert.name; let i = $index) {
            <div class="cert-card glass-card" [style.--delay]="i * 0.12 + 's'">
              <div class="cert-icon">{{ cert.icon }}</div>
              <div class="cert-badge">Certified</div>
              <p class="cert-name">{{ cert.name }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './certifications.scss'
})
export class CertificationsComponent {
  certs = CERTIFICATIONS;
}
