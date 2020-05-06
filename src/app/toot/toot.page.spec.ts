import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TootPage } from './toot.page';

describe('TootPage', () => {
  let component: TootPage;
  let fixture: ComponentFixture<TootPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TootPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TootPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
