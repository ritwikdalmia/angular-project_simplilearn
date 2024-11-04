import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component'; // Adjust the path as needed

@NgModule({
  declarations: [NavbarComponent], // Declare the NavbarComponent
  imports: [CommonModule], // Import CommonModule for Angular directives
  exports: [NavbarComponent], // Export NavbarComponent so it can be used in other modules
})
export class NavbarModule {}
