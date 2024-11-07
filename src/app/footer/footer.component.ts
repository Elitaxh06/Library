import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <!--
      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; 2024 Company, Inc. All rights reserved.</p>
        <div class="redes">

          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a href="https://github.com/Elitaxh06" target="_blank" class="link-body-emphasis">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
              </a>
            </li>
            <li class="ms-3"><a target="_blank" class="link-body-emphasis" href="https://x.com/Esteban71614502"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
            <li class="ms-3"><a target="_blank" class="link-body-emphasis" href="https://www.instagram.com/esteban_pizarro25/"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
            <! -- ** aqui va un comentario **
              <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
            - ->
          </ul>
        </div>
      </div>
    -->
    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; 2024 Company, Inc. All rights reserved.</p>
        <div class="redes">

          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a href="https://github.com/" target="_blank" class="link-body-emphasis">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
              </a>
            </li>
            <li class="ms-3"><a target="_blank" class="link-body-emphasis" href="https://x.com"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
            <li class="ms-3"><a target="_blank" class="link-body-emphasis" href="https://www.instagram.com"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
            <!--
              <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
            -->
          </ul>
        </div>
      </div>
    </footer>
  `,
  styles: `
    footer{
 
    width: 100%;
    height: auto;
    padding: 2em;
  }
  ul li:hover{
    border: solid 2px #
  }
  footer p{
   font-size: 1.2em;
  }
  .redes{
    margin-right: 1em;
    font-size: 3em;
  }

  .redes ul li:hover{

      border-bottom: solid 3px rgb(179, 49, 69);
  }

    `
})
export class FooterComponent {

}
