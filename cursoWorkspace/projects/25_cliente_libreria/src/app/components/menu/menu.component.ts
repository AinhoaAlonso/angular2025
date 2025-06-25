import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-menu',
  standalone:true,
  imports: [RouterModule, LoginComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
