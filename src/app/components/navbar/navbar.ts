import {
  Component, OnInit, OnDestroy, HostListener, inject, PLATFORM_ID, signal
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NAV_ITEMS, NAME, RESUME_PATH, RESUME_FILENAME } from '../../data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav class="navbar" [class.scrolled]="scrolled()" [class.menu-open]="menuOpen()">
      <div class="nav-inner">
        <a class="nav-brand" (click)="scrollTo('hero')" href="javascript:void(0)">
          <span class="brand-initials">VKS</span>
          <span class="brand-name">{{ name }}</span>
        </a>

        <ul class="nav-links" [class.open]="menuOpen()">
          @for (item of navItems; track item.anchor) {
            <li>
              <a class="nav-link"
                 [class.active]="activeSection() === item.anchor"
                 (click)="scrollTo(item.anchor); closeMenu()"
                 href="javascript:void(0)">
                {{ item.label }}
              </a>
            </li>
          }
        </ul>

        <div class="nav-actions">
          <button class="theme-toggle" (click)="toggleDark()" [attr.aria-label]="dark() ? 'Switch to light mode' : 'Switch to dark mode'">
            <span class="theme-icon">{{ dark() ? '☀️' : '🌙' }}</span>
          </button>
          <button class="hamburger" [class.open]="menuOpen()" (click)="toggleMenu()" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  navItems = NAV_ITEMS;
  name = NAME;
  resumePath = RESUME_PATH;
  resumeFilename = RESUME_FILENAME;
  scrolled = signal(false);
  menuOpen = signal(false);
  activeSection = signal('hero');
  dark = signal(false);
  private observer!: IntersectionObserver;

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 40); }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Restore saved preference
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      this.dark.set(true);
      document.documentElement.classList.add('dark');
    }

    const sections = ['hero', ...NAV_ITEMS.map(n => n.anchor)];
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) this.activeSection.set(e.target.id); });
      },
      { threshold: 0.3 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  }

  ngOnDestroy() { this.observer?.disconnect(); }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleDark() {
    const next = !this.dark();
    this.dark.set(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu() { this.menuOpen.set(false); }
}
