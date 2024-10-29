import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface PreguntasJuego {
  categoria: string,
  pregunta: string,
  respuesta: string,
  incorrecta1: string,
  incorrecta2: string,
  incorrecta3: string,
  imagen: string
}
@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent /*implements OnInit*/{
  preguntas: PreguntasJuego[] = [
    categoria: "Arte y literatura",
      pregunta: "¿Quién pintó la mona lisa?",
      respuesta: "Leonardo da Vinci",
      incorrecta1: "Picasso",
      incorrecta2: "Miguel Ángel",
      incorrecta3: "Monet",
      imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿En qué año murió Freddie Mercury?",
      respuesta: "1991",
      incorrecta1: "1990",
      incorrecta2: "1985",
      incorrecta3: "1987",
      imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
    },
    {
      categoria: "Cultura General",
      pregunta: "¿Qué día es la fiesta nacional de Estados Unidos?",
      respuesta: "El 4 de julio",
      incorrecta1: "El 9 de julio",
      incorrecta2: "El 2 de agosto",
      incorrecta3: "El 4 de junio",
      imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿En qué año comenzo la Primera Guerra Mundial?",
      respuesta: "1914",
      incorrecta1: "1918",
      incorrecta2: "1945",
      incorrecta3: "1939",
      imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Cuál era el nombre de pila de Che Guevara?",
      respuesta: "Ernesto",
      incorrecta1: "Julio",
      incorrecta2: "Roberno",
      incorrecta3: "Cesar",
      imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Cuánto duró “La Guerra de los Cien Años”?",
      respuesta: "116 años",
      incorrecta1: "100 años",
      incorrecta2: "99 años",
      incorrecta3: "102 años",
      imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Quién fue el último faraón de Egipto?",
      respuesta: "Ramsés III",
      incorrecta1: "Ramsés II",
      incorrecta2: "Cleopatra",
      incorrecta3: "Tutankamón",
      imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Quién escribió ‘La metamorfosis’?",
      respuesta: "Franz Kafka.",
      incorrecta1: "Jane Austen",
      incorrecta2: "Edgar Allan Poe",
      incorrecta3: "Miguel de Cervantes",
      imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Dónde nació Juana de Arco?",
      respuesta: "Francia",
      incorrecta1: "Inglaterra",
      incorrecta2: "España",
      incorrecta3: "Austria",
      imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Dónde se encuentra la Sagrada Familia?",
      respuesta: "Barcelona",
      incorrecta1: "Madrid",
      incorrecta2: "Sevilla",
      incorrecta3: "Valencia",
      imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Dónde se encuentra el museo del Louvre?",
      respuesta: "Paris",
      incorrecta1: "Marsella",
      incorrecta2: "Granada",
      incorrecta3: "Mallorca",
      imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Cuál es la montaña más alta del planeta?",
      respuesta: "Everest",
      incorrecta1: "Aconcagua",
      incorrecta2: "K2",
      incorrecta3: "Makalu",
      imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿En qué año murió Freddie Mercury?",
      respuesta: "1991",
      incorrecta1: "1990",
      incorrecta2: "1985",
      incorrecta3: "1987",
      imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Quién pintó “La última cena”?",
      respuesta: "Leonardo da Vinci",
      incorrecta1: "Pablo Picasso",
      incorrecta2: "Vincent van Gogh",
      incorrecta3: "Salvador Dalí",
      imagen: "https://cdn.culturagenial.com/es/imagenes/marco-d-oggiono-cke.jpg?class=article"
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Cómo se denomina el resultado de la multiplicación?",
      respuesta: "Producto",
      incorrecta1: "Diferencia",
      incorrecta2: "Cociente",
      incorrecta3: "Total",
      imagen: 
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Qué año llegó Cristóbal Colón a América?",
      respuesta: "1492",
      incorrecta1: "1485",
      incorrecta2: "1503",
      incorrecta3: "1430",
      imagen: "https://ar.usembassy.gov/wp-content/uploads/sites/111/2023/02/02388v.jpeg",
    },
    {
      categoria: "Arte y literatura",
      pregunta: " Si 50 es el 100%, ¿Cuánto vale el 90%?",
      respuesta: "45",
      incorrecta1: "40",
      incorrecta2: "25",
      incorrecta3: "43",
      imagen: "/imagenes/multiplicacion.png",
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Cuál es el segundo planeta en el sistema solar?",
      respuesta: "Venus",
      incorrecta1: "Marte",
      incorrecta2:"Tierra" ,
      incorrecta3: "Mercurio",
      imagen: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/14AAC/production/_105225648_1-1.jpg.webp",
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Qué significan las siglas AFA?",
      respuesta: "Asociación del Fútbol Argentino",
      incorrecta1: "Asociacion de Federados Argentino",
      incorrecta2: "Agrupacion Fanatica de Argentina ",
      incorrecta3: "Alianza Fenomenal de Argentinos ",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYWVdcAnZcsKLV1O-AuTpWNjounFkEcyex6g&s"
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Cuál es el primer libro de la Biblia?",
      respuesta: "Genesis",
      incorrecta1: "Exodo",
      incorrecta2: "Antiguo Testamento",
      incorrecta3: "Salmos",
      imagen: "https://catolicismodigital.com/wp-content/uploads/2021/08/interpretacion-biblia.jpg"
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Qué pieza de ajedrez puede hacer un movimiento en forma de L?",
      respuesta: "Caballo",
      incorrecta1: "Torre",
      incorrecta2: "Reina",
      incorrecta3: "Peón",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_game_Staunton_No._6.jpg/275px-Chess_game_Staunton_No._6.jpg"
    },
    {
      categoria: "Arte y literatura",
      pregunta: "¿Cual es el nombre completo de Belgrano",
      respuesta: "Manuel José Joaquín del Corazón de Jesús Belgrano",
      incorrecta1: "Manuel Belgrano",
      incorrecta2: "Joaquin Manuel Belgrano",
      incorrecta3: "Domingo Manuel Belgrano"
      imagen: "https://www.undef.edu.ar/wp-content/uploads/2020/06/header_belgrano.jpg",
    },
    {
      categoria: "Arte y literatura",
      pregunta:"¿Como se llama " 
      respuesta: "Juana Azurduy",
      incorrecta1: "María Remedios",
      incorrecta2: "Rosa Guerra",
      incorrecta3: "Lola Mora",
      imagen:"https://www.notaalpie.com.ar/wp-content/uploads/2023/07/DESTACADA-O%CC%81leo-sobre-lienzo-de-Cristian-Laime-Yujra-1-Rocio-Roig.jpg
    }

  ]

  title = 'proyectoMuestra';
  estilos: boolean = false
  interprete_bp: any;
  cambiarFondo() {
    this.estilos = !this.estilos
  }
  preguntas_aleatorias: boolean = true;
  mostrar_pantalla_juego_términado: boolean = true;
  reiniciar_puntos_al_reiniciar_el_juego: boolean = true;
  /*valor */
  ngOnInit() {
    const interprete_bp = this.preguntas;
    escogerPreguntaAleatoria();
  };
  pregunta: string = "";
  posibles_respuestas: string = "";
  btn_correspondiente = [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
  ];
  npreguntas = [];
  preguntas_hechas = 0;
  preguntas_correctas = 0;
  escogerPreguntaAleatoria() {
    if (this.preguntas_hechas >= 10) {
      //pantalla cuanto se termina las 10 preguntas
     /*
      if (this.mostrar_pantalla_juego_términado) {
        swal.fire({
          title: "Juego Terminado",
          text: "puntuacion " + this.preguntas_correctas + "/10",
          icon: "sucess"
        });
      }
     */
      if (this.reiniciar_puntos_al_reiniciar_el_juego) {
        this.preguntas_correctas = 0;
        this.preguntas_hechas = 0;
      }
      this.npreguntas = [];
      return;
    }
    if (this.preguntas_hechas === 5) {
      // Pregunta al jugador si desea seguir jugando
      if (confirm("¿Quieres seguir jugando?")) {

      }
      else {
        // Finaliza el juego si el jugador no desea continuar
        const mostrar_pantalla_juego_terminado = true;
        let n = 0;
        escogerPreguntaAleatoria();
        return;
      }
    }

    let n = 0;
    if (this.preguntas_aleatorias) {
      n = Math.floor(Math.random() * this.interprete_bp.length);
    } else {
      n = 0;
    }


    while (this.npreguntas.includes(n)) {
      n++;
      if (n >= this.interprete_bp.length) {
        n = 0;
      }
      if (this.npreguntas.length == this.interprete_bp.length) {
        //el juego se reinicia
        if (this.mostrar_pantalla_juego_términado) {
          swal.fire({
            title: "Juego finalizado",
            text: "Puntuación: " + this.preguntas_correctas + "/" + (this.preguntas_hechas - 1),
            icon: "success"
          });
        }
        if (this.reiniciar_puntos_al_reiniciar_el_juego) {
          this.preguntas_correctas = 0
          this.preguntas_hechas = 0
        }
        this.npreguntas = [];
      }
    }
    this.npreguntas.push(n);
    this.preguntas_hechas++;


    escogerPregunta(n);
  }

  escogerPregunta(n) {
    this.pregunta = this.interprete_bp[n];
    select_id("categoria").innerHTML = pregunta.categoria;
    select_id("pregunta").inner

    const HTML = this.pregunta;
    select_id("numero").innerHTML = n;
    let pc = this.preguntas_correctas;
    if (this.preguntas_hechas > 1) {
      select_id("puntaje").innerHTML = pc + "/" + (this.preguntas_hechas - 1);
    } else {
      select_id("puntaje").innerHTML = "";
    }


    style("imagen").objectFit = pregunta.objectFit;
    this.desordenarRespuestas(pregunta);
    if (this.pregunta.imagen) {
      select_id("imagen").setAttribute("src", pregunta.imagen);
      style("imagen").height = "150px";
      style("imagen").width = "250px";
    } else {
      style("imagen").height = "0px";
      style("imagen").width = "0px";
      setTimeout(() => {
        select_id("imagen").setAttribute("src", "");
      }, 500);
    }

  }


  desordenarRespuestas(pregunta) {
    const posibles_respuestas = [
      pregunta.respuesta,
      pregunta.incorrecta1,
      pregunta.incorrecta2,
      pregunta.incorrecta3,
    ];
    posibles_respuestas.sort(() => Math.random() - 0.5);


   /*
    select_id("btn1"). = posibles_respuestas[0];
    select_id("btn2").innerHTML = posibles_respuestas[1];
    select_id("btn3").innerHTML = posibles_respuestas[2];
    select_id("btn4").innerHTML = posibles_respuestas[3];
   */
  }


  const suspender_botones = false;
  
      function oprimir_btn(i) {
  if (suspender_botones) {
    return;
  }
  const suspender_botones = true;


  if (posibles_respuestas[i] == pregunta.respuesta) {
    let preguntas_correctas++;
    btn_correspondiente[i].style.background = "lightgreen";
  } else {
    btn_correspondiente[i].style.background = "pink";


    // Mostrar pantalla de juego terminado cuando el jugador se equivoque
    if (mostrar_pantalla_juego_términado) {
      swal.fire({
        title: "Juego finalizado",
        text: "Puntuación: " + preguntas_correctas + "/" + preguntas_hechas,
        icon: "error"
      });
    }


    // Reiniciar el juego si así se desea
    if (reiniciar_puntos_al_reiniciar_el_juego) {
      preguntas_correctas = 0;
      preguntas_hechas = 0;
    }


    npreguntas = [];
    setTimeout(() => {
      reiniciar();
      const suspender_botones = false;
    }, 3000);


    return;
  }

  setTimeout(() => {
    reiniciar();
    const suspender_botones = false;
  }, 3000);
}

// let p = prompt("numero")

function reiniciar() {
  for (const btn of btn_correspondiente) {
    btn.style.background = "white";
  }
  escogerPreguntaAleatoria();
}


select_id(id) {
  return document.getElementById(id);
}


style(id) {
  return select_id(id).style;
}


readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}
  }
function escogerPreguntaAleatoria() {
  throw new Error('Function not implemented.');
}

function readText(ruta_local: any) {
  throw new Error('Function not implemented.');
}

function select_id(id: any) {
  throw new Error('Function not implemented.');
}

function escogerPregunta(n: number) {
  throw new Error('Function not implemented.');
}





