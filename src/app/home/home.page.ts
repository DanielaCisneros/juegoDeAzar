import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dadoImangen = "../assets/dado1.PNG";
  click = 1;

  constructor(public alertCtrl: AlertController) {
    this.inicio()
  }

  //alert de incio del juego
  async inicio() {
    const alert = await this.alertCtrl.create({
      message: 'Bienvenido, cada participante lanzara los dados por turnos',
      buttons: ['OK']
    });
    await alert.present();
  }

  //alert de camhio de this.click de jugador
  async mensajeCambioTurno(mensaje) {
    const alert = await this.alertCtrl.create({
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  //mover jugador

  //mover gatos y cambiar de jugador
  cambiarTurnos() {

    var numeroDado = this.cambiarDado() * 10;

    var jugador1 = document.getElementById("1");

    var jugador2 = document.getElementById("2");
    var jugador3 = document.getElementById("3");
    var jugador4 = document.getElementById("4");

    if (this.click == 1) {
      this.click = this.click + 1;
      var contador = 0;
      var interval = setInterval(function () {
        contador = contador + 10;
        jugador1.style.left = contador + "px";
        if(contador == numeroDado){  
          clearInterval(interval);        
        }
      }, 1000);
      return this.mensajeCambioTurno("le toca al jugador 2");
    }

    if (this.click == 2) {
      this.click = this.click + 1;
      var contador = 0;
      var interval = setInterval(function () {
        contador = contador + 10;
        jugador2.style.left = contador + "px";
        if(contador == numeroDado){  
          clearInterval(interval);        
        }
      }, 1000);
      return this.mensajeCambioTurno("le toca al jugador 3");
    }

    if (this.click == 3) {
      this.click = this.click + 1;
      var contador = 0;
      var interval = setInterval(function () {
        contador = contador + 10;
        jugador3.style.left = contador + "px";
        if(contador == numeroDado){  
          clearInterval(interval);        
        }
      }, 1000);
      return this.mensajeCambioTurno("le toca al jugador 4");
    }

    if (this.click == 4) {
      this.click = 1;
      var contador = 0;
      var interval = setInterval(function () {
        contador = contador + 10;
        jugador4.style.left = contador + "px";
        if(contador == numeroDado){  
          clearInterval(interval);        
        }
      }, 1000);
      return this.mensajeCambioTurno("le toca al jugador 1");
    }

  }

  //dibujar diferentes dados y retornar el valor de cada tiro de dados para mover el gato
  cambiarDado() {
    var numeroDado = Math.floor(Math.random() * (7 - 1) + 1);

    if (numeroDado == 1) {
      this.dadoImangen = "../assets/dado1.PNG";
    }

    if (numeroDado == 2) {
      this.dadoImangen = "../assets/dado2.PNG";
    }

    if (numeroDado == 3) {
      this.dadoImangen = "../assets/dado3.PNG";
    }

    if (numeroDado == 4) {
      this.dadoImangen = "../assets/dado4.PNG";
    }

    if (numeroDado == 5) {
      this.dadoImangen = "../assets/dado5.PNG";
    }

    if (numeroDado == 6) {
      this.dadoImangen = "../assets/dado6.PNG";
    }
    return numeroDado;
  }

}
