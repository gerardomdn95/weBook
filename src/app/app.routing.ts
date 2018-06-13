import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AddComponent } from "./components/add/add.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { EditComponent } from "./components/edit/edit.component";
import { LandingComponent } from "./components/landing/landing.component";
import { LoginComponent } from "./components/login/LoginComponent";
import { OrderConfirmationComponent } from "./components/order-confirmation/order-confirmation.component";
import { StoreFrontComponent } from "./components/store-front/store-front.component";
import { PopulatedCartRouteGuard } from "./route-gaurds/populated-cart.route-gaurd";

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            {
                canActivate: [PopulatedCartRouteGuard],
                component: CheckoutComponent,
                path: "checkout"
            },
            {
                canActivate: [PopulatedCartRouteGuard],
                component: OrderConfirmationComponent,
                path: "confirmed"
            },
            {
                component: StoreFrontComponent,
                path: "store"
            },
            {
                component: LoginComponent,
                path: "login"
            },
            {
                component: AddComponent,
                path: "add"
            },
            {
                component: EditComponent,
                path: "edit"
            },
            {
                component: LandingComponent,
                path: "**"
            }
        ])
    ]
})
export class AppRoutingModule { }
