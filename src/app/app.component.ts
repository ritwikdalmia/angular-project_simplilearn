
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarModule } from './navbar/navbar.module'; // Adjust the path as needed
import { HomedashboardComponent } from './homedashboard/homedashboard.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarModule,HomedashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client_project';
}
