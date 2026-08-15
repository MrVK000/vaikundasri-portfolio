import { Component, OnInit, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NAME, ROLE, CAREER_OBJECTIVE, RESUME_PATH, RESUME_FILENAME } from '../../data';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="hero">
      <div class="hero-bg">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
        <div class="grid-overlay"></div>
      </div>

      <div class="hero-content" [class.visible]="visible()">
        <div class="hero-badge">✦ MBA · Marketing & Finance</div>
        <h1 class="hero-name">
          <span class="name-line">{{ name }}</span>
        </h1>
        <p class="hero-role">{{ role }}</p>
        <p class="hero-objective">{{ objective }}</p>
        <div class="hero-actions">
          <a class="btn-primary" [href]="resumePath" [download]="resumeFilename">
            <span class="btn-icon">↓</span> Download Resume
          </a>
          <a class="btn-secondary" href="javascript:void(0)" (click)="scrollToContact()">
            <span>Get In Touch</span>
          </a>
        </div>
        <div class="hero-scroll-hint">
          <span>Scroll to explore</span>
          <div class="scroll-line"></div>
        </div>
      </div>

      <div class="hero-visual" [class.visible]="visible()">
        <div class="avatar-ring outer"></div>
        <div class="avatar-ring middle"></div>
        <div class="avatar-card">
          <div class="avatar-initials">VKS</div>
          <div class="avatar-label">{{ name }}</div>
          <div class="avatar-sub">Marketing & Finance</div>
        </div>
        <div class="float-tag tag-1">🔥 Finance</div>
        <div class="float-tag tag-2">📊 Marketing</div>
        <div class="float-tag tag-3">📝 Strategy</div>
        <div class="float-tag tag-4">🎓 MBA</div>
      </div>
    </section>
  `,
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  name = NAME;
  role = ROLE;
  objective = CAREER_OBJECTIVE;
  resumePath = RESUME_PATH;
  resumeFilename = RESUME_FILENAME;
  visible = signal(false);

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    setTimeout(() => this.visible.set(true), 100);
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
