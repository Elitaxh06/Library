import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [RouterLink],
  template: `
    <button [routerLink]="['/']" id="volver">
      <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
      <span>Volver</span>
    </button>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Libroteca</h1>
          <h2>Nosotros</h2>
          <p id="lead">
            Fundada en 2024, nuestra biblioteca ha sido un espacio dedicado al conocimiento, la cultura y el descubrimiento literario. 
            A lo largo de los años, hemos crecido en la cantidad de títulos, ofreciendo a nuestros lectores una experiencia enriquecedora a través de 
            una cuidada selección de libros. En la actualidad, contamos con una colección de {{libros.length}} libros que abordan diferentes géneros, desde la ficción 
            más clásica hasta la literatura contemporánea, pasando por ensayos, fantasía y novelas de ciencia ficción. Cada libro ha sido seleccionado con 
            el propósito de fomentar el amor por la lectura y ofrecer un espacio en el que la comunidad pueda encontrar inspiración, aprender y disfrutar de historias inolvidables.
          </p>
        </div>
      </div>
    </div>

    <!-- inicio del segundo container -->
    <div class="container-fluid">

       <div class="row">
         <div id="libro" class="col-12 col-lg-3">
           @defer(on viewport){
             <img class="img-fluid" src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2tzJTIwYWVzdGhldGljfGVufDB8fDB8fHww" alt="imagen de libro">
            }@placeholder {
              <p>Cargando...</p>
            }
          </div>
          <div id="libro" class="col-12 col-lg-6">
            <p id="lectura" class="lead">
              "La lectura es una puerta hacia mundos infinitos y una herramienta poderosa para el crecimiento personal. A través de los libros, no solo adquirimos conocimientos,
              sino que también desarrollamos empatía, imaginación y una mayor comprensión del mundo que nos rodea. Leer nos permite viajar a través del tiempo y el espacio, 
              conocer diferentes culturas y explorar nuevas ideas. Es un acto que enriquece nuestra mente, alimenta nuestra curiosidad y nos invita a reflexionar. En nuestra 
              biblioteca, creemos que cada libro es una oportunidad de aprender, crecer y soñar." <br>
              <!--
              <button [routerLink]="['/']" class="btn btn-primary">Libros</button>
              -->
            </p>
          </div>
        </div>
        <!-- cierre de la fila -->
    </div>
      <!-- fin del segundo container -->
`,
  styles: `

    .container{
      text-align: center;
      margin-top: 2em;
    }
    #libro button{
     
    }
    #volver {
    margin-left: 1em;
    display: flex;
    height: 3em;
    width: 9em;
    align-items: center;
    justify-content: center;
    background-color: #bba7a74b;
    border-radius: 3px;
    letter-spacing: 1px;
    transition: all 0.2s linear;
    color: black;
    cursor: pointer;
    border: solid 1px #000;
    border: none;
    background: rgba(177, 177, 177, 0.562);
  }

  #volver > svg {
      margin-right: 5px;
      margin-left: 5px;
      font-size: 20px;
      transition: all 0.5s ease-in;
  }

  #volver:hover > svg {
      font-size: 1.2em;
      transform: translateX(-7px);
  }

  #volver:hover {
      box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
      transform: translateY(-2px);
  }


    h2{
      margin-top: 1em;
    }

    #lead{
      font-size: 1.4em;
      margin-top: 1em;
      font-weight: bol;
    }
    img{
      width: 100%;
      height: 29em;
    }
    
    #libro, p{
      font-size: 1.2em;
      margin-top: 6em;
    }

    #libro{
      display: flex;
      margin-top: 5em;
      
    }

    #lectura{
      text-align:center;
      padding-right: 4em;
    }
    button{
      margin-top: 1.3em;
      background-color: cornsilk;
      color: #000;
      width: 6.6em;
      height: 2.5em;
    }

  `
})
export class NosotrosComponent {
  libros = [
    { id: 1,  titulo: 'Cien años de soledad',               autor: 'Gabriel García Márquez',  genero: 'Realismo mágico',        publicado: true,   espa: true, fecha: '1967', idioma: 'Español',       descripcion: 'Una obra maestra del realismo mágico, narra la historia de la familia Buendía en el pueblo ficticio de Macondo. Gabriel García Márquez explora temas de soledad, amor, muerte y el paso del tiempo en esta novela emblemática.',                                            img: 'https://www.rae.es/sites/default/files/portada_cien_anos_de_soledad_0.jpg'},
    { id: 2,  titulo: '1984',                               autor: 'George Orwell',           genero: 'Ciencia ficción',        publicado: true,   espa: true, fecha: '1949', idioma: 'Inglés',        descripcion: 'En una sociedad distópica gobernada por un régimen totalitario, Winston Smith lucha contra la opresión del omnipresente Gran Hermano. George Orwell revela los peligros de la vigilancia, la manipulación de la verdad y la destrucción del pensamiento individual.',       img: 'https://m.media-amazon.com/images/I/71sOSrd+JxL._AC_UF1000,1000_QL80_.jpg'},
    { id: 3,  titulo: 'El señor de los anillos',            autor:'J.R.R. Tolkien',           genero: 'Fantasía',               publicado: true,   espa: true, fecha: '1954', idioma: 'Inglés',        descripcion: 'La épica trilogía de J.R.R. Tolkien sigue la misión de Frodo Bolsón para destruir el Anillo Único y salvar la Tierra Media. Acompañado por valientes amigos, enfrentan peligrosas fuerzas en una historia de heroísmo, amistad y sacrificio.',                              img: 'https://www.planetadelibros.com/usuaris/libros/fotos/357/original/portada_el-senor-de-los-anillos-1-la-comunidad-del-anillo_j-r-r-tolkien_202207271304.jpg'},
    { id: 4,  titulo: 'Orgullo y prejuicio',                autor: 'Jane Austen',             genero: 'Novela romántica',       publicado: true,   espa: true, fecha: '1813', idioma: 'Inglés',        descripcion: 'En esta novela de Jane Austen, Elizabeth Bennet y el orgulloso Mr. Darcy se enfrentan a malentendidos y prejuicios sociales mientras descubren el verdadero significado del amor y el respeto. Es una crítica ingeniosa a las normas sociales del siglo XIX.',              img: 'https://www.elejandria.com/covers/Orgullo_y_prejuicio-Jane_Austen-lg.png'},
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
}
