<mat-form-field>
 <mat-select placeholder="Kunde" [(ngModel)]="selectedKundenFilter"
name="selectedKundeFilter" multiple>
 <mat-option (mouseenter)="getToolTipMessageKunde(data.entry)"
[matTooltip]="this.tooltipMsg"
 matTooltipPosition="right" matTooltipClass="kunde-tooltip" [matTooltipShowDelay]="500"
 *ngFor="let data of ticketDataKunde" [value]="data.entry.id">
 {{data.entry.name}}
 </mat-option>
 </mat-select>
 </mat-form-field>
