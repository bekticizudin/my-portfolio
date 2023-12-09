import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArrowUpComponent } from './components/arrow-up/arrow-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HeroComponent,
    ResumeComponent,
    PortfolioComponent,
    SkillsComponent,
    FooterComponent,
    ArrowUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
