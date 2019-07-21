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

  //cambiar turnos 
  cambiarTurnos() {

    var numeroDado = this.cambiarDado() * 10;

    var jugador1 = document.getElementById("1");
    var jugador2 = document.getElementById("2");
    var jugador3 = document.getElementById("3");
    var jugador4 = document.getElementById("4");

    if (this.click == 1) {
      this.ganar(this.moverGatitos(jugador1, numeroDado), "jugador 1", jugador1)
      this.click = this.click + 1;
      return this.ganar;
    }

    if (this.click == 2) {
      this.ganar(this.moverGatitos(jugador2, numeroDado), "jugador 2", jugador2)
      this.click = this.click + 1;
      return this.ganar;
    }

    if (this.click == 3) {
      this.ganar(this.moverGatitos(jugador3, numeroDado), "jugador 3", jugador3)
      this.click = this.click + 1;
      return this.ganar;
    }

    if (this.click == 4) {
      this.ganar(this.moverGatitos(jugador4, numeroDado), "jugador 4", jugador4)
      this.click = 1;
      return this.ganar;
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

  //mover jugadores 
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
    return jugadorPossicion[0];
  }

  //ganador
  ganar(puntosGanador, jugadorNombre, jugadorPossicion) {

    if (puntosGanador >= 290) {
      console.log(puntosGanador);
      this.mensaje("el ganador es" + jugadorNombre)
      this.juegoTerminado();
    };
  }

  //juego terminado carga de nuevo la pagina 
  juegoTerminado() {
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
}
