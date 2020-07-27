import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesPeliculaPage } from './detalles-pelicula.page';

describe('DetallesPeliculaPage', () => {
  let component: DetallesPeliculaPage;
  let fixture: ComponentFixture<DetallesPeliculaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPeliculaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesPeliculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
