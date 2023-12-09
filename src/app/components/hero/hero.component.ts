import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  ngOnInit() {
    // Initialize Typed.js
    const options = {
      strings: ['Full-Stack Developer', 'Freelancer', 'Journalist', 'Photographer'],
      typeSpeed: 150, // Adjust typing speed (in milliseconds) as needed
      backSpeed: 80, // Adjust backspacing speed (in milliseconds) as needed
      loop: true // Set to true to loop through the strings continuously
    };

    const typed = new Typed('.typed', options);
  }
}
