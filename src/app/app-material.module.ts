import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule,
    MatNativeDateModule, MatCardModule, MatExpansionModule, MatDatepickerModule,
    MatBadgeModule, MatPaginatorModule, MatSliderModule, MatProgressSpinnerModule
} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    imports: [CommonModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule,
        MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule,
        MatNativeDateModule, MatCardModule, MatExpansionModule, MatDatepickerModule,
        MatBadgeModule, MatPaginatorModule, MatMenuModule, MatSliderModule,
         MatProgressSpinnerModule],
    exports: [CommonModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule,
        MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule,
        MatNativeDateModule, MatCardModule, MatExpansionModule, MatDatepickerModule,
        MatBadgeModule, MatPaginatorModule, MatMenuModule, MatSliderModule,
         MatProgressSpinnerModule]
})

export class AngularMaterialModule { }