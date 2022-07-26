import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmorsComponent } from './components/character-sheet/armors/armors.component';
import { AttributesComponent } from './components/character-sheet/attributes/attributes.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { DieSelectorComponent } from './components/die-selector/die-selector.component';
import { EdgesComponent } from './components/character-sheet/edges/edges.component';
import { GearComponent } from './components/character-sheet/gear/gear.component';
import { HindrancesComponent } from './components/character-sheet/hindrances/hindrances.component';
import { PowersComponent } from './components/character-sheet/powers/powers.component';
import { SkillsComponent } from './components/character-sheet/skills/skills.component';
import { WeaponsComponent } from './components/character-sheet/weapons/weapons.component';
import { ModalComponent } from './components/modal/modal.component';
import { BaseInfoComponent } from './components/character-sheet/base-info/base-info.component';
import { DerivedStatsComponent } from './components/character-sheet/derived-stats/derived-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSheetComponent,
    DieSelectorComponent,
    ModalComponent,
    AttributesComponent,
    SkillsComponent,
    WeaponsComponent,
    ArmorsComponent,
    EdgesComponent,
    GearComponent,
    PowersComponent,
    HindrancesComponent,
    BaseInfoComponent,
    DerivedStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
