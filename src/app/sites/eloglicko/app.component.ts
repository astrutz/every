import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';

@Component({
  standalone: true,
  imports: [RouterModule, PlayerComponent, ConfigurationComponent],
  selector: 'eloglicko-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'eloglicko';
}
