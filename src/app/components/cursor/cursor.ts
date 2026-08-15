import { Component, OnInit, OnDestroy, Renderer2, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `
    <div class="cursor-dot" #dot></div>
    <div class="cursor-ring" #ring></div>
  `,
  styles: [`
    .cursor-dot, .cursor-ring {
      position: fixed;
      top: 0; left: 0;
      pointer-events: none;
      z-index: 9999;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .cursor-dot {
      width: 8px; height: 8px;
      background: var(--accent);
      transition: transform 0.1s ease, background 0.2s, opacity 0.3s;
    }
    .cursor-ring {
      width: 36px; height: 36px;
      border: 2px solid var(--accent-soft);
      transition: transform 0.12s ease, width 0.2s, height 0.2s, border-color 0.2s, opacity 0.3s;
    }
    :host(.active) .cursor-dot,
    :host(.active) .cursor-ring {
      opacity: 1;
    }
    :host(.hovering) .cursor-ring {
      width: 52px; height: 52px;
      border-color: var(--accent);
    }
    :host(.hovering) .cursor-dot {
      transform: translate(-50%, -50%) scale(1.5);
    }
    /* Hide on tablet and below */
    @media (max-width: 1024px) {
      .cursor-dot, .cursor-ring { display: none !important; }
    }
  `]
})
export class CursorComponent implements OnInit, OnDestroy {
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);
  private dot!: HTMLElement;
  private ring!: HTMLElement;
  private mouseX = 0; private mouseY = 0;
  private ringX = 0; private ringY = 0;
  private raf = 0;
  private listeners: (() => void)[] = [];

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    this.dot = document.querySelector('.cursor-dot') as HTMLElement;
    this.ring = document.querySelector('.cursor-ring') as HTMLElement;
    const host = document.querySelector('app-cursor') as HTMLElement;

    this.listeners.push(
      this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
        this.mouseX = e.clientX; this.mouseY = e.clientY;
        this.dot.style.left = e.clientX + 'px';
        this.dot.style.top = e.clientY + 'px';
        host?.classList.add('active');
      }),
      this.renderer.listen('document', 'mouseover', (e: MouseEvent) => {
        const el = e.target as HTMLElement;
        if (el.closest('a, button, [role="button"], .card, .stat-card, .skill-tag, .cert-card, .nav-link')) {
          host?.classList.add('hovering');
        }
      }),
      this.renderer.listen('document', 'mouseout', () => host?.classList.remove('hovering'))
    );

    const animate = () => {
      this.ringX += (this.mouseX - this.ringX) * 0.12;
      this.ringY += (this.mouseY - this.ringY) * 0.12;
      this.ring.style.left = this.ringX + 'px';
      this.ring.style.top = this.ringY + 'px';
      this.raf = requestAnimationFrame(animate);
    };
    this.raf = requestAnimationFrame(animate);
  }

  ngOnDestroy() {
    this.listeners.forEach(fn => fn());
    cancelAnimationFrame(this.raf);
  }
}
