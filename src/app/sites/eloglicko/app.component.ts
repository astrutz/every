import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParticipantsComponent } from './components/participant/participants.component';

@Component({
  standalone: true,
  imports: [RouterModule, AppComponent, ParticipantsComponent],
  selector: 'eloglicko-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'eloglicko';
}
