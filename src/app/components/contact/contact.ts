import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../reveal.directive';
import { CONTACT_ITEMS } from '../../data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section id="contact" class="section contact-section">
      <div class="section-inner">
        <div class="section-header" revealOnScroll>
          <span class="section-tag">Reach Out</span>
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">Open to opportunities, collaborations and conversations.</p>
        </div>
        <div class="contact-grid" revealOnScroll>
          @for (item of contacts; track item.label; let i = $index) {
            <a class="contact-card glass-card"
               [href]="item.href"
               [class.no-link]="item.href === '#'"
               [style.--delay]="i * 0.12 + 's'">
              <div class="contact-icon-wrap">{{ item.icon }}</div>
              <div class="contact-info">
                <span class="contact-label">{{ item.label }}</span>
                <span class="contact-value">{{ item.value }}</span>
              </div>
              @if (item.href !== '#') {
                <span class="contact-arrow">→</span>
              }
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './contact.scss'
})
export class ContactComponent {
  contacts = CONTACT_ITEMS;
}
