import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AuthGuard } from './services/auth.guard';
import { ResolveGuard } from './services/resolve.guard';
import { RoleGuard } from './services/role.guard';
import { NotCompleteGuard } from './services/not-complete.guard';
import { ModuleGuard } from './services/module.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent},

  { path: 'products', 
    component: ProductsComponent, 
    resolve: {data: ResolveGuard}
  },

  { path: 'about', 
    component: AboutComponent, 
    children: [{ path: 'edit', component: EditAboutComponent}], 
    canActivateChild: [RoleGuard]
  },

  { path: 'contact', 
    component: ContactComponent, 
    canDeactivate: [NotCompleteGuard]
  },

  { path: 'offers', 
    loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule), 
    canMatch: [ModuleGuard]},

  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  
  { path: 'access-denied', component: AccessDeniedComponent},
  
  { path: '', redirectTo: '/home', pathMatch: 'full'},  // Default route
  
  { path: '**', redirectTo: '/home', pathMatch: 'full'} // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
