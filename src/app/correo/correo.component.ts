import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css']
})
export class CorreoComponent implements OnInit {

  title: string;
  public body: string;
  private isStarted = false;

  constructor() {
    this.title = 'Correo';
    this.body = 'Cuerpo del correo';
  }

  ngOnInit() {
    this.isStarted = true;
  }

  private clickBoton() {
    console.log('Click en el botón');
  }
}
