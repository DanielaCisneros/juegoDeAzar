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
    this.mensaje('Bienvenido, cada participante lanzara los dados por turnos')
  }

  //alert de camhio de jugador y de inicio
  async mensaje(mensaje) {
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
      var movimientoJugador1 = this.moverGatitos(jugador1, numeroDado);
      this.click = this.click + 1;
      return movimientoJugador1;
    }

    if (this.click == 2) {
      var movimientoJugador2 = this.moverGatitos(jugador2, numeroDado);
      this.click = this.click + 1;
      return movimientoJugador2;
    }

    if (this.click == 3) {
      var movimientoJugador3 = this.moverGatitos(jugador3, numeroDado);
      this.click = this.click + 1;
      return movimientoJugador3;
    }

    if (this.click == 4) {
      var movimientoJugador4 = this.moverGatitos(jugador4, numeroDado);
      this.click = 1;
      return movimientoJugador4;
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

  //mover gatitos
  moverGatitos(jugador, numeroDado) {

    var contador = 0;
    var jugadorPossicion = jugador.style.left.split("px");

    if (jugadorPossicion[0] == null || jugadorPossicion[0] == undefined || jugadorPossicion[0] == "") {

      jugadorPossicion[0] = 0;

      var interval = setInterval(function () {
        contador = contador + 10;
        var totalMovimiento = contador + jugadorPossicion[0];
        jugador.style.left = totalMovimiento + "px";
        if (contador == numeroDado) {
          clearInterval(interval);
        }
      }, 100);
    }

    else {

      var interval = setInterval(function () {
        contador = contador + 10;
        var totalMovimiento = contador + parseInt(jugadorPossicion[0]);
        jugador.style.left = totalMovimiento + "px";
        if (contador == numeroDado) {
          clearInterval(interval);
        }
      }, 100);
    }
  }


}
