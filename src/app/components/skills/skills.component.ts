import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  progressHtml: string = '0%';
  progressCss: string = '0%';
  progressJavaScript: string = '0%';
  progressAngular: string = '0%';
  progressWordpress: string = '0%';
  progressJava: string = '0%';
  progressReact: string = '0%';
  progressMySql: string = '0%';

  ngOnInit() {
    // Simulate progress completion (for demonstration purposes)
    this.progressHtml = '100%';
    this.progressCss = '100%';
    this.progressJavaScript = '90%';
    this.progressAngular = '100%';
    this.progressWordpress = '80%';
    this.progressJava = '75%';
    this.progressReact = '75%';
    this.progressMySql = '85%';
  }
 

}
