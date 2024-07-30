import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';

@Component({
  selector: 'app-root-layout',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, SideBarComponent],
  templateUrl: './root-layout.component.html',
  styleUrl: './root-layout.component.scss',
})
export class RootLayoutComponent {}
