import { Component } from '@angular/core';
import { NAME, FOOTER_TAGLINE, NAV_ITEMS, RESUME_PATH, RESUME_FILENAME } from '../../data';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-initials">VKS</div>
          <div>
            <div class="footer-name">{{ name }}</div>
            <div class="footer-tagline">{{ tagline }}</div>
          </div>
        </div>
        <nav class="footer-nav" aria-label="Footer navigation">
          @for (item of navItems; track item.anchor) {
            <a class="footer-link" [href]="'#' + item.anchor"
               (click)="scrollTo(item.anchor, $event)">{{ item.label }}</a>
          }
        </nav>
        <a class="footer-resume" [href]="resumePath" [download]="resumeFilename">
          ↓ Download Resume
        </a>
      </div>
      <div class="footer-bottom">
        <span>© {{ year }} {{ name }}. All rights reserved.</span>
      </div>
    </footer>
  `,
  styleUrl: './footer.scss'
})
export class FooterComponent {
  name = NAME;
  tagline = FOOTER_TAGLINE;
  navItems = NAV_ITEMS;
  resumePath = RESUME_PATH;
  resumeFilename = RESUME_FILENAME;
  year = new Date().getFullYear();

  scrollTo(id: string, e: Event) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
