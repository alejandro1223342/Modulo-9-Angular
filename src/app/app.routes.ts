import { Routes } from '@angular/router';
import { miPerfil } from './miPerfil/miPerfil';
import { Producto } from './components/producto/producto';
import { Usuario } from './components/usuario/usuario';
import { Ventas } from './components/ventas/ventas';
import { Transacciones } from './components/transacciones/transacciones';
import { Prestamos } from './components/prestamos/prestamos';
import { Cuentas } from './cuentas/cuentas';
import { Padre } from './components/padre/padre';
import { Cine } from './components/cine/cine';
import { Pagina404 } from './components/pagina404/pagina404';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: miPerfil },
    { path: 'cuenta', component: Cuentas },
    { path: 'transacciones', component: Transacciones },
    { path: 'prestamos', component: Prestamos },
    { path: 'producto', component: Producto },
    { path: 'usuario', component: Usuario },
    { path: 'ventas', component: Ventas },
    { path: 'padre', component: Padre },
    { path: 'cine', component: Cine },
    { path: "**", component: Pagina404}
];
