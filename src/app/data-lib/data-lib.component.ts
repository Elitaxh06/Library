import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-data-lib',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './data-lib.component.html',
  styleUrl: './data-lib.component.css'
})
export class DataLibComponent {
  libros = [
    { id: 1,  titulo: 'Cien años de soledad',               autor: 'Gabriel García Márquez',  genero: 'Realismo mágico',        publicado: true,   espa: true, fecha: '1967', idioma: 'Español',       descripcion: 'Una obra maestra del realismo mágico, narra la historia de la familia Buendía en el pueblo ficticio de Macondo. Gabriel García Márquez explora temas de soledad, amor, muerte y el paso del tiempo en esta novela emblemática.',                                            img: 'https://www.rae.es/sites/default/files/portada_cien_anos_de_soledad_0.jpg'},
    { id: 2,  titulo: '1984',                               autor: 'George Orwell',           genero: 'Ciencia ficción',        publicado: true,   espa: true, fecha: '1949', idioma: 'Inglés',        descripcion: 'En una sociedad distópica gobernada por un régimen totalitario, Winston Smith lucha contra la opresión del omnipresente Gran Hermano. George Orwell revela los peligros de la vigilancia, la manipulación de la verdad y la destrucción del pensamiento individual.',       img: 'https://m.media-amazon.com/images/I/71sOSrd+JxL._AC_UF1000,1000_QL80_.jpg'},
    { id: 3,  titulo: 'El señor de los anillos',            autor:'J.R.R. Tolkien',           genero: 'Fantasía',               publicado: true,   espa: true, fecha: '1954', idioma: 'Inglés',        descripcion: 'La Comunidad del Anillo sigue a Frodo Bolsón, un hobbit que debe destruir el Anillo Único, acompañado por una variada compañía. Juntos enfrentan peligros y el acecho de Sauron para salvar la Tierra Media.',                                                              img: 'https://www.planetadelibros.com/usuaris/libros/fotos/357/original/portada_el-senor-de-los-anillos-1-la-comunidad-del-anillo_j-r-r-tolkien_202207271304.jpg'},
    { id: 4,  titulo: 'Orgullo y prejuicio',                autor: 'Jane Austen',             genero: 'Novela romántica',       publicado: false,   espa: true, fecha: '1813', idioma: 'Inglés',        descripcion: 'En esta novela de Jane Austen, Elizabeth Bennet y el orgulloso Mr. Darcy se enfrentan a malentendidos y prejuicios sociales mientras descubren el verdadero significado del amor y el respeto. Es una crítica ingeniosa a las normas sociales del siglo XIX.',             img: 'https://www.elejandria.com/covers/Orgullo_y_prejuicio-Jane_Austen-lg.png'},
    { id: 5,  titulo: 'El código Da Vinci',                 autor: 'DanBrown',                genero: 'Suspense',               publicado: true,   espa: true, fecha: '2003', idioma: 'Inglés',        descripcion: 'Robert Langdon, un profesor de simbología, se embarca en una emocionante búsqueda para resolver un misterioso asesinato que lo lleva a descubrir secretos ocultos de la historia y el cristianismo. La novela de Dan Brown combina acción, arte y conspiraciones.',         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzGzZ6k9gvSQx_DDfyeKxIxPQVsVXi9aycQ&s'},
    { id: 6,  titulo: 'La sombra del viento',               autor: 'Carlos Ruiz Zafón',       genero: 'Misterio',               publicado: false,  espa: true, fecha: '2001', idioma: 'Español',       descripcion: 'En la Barcelona de la posguerra, Daniel Sempere descubre un misterioso libro que cambiará su vida. Mientras investiga la historia del autor, se ve envuelto en una trama llena de secretos, tragedias y pasiones olvidadas. Una novela cautivadora de Carlos Ruiz Zafón.',  img: 'https://images.cdn2.buscalibre.com/fit-in/360x360/30/57/3057e792c1953b16740975d6fa56664f.jpg'},
    { id: 7,  titulo: 'El alquimista',                      autor: 'Paulo Coelho',            genero: 'Ficción filosófica',     publicado: true,   espa: true, fecha: '1988', idioma: 'Portugués',     descripcion: 'La historia de Santiago, un joven pastor que emprende un viaje en busca de un tesoro en las pirámides de Egipto. Paulo Coelho explora temas de destino, propósito y la importancia de perseguir los sueños en esta inspiradora novela.',                                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fu1DiLxwD34XFhlFpPUa5d_NgH5ibmyF9A&s'},
    { id: 8,  titulo: 'El nombre del viento',               autor: 'Patrick Rothfuss',        genero: 'Fantasía',               publicado: false,  espa: true, fecha: '2007', idioma: 'Inglés',        descripcion: 'La vida de Kvothe, un legendario mago y músico, es narrada desde su infancia hasta convertirse en una figura mítica. Patrick Rothfuss teje una rica historia de magia, aventuras y misterios en un mundo fascinante lleno de leyendas.',                                    img: 'https://m.media-amazon.com/images/I/91PjnllfsxL._AC_UF894,1000_QL80_.jpg'},
    { id: 9,  titulo: 'Rayuela',                            autor: 'Julio Cortázar',          genero: 'Ficción experimental',   publicado: true,   espa: true, fecha: '1963', idioma: 'Español',       descripcion: 'Esta innovadora novela de Julio Cortázar permite múltiples lecturas y sigue la vida de Horacio Oliveira en París y Buenos Aires. Es una exploración filosófica de la existencia, el amor y el arte, desafiando las convenciones narrativas tradicionales.',                 img: 'https://www.unimart.com/cdn/shop/files/9788466331906.jpg?v=1699115876'},
    { id: 10, titulo: 'El arte de la guerra',               autor: 'Sun Tzu',                 genero: 'Tratado militar',        publicado: false,  espa: true, fecha: 'Siglo V a.C', idioma: 'Chino',  descripcion: 'Un antiguo tratado chino escrito por Sun Tzu que ofrece principios estratégicos sobre la guerra y el liderazgo, aplicables no solo al ámbito militar, sino también a la vida cotidiana y los negocios. Su sabiduría ha trascendido generaciones.',                          img: 'https://www.panoramadigital.co.cr/wp-content/uploads/2020/03/arte-de-la-guerra.jpg'},
    { id: 11, titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K.Rowling',             genero: 'Aventura',               publicado: true,   espa: true, fecha: '1997', idioma: 'Inglés',        descripcion: 'Harry Potter descubre que es un mago y comienza sus estudios en Hogwarts. J.K. Rowling crea un universo mágico lleno de aventuras, amistad y desafíos mientras Harry se enfrenta a los primeros indicios de su lucha contra el malvado Lord Voldemort.',                    img:'https://www.ellector.com.py/product_photos/24b89be1/2084dc2072309b0bbae36abc8fcca2c3.jpg'}, 
    { id: 12, titulo: 'Rebelión en la granja',              autor:'George Orwell',            genero: 'Ciencia ficción',        publicado: false,  espa: true, fecha: '1945', idioma: 'Inglés',        descripcion: 'Una fábula satírica de George Orwell en la que los animales de una granja derrocan a los humanos solo para ver cómo una nueva tiranía emerge. Es una crítica mordaz sobre la corrupción del poder y el totalitarismo.',                                                     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKtyHGaKeAY19QFhdYBnis3_OxHImmi6bnA&s'},
    //{ id: 12, titulo: 'El Diario De Ana Freank', autor: 'Otto Frank', genero: 'Historia', publicado: true, img: 'https://http2.mlstatic.com/D_NQ_NP_803674-MLC42310329593_062020-O.webp'},
  ];

    selectedItem: any;
    constructor(private route: ActivatedRoute){ }
    ngOnInit(): void{
      this.route.paramMap.subscribe(para => {
        const type = Number(para.get('type'));
        
        this.selectedItem = this.libros.find(ite => ite.id == type);
      })
    }

}

