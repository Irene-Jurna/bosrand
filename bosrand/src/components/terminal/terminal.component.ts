import { Component } from '@angular/core';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css'
})
export class TerminalComponent {
  help:string[] = [
    'intro        Over mij',
    'cv           Mijn werkervaring',
    'hobbies      Wat ik doe in mijn vrije tijd',
    'clear        Maak je terminal weer leeg',
    'contact      Kop koffie? ☕',
  ];

  intro:string[] = ['Hallo, mijn naam is Irene'];
  cv:string[] = ['Lijst werkervaring'];
  hobbies:string[] = ['Ik houd van wandelen, lezen, warme dranken'];
  clear:string = '';
  contact: string[] = ['Contact opnemen kan via LinkedIn of irene.jurna@gmail.com'];

  command(cmd: string):void {
    switch (cmd.toLowerCase()) {
      case 'help':
        this.help;
        break;
      case 'intro':
        this.intro;
        break;
      case 'cv':
        this.cv;
        break;
      case 'hobbies':
        this.hobbies;
        break;
      case 'clear':
        this.clear;
        break;
      case 'contact':
        this.contact;
        break;
      default:
        "Commando niet gevonden. Typ 'help' voor een lijst met beschikbare commando's."

    }
  }
}
