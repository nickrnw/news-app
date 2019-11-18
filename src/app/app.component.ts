import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    { title: 'Headlines', url: '/home', icon: 'trending-up' },
    { title: 'Business', url: '/business', icon: 'business' },
    { title: 'Entertainment', url: '/entertainment', icon: 'microphone' },
    { title: 'Technology', url: '/technology', icon: 'laptop' },
    { title: 'Sports', url: '/sports', icon: 'american-football' },
    { title: 'Science', url: '/science', icon: 'flask' },
    { title: 'Health', url: '/health', icon: 'fitness' },
    { title: 'Search', url: '/search', icon: 'search' },
    { title: 'About', url: '/about', icon: 'information-circle-outline' }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
