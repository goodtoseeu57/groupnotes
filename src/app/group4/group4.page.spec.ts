import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Group4Page } from './group4.page';

describe('Group4Page', () => {
  let component: Group4Page;
  let fixture: ComponentFixture<Group4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Group4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
