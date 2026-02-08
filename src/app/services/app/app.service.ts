import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export interface App {
  name: string;
  url: string;
  isExternal?: boolean;
  headerLinks: HeaderLink[];
}

export interface HeaderLink {
  name: string;
  path: string;
}

export const apps: App[] = [
  {
    name: 'Portfolio',
    url: '',
    headerLinks: [
      {
        name: $localize`About`,
        path: 'about',
      },
      {
        name: $localize`Experience`,
        path: 'experience',
      },
      {
        name: 'Work',
        path: 'work',
      },
      {
        name: 'Testimonials',
        path: 'testimonials',
      },
      {
        name: $localize`Contact`,
        path: 'contact',
      },
    ],
  },
  {
    name: 'Eurovision',
    url: 'eurovision',
    headerLinks: [
      {
        name: $localize`Overview`,
        path: 'eurovision',
      },
      {
        name: $localize`Countries`,
        path: 'eurovision/countries',
      },
    ],
  },
  {
    name: 'Amazing Map',
    url: 'https://is-the-amazing-near-me.netlify.app',
    headerLinks: [],
    isExternal: true,
  },
  {
    name: "Bake 'n Shake",
    url: 'https://bakeandshake.netlify.app',
    headerLinks: [],
    isExternal: true,
  },
];

@Injectable({ providedIn: 'root' })
export class AppService {
  private _router = inject(Router);

  constructor() {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = (event as NavigationEnd).urlAfterRedirects;
        const newApp = apps.find((app) => app.url === url.substring(1));
        if (newApp) {
          this._currentApp$.set(newApp);
        }
      });
  }

  private _currentApp$: WritableSignal<App> = signal(apps[0]);

  public currentApp$ = computed(() => this._currentApp$());
}
