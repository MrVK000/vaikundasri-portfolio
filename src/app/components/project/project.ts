import { Component, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RevealOnScrollDirective } from '../reveal.directive';
import { SUMMER_PROJECT } from '../../data';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section id="project" class="section project-section">
      <div class="project-bg">
        <div class="proj-blob proj-blob-1"></div>
        <div class="proj-blob proj-blob-2"></div>
      </div>
      <div class="section-inner">
        <div class="section-header" revealOnScroll>
          <span class="section-tag light">Featured Project</span>
          <h2 class="section-title light">Summer Research Project</h2>
        </div>

        <div class="project-hero-card" revealOnScroll>
          <div class="proj-badge">📊 Marketing Research Case Study</div>
          <h3 class="proj-title">{{ project.title }}</h3>
          <div class="proj-meta-row">
            <span class="proj-meta-item">🏭 {{ project.company }}</span>
            <span class="proj-meta-item">📅 {{ project.period }}</span>
            <span class="proj-meta-item">⏱ {{ project.duration }}</span>
            <span class="proj-meta-item">🎓 {{ project.specialization }}</span>
          </div>
        </div>

        <div class="stats-grid" revealOnScroll>
          @for (stat of project.stats; track stat.label; let i = $index) {
            <div class="stat-card" [style.--delay]="i * 0.08 + 's'">
              <div class="stat-icon">{{ stat.icon }}</div>
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          }
        </div>

        <div class="proj-details-grid" revealOnScroll>
          <div class="proj-detail-card glass-card-dark">
            <h4>🎯 Objective</h4>
            <p>{{ project.objective }}</p>
          </div>
          <div class="proj-detail-card glass-card-dark">
            <h4>✅ Conclusion</h4>
            <p>{{ project.conclusion }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './project.scss'
})
export class ProjectComponent {
  project = SUMMER_PROJECT;
}
