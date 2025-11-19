import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Skills } from "./skills/skills";
import { Footer } from "./footer/footer";
import { Education } from "./education/education";
import { Experience } from "./experience/experience";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Skills, Footer, Education, Experience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonlytitle = signal('my-first-app');

}
