import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/genral/header/header.component';
import { FooterComponent } from './comps/genral/footer/footer.component';
import { NavComponent } from './comps/genral/nav/nav.component';
import { ArrowComponent } from './comps/genral/arrow/arrow.component';
import { DrinkCardComponent } from './comps/cards/drink-card/drink-card.component';
import { SnacksCardComponent } from './comps/cards/snacks-card/snacks-card.component';
import { CookingCardComponent } from './comps/cards/cooking-card/cooking-card.component';
import { DrinksPanelComponent } from './comps/panels/drinks-panel/drinks-panel.component';
import { SnacksPanelComponent } from './comps/panels/snacks-panel/snacks-panel.component';
import { CookingPanelComponent } from './comps/panels/cooking-panel/cooking-panel.component';
import { BasketPanelComponent } from './comps/panels/basket-panel/basket-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ArrowComponent,
    DrinkCardComponent,
    SnacksCardComponent,
    CookingCardComponent,
    DrinksPanelComponent,
    SnacksPanelComponent,
    CookingPanelComponent,
    BasketPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
