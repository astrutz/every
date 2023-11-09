import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParticipantsComponent } from './components/participant/participants.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';

@Component({
  standalone: true,
  imports: [RouterModule, AppComponent, ParticipantsComponent, ConfigurationComponent],
  selector: 'eloglicko-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'eloglicko';
}
