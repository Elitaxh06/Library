import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CatalagoComponent } from './catalago/catalago.component';
import { DataLibComponent } from './data-lib/data-lib.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NgModule } from '@angular/core';




export const routes: Routes = [
    { path: "catalogo", component: CatalagoComponent},
    { path: "", component: CatalagoComponent},
    { path: "lib/:type", component: DataLibComponent},
    { path: "acerca-de", component: NosotrosComponent},
    { path: "carrito", component: CarritoComponent},
    { path: "**", redirectTo: "/", pathMatch: 'full'},
    
    
];

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

