import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-animations';
  courseGouls = [
    { title: 'Master Angular Styling', isActiveGoal: true },
    { title: 'Understand Angular Animations', isActiveGoal: true },
    { title: 'Master Angular Animations', isActiveGoal: true },
  ];
}
