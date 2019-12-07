import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Group1Page } from './group1.page';

describe('Group1Page', () => {
  let component: Group1Page;
  let fixture: ComponentFixture<Group1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Group1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
