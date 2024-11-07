import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FraseService } from '../frase.service';

@Component({
  selector: 'app-catalago',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './catalago.component.html',
  styleUrl: './catalago.component.css'
})
export class CatalagoComponent {
  fra:any = {}
  constructor(private frase:FraseService){
    this.frase.getFrase().subscribe((res)=>{
      this.fra = res
      })
  }
  otraFrase(){
    this.frase.getFrase().subscribe(res => this.fra = res)
  }


  ver = true;
  verLib(){
    this.ver =! this.ver
  }
  
  //libros = [
  //  { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', genero: 'Realismo mágico', publicado: true, descripcion: 'Narra la historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo. Gabriel García Márquez mezcla realidad y fantasía en una obra emblemática del realismo mágico.', img: 'https://www.rae.es/sites/default/files/portada_cien_anos_de_soledad_0.jpg'},
  //  { id: 2, titulo: '1984', autor: 'George Orwell', genero: 'Ciencia ficción', publicado: true,                          descripcion: 'En una distopía totalitaria, Winston Smith desafía al omnipresente Gran Hermano, quien controla todos los aspectos de la vida. Orwell explora los peligros de la vigilancia extrema y la manipulación del pensamiento.', img: 'https://m.media-amazon.com/images/I/71sOSrd+JxL._AC_UF1000,1000_QL80_.jpg'},
  //  { id: 3, titulo: 'El señor de los anillos', autor:'J.R.R. Tolkien', genero: 'Fantasía', publicado: true,              descripcion: 'En una épica fantasía de J.R.R. Tolkien, un grupo liderado por el hobbit Frodo Baggins debe destruir el Anillo Único para salvar la Tierra Media del poder oscuro del Señor Oscuro Sauron.', img: 'https://www.planetadelibros.com/usuaris/libros/fotos/357/original/portada_el-senor-de-los-anillos-1-la-comunidad-del-anillo_j-r-r-tolkien_202207271304.jpg'},
  //  { id: 4, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', genero: 'Novela romántica', publicado: true,            descripcion: 'Jane Austen narra la vida de Elizabeth Bennet mientras se enfrenta a la complejidad del amor, el estatus social y el orgullo en la Inglaterra del siglo XIX, junto al intrigante Mr. Darcy.', img: 'https://www.elejandria.com/covers/Orgullo_y_prejuicio-Jane_Austen-lg.png'},
  //  { id: 5, titulo: 'El código Da Vinci', autor: 'DanBrown', genero: 'Suspense', publicado: true,                        descripcion: 'Dan Brown combina religión, historia y arte en un thriller protagonizado por Robert Langdon, quien desentraña misterios relacionados con la iglesia y una conspiración en torno al Santo Grial.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzGzZ6k9gvSQx_DDfyeKxIxPQVsVXi9aycQ&s'},
  //  { id: 6, titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', genero: 'Misterio', publicado: false,            descripcion: 'Carlos Ruiz Zafón nos sumerge en una Barcelona de posguerra, donde un joven llamado Daniel descubre un libro maldito que cambiará su vida, revelando oscuros secretos en torno a su autor.', img: 'https://images.cdn2.buscalibre.com/fit-in/360x360/30/57/3057e792c1953b16740975d6fa56664f.jpg'},
  //  { id: 7, titulo: 'El alquimista', autor: 'Paulo Coelho', genero: 'Ficción filosófica', publicado: true,               descripcion: 'Paulo Coelho narra la travesía del joven pastor Santiago, quien persigue su leyenda personal, guiado por sueños y encuentros místicos, mientras busca un tesoro escondido en las pirámides de Egipto.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fu1DiLxwD34XFhlFpPUa5d_NgH5ibmyF9A&s'},
  //  { id: 8, titulo: 'El nombre del viento', autor: 'Patrick Rothfuss', genero: 'Fantasía', publicado: false,             descripcion: 'Patrick Rothfuss presenta la vida de Kvothe, un hombre legendario que narra sus propios comienzos como un prodigioso mago y músico, en una historia llena de magia, aventuras y tragedia.', img: 'https://m.media-amazon.com/images/I/91PjnllfsxL._AC_UF894,1000_QL80_.jpg'},
  //  { id: 9, titulo: 'Rayuela', autor: 'Julio Cortázar', genero: 'Ficción experimental', publicado: true,                 descripcion: 'Julio Cortázar propone una novela experimental en la que el lector puede elegir diferentes caminos en la narración, explorando el existencialismo, el amor y la búsqueda del sentido en una París bohemia.', img: 'https://www.unimart.com/cdn/shop/files/9788466331906.jpg?v=1699115876'},
  //  { id: 10, titulo: 'El arte de la guerra', autor: 'Sun Tzu', genero: 'Tratado militar', publicado: false,              descripcion: 'Sun Tzu ofrece una obra clásica sobre estrategia militar, aplicable no solo a la guerra, sino también a la vida y los negocios, con enseñanzas sobre cómo enfrentar y vencer a los adversarios.', img: 'https://www.panoramadigital.co.cr/wp-content/uploads/2020/03/arte-de-la-guerra.jpg'},
  //  { id: 11, titulo: 'Harry Potter 1', autor: 'J.K.Rowling', genero: 'Aventura', publicado: true,                        descripcion: 'J.K. Rowling introduce al joven mago Harry Potter, quien descubre su identidad en Hogwarts, un colegio de magia, donde enfrenta desafíos mágicos y un oscuro enemigo del pasado.', img:'https://www.ellector.com.py/product_photos/24b89be1/2084dc2072309b0bbae36abc8fcca2c3.jpg'}, 
  //  { id: 12, titulo: 'Rebelión en la granja', autor:'George Orwell', genero: 'Ciencia ficción', publicado: false,        descripcion: 'George Orwell utiliza una alegoría política para representar la corrupción y el totalitarismo, donde los animales de una granja derrocan a los humanos, solo para ver cómo el poder los corrompe igualmente.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKtyHGaKeAY19QFhdYBnis3_OxHImmi6bnA&s'},
  //  //{ id: 13, titulo: 'El Diario De Ana Freank', autor: 'Otto Frank', genero: 'Historia', publicado: true, img: 'https://http2.mlstatic.com/D_NQ_NP_803674-MLC42310329593_062020-O.webp'},  
  //];
  libros = [
    { id: 1,  titulo: 'Cien años de soledad',               autor: 'Gabriel García Márquez',  genero: 'Realismo',        publicado: true,   espa: true, fecha: '1967', idioma: 'Español',       descripcion: 'Una obra maestra del realismo mágico, narra la historia de la familia Buendía en el pueblo ficticio de Macondo. Gabriel García Márquez explora temas de soledad, amor, muerte y el paso del tiempo en esta novela emblemática.',                                            img: 'https://www.rae.es/sites/default/files/portada_cien_anos_de_soledad_0.jpg'},
    { id: 2,  titulo: '1984',                               autor: 'George Orwell',           genero: 'ficción',        publicado: true,   espa: true, fecha: '1949', idioma: 'Inglés',        descripcion: 'En una sociedad distópica gobernada por un régimen totalitario, Winston Smith lucha contra la opresión del omnipresente Gran Hermano. George Orwell revela los peligros de la vigilancia, la manipulación de la verdad y la destrucción del pensamiento individual.',       img: 'https://m.media-amazon.com/images/I/71sOSrd+JxL._AC_UF1000,1000_QL80_.jpg'},
    { id: 3,  titulo: 'El señor de los anillos',            autor:'J.R.R. Tolkien',           genero: 'Fantasía',               publicado: true,   espa: true, fecha: '1954', idioma: 'Inglés',        descripcion: 'La épica trilogía de J.R.R. Tolkien sigue la misión de Frodo Bolsón para destruir el Anillo Único y salvar la Tierra Media. Acompañado por valientes amigos, enfrentan peligrosas fuerzas en una historia de heroísmo, amistad y sacrificio.',                              img: 'https://www.planetadelibros.com/usuaris/libros/fotos/357/original/portada_el-senor-de-los-anillos-1-la-comunidad-del-anillo_j-r-r-tolkien_202207271304.jpg'},
    { id: 4,  titulo: 'Orgullo y prejuicio',                autor: 'Jane Austen',             genero: 'Novela',       publicado: false,   espa: true, fecha: '1813', idioma: 'Inglés',        descripcion: 'En esta novela de Jane Austen, Elizabeth Bennet y el orgulloso Mr. Darcy se enfrentan a malentendidos y prejuicios sociales mientras descubren el verdadero significado del amor y el respeto. Es una crítica ingeniosa a las normas sociales del siglo XIX.',              img: 'https://www.elejandria.com/covers/Orgullo_y_prejuicio-Jane_Austen-lg.png'},
    { id: 5,  titulo: 'El código Da Vinci',                 autor: 'DanBrown',                genero: 'Suspense',               publicado: true,   espa: true, fecha: '2003', idioma: 'Inglés',        descripcion: 'Robert Langdon, un profesor de simbología, se embarca en una emocionante búsqueda para resolver un misterioso asesinato que lo lleva a descubrir secretos ocultos de la historia y el cristianismo. La novela de Dan Brown combina acción, arte y conspiraciones.',         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzGzZ6k9gvSQx_DDfyeKxIxPQVsVXi9aycQ&s'},
    { id: 6,  titulo: 'La sombra del viento',               autor: 'Carlos Ruiz Zafón',       genero: 'Misterio',               publicado: false,  espa: true, fecha: '2001', idioma: 'Español',       descripcion: 'En la Barcelona de la posguerra, Daniel Sempere descubre un misterioso libro que cambiará su vida. Mientras investiga la historia del autor, se ve envuelto en una trama llena de secretos, tragedias y pasiones olvidadas. Una novela cautivadora de Carlos Ruiz Zafón.',  img: 'https://images.cdn2.buscalibre.com/fit-in/360x360/30/57/3057e792c1953b16740975d6fa56664f.jpg'},
    { id: 7,  titulo: 'El alquimista',                      autor: 'Paulo Coelho',            genero: 'filosófia',     publicado: true,   espa: true, fecha: '1988', idioma: 'Portugués',     descripcion: 'La historia de Santiago, un joven pastor que emprende un viaje en busca de un tesoro en las pirámides de Egipto. Paulo Coelho explora temas de destino, propósito y la importancia de perseguir los sueños en esta inspiradora novela.',                                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fu1DiLxwD34XFhlFpPUa5d_NgH5ibmyF9A&s'},
    { id: 8,  titulo: 'El nombre del viento',               autor: 'Patrick Rothfuss',        genero: 'Fantasía',               publicado: false,  espa: true, fecha: '2007', idioma: 'Inglés',        descripcion: 'La vida de Kvothe, un legendario mago y músico, es narrada desde su infancia hasta convertirse en una figura mítica. Patrick Rothfuss teje una rica historia de magia, aventuras y misterios en un mundo fascinante lleno de leyendas.',                                    img: 'https://m.media-amazon.com/images/I/91PjnllfsxL._AC_UF894,1000_QL80_.jpg'},
    { id: 9,  titulo: 'Rayuela',                            autor: 'Julio Cortázar',          genero: 'Ficción',   publicado: true,   espa: true, fecha: '1963', idioma: 'Español',       descripcion: 'Esta innovadora novela de Julio Cortázar permite múltiples lecturas y sigue la vida de Horacio Oliveira en París y Buenos Aires. Es una exploración filosófica de la existencia, el amor y el arte, desafiando las convenciones narrativas tradicionales.',                 img: 'https://www.unimart.com/cdn/shop/files/9788466331906.jpg?v=1699115876'},
    { id: 10, titulo: 'El arte de la guerra',               autor: 'Sun Tzu',                 genero: 'Militar',        publicado: false,  espa: true, fecha: 'Siglo V a.C', idioma: 'Chino',  descripcion: 'Un antiguo tratado chino escrito por Sun Tzu que ofrece principios estratégicos sobre la guerra y el liderazgo, aplicables no solo al ámbito militar, sino también a la vida cotidiana y los negocios. Su sabiduría ha trascendido generaciones.',                          img: 'https://www.panoramadigital.co.cr/wp-content/uploads/2020/03/arte-de-la-guerra.jpg'},
    { id: 11, titulo: 'Harry Potter 1', autor: 'J.K.Rowling',             genero: 'Aventura',               publicado: true,   espa: true, fecha: '1997', idioma: 'Inglés',        descripcion: 'Harry Potter descubre que es un mago y comienza sus estudios en Hogwarts. J.K. Rowling crea un universo mágico lleno de aventuras, amistad y desafíos mientras Harry se enfrenta a los primeros indicios de su lucha contra el malvado Lord Voldemort.',                    img:'https://www.ellector.com.py/product_photos/24b89be1/2084dc2072309b0bbae36abc8fcca2c3.jpg'}, 
    { id: 12, titulo: 'Rebelión en la granja',              autor:'George Orwell',            genero: 'Ciencia ficción',        publicado: false,  espa: true, fecha: '1945', idioma: 'Inglés',        descripcion: 'Una fábula satírica de George Orwell en la que los animales de una granja derrocan a los humanos solo para ver cómo una nueva tiranía emerge. Es una crítica mordaz sobre la corrupción del poder y el totalitarismo.',                                                     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKtyHGaKeAY19QFhdYBnis3_OxHImmi6bnA&s'},
    //{ id: 12, titulo: 'El Diario De Ana Freank', autor: 'Otto Frank', genero: 'Historia', publicado: true, img: 'https://http2.mlstatic.com/D_NQ_NP_803674-MLC42310329593_062020-O.webp'},
  ];

    noLibros = false;
    lib = [...this.libros];
    librosVisibles = true;

    mostrar(){
      this.lib = [...this.libros] 
      this.v = false
      this.librosVisibles = true
      this.noLibros= false
    }
    publicado(){
        this.lib = this.libros.filter(libro => libro.publicado === true);   
        this.v = true
        this.librosVisibles = false
        this.noLibros = false
    }

    noPublicado(){
      this.lib = this.libros.filter(libro => libro.publicado === false);
      this.v = false
      this.librosVisibles = false
      this.noLibros = false
    }
    ocultar(){
      this.lib = []
      this.v = false
      this.librosVisibles = false
      this.noLibros = true
    }
    v = false;
    
    
    

  }
