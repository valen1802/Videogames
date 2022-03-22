import { Injectable } from "@angular/core";

@Injectable()
export class VideojuegosService{

    private videojuegos: Videojuego[] = [
        {
        nombre: 'Fornite',
        descripcion: 'Fornite es un videojuego del año 2017 desarrollado por la empresa Epic Games, lanzado como diferentes paquetes de software que presentan diferentes modos de juegos y las mecanicas. Fue anunciado en los Spike Video Game Awards en 2011.',
        img: 'assets/img/fornite.jpg',
        lanzamiento: '2017',
        consola: 'PS4'
        },

        {
        nombre: "Granblue Fantasy",
        descripcion: "Granblue Fantasy: Relink es un juego de rol y acción desarrollado por Cygames Osaka, que nos trasladará a un mundo abierto, plagado de criaturas y bestias. El primer gran videojuego de esta particular saga de nuevo acuño, Granblue Fantasy, ya se lanzó en móviles.",
        img: "assets/img/grandblue.jpg",
        lanzamiento: "2022",
        consola: "PS4"
        },
        {
        nombre: "Grand Theft Auto IV",
        descripcion: "Grand Theft Auto IV es un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North.​ El videojuego, precedido por Grand Theft Auto: Vice City Stories, es el noveno título de la serie Grand Theft Auto y el primero de la misma en aparecer en las videoconsolas de séptima generación.",
        img: "assets/img/grandtheftiv.jpg",
        lanzamiento: "28 de abril de 2008",
        consola: "PlayStation 4"
        },
        {
        nombre: "Resident Evil Village",
        descripcion: "Resident Evil Village es un videojuego perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom.",
        img: "assets/img/village.jpg",
        lanzamiento: "1 de mayo de 2021",
        consola: "PlayStation 4"
        },
        {
        nombre: "Resident Evil 5",
        descripcion: "Resident Evil 5 —cuyo título original es Biohazard 5 es un videojuego de acción-aventura de estilo videojuego de terror desarrollado por Capcom y distribuido por la misma en colaboración con THQ Asia Pacific. ",
        img: "assets/img/resident5.jpg",
        lanzamiento: "5 de marzo de 2009",
        consola: "xbox"
        },
        {
        nombre: "Dead Island 2",
        descripcion: "Dead Island 2 es un videojuego de acción y rol en primera persona ambientado en un mundo abierto infestado de Zombis. El juego ha sido desarrollado por Sumo Digital y distribuido por Kotch Media para las plataformas de PS4, PC y Xbox One.",
        img: "assets/img/deadisland.jpg",
        lanzamiento: "2003",
        consola: "XboxOne"
        },
        {
        nombre: "Assassin's Creed Valhalla",
        descripcion: "Assassin's Creed Valhalla es la nueva entrega de Assassin's Creed de Ubisoft, la saga de acción y aventuras en mundo abierto más famosa de la desarrolladora de videojuegos. En esta ocasión, y siguiendo con los toques RPG de las últimas entregas, viajaremos al siglo IX después de Cristo, llegando a una Gran Bretaña invadida por vikingos. Está disponible para Xbox One, Xbox Series S/S, PlayStation 4, PlayStation 5 y PC.",
        img: "assets/img/assasian.jpg",
        lanzamiento: "",
        consola: "Pc"
        },
        {
        nombre: "Elden Ring",
        descripcion: "Elden Ring es el nuevo videojuego de FromSoftware, creadores de Dark Souls, Sekiro o Bloodborne. Se trata del nuevo título de acción y rol para un jugador ideado por Hidetaka Miyazaki, que en esta ocasión, estrenará un mundo abierto más grande y ambicioso. Su argumento y mitología están firmados por George R.R. Martin, autor de Canción de hielo y fuego.",
        img: "assets/img/elden.jpg",
        lanzamiento: "25/2/2022",
        consola: "PS4"
        },
        {
        nombre: "Skull & Bones",
        descripcion: "Skull & Bones es el nuevo videojuego de Ubisoft de acción, simulación de navegación y multijugador ambientado en la edad de oro de los piratas. Desarrollado por su estudio de Singapore, el título nos invitará en consolas y PC a comandar un enorme barco pirata y lanzarnos a la conquista de los mares de las Antillas y el océano Índico.",
        img: "assets/img/skullbones.jpg",
        lanzamiento: "2023",
        consola: "PS4"
        },
        {
        nombre: "Los Sims 4",
        descripcion: "Los Sims 4 es la cuarta entrega de la serie de videojuego de simulación social y de vida, Los Sims. El juego fue anunciado originalmente el 6 de mayo de 2013, ​ y puesto a la venta el 2 de septiembre de 2014, para Microsoft Windows.",
        img: "assets/img/losims4.jpg",
        lanzamiento: "2 de septiembre de 2014",
        consola: "PlayStation 4"
        }

    ];

    constructor() {
        console.log("Listo para usarse");
    }

    getVideoJuegos(): Videojuego[] {
        return this.videojuegos;
    }

    getVideojuego(idx: number) {
        return this.videojuegos[idx];
    }

    buscarVideojuegos(termino: string): Videojuego[] {
        let videojuegosArr: Videojuego[] = [];
        termino = termino.toLowerCase();
        this.videojuegos.forEach(videojuego => {
        let nombre = videojuego.nombre.toLowerCase();
        if (nombre.indexOf(termino) >= 0) {
            videojuegosArr.push(videojuego);
        }
        });
        return videojuegosArr;
    }
    }

    export interface Videojuego {
    nombre: string;
    descripcion: string;
    img: string;
    lanzamiento: string;
    consola: string;
    }