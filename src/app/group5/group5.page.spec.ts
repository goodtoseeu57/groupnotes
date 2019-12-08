import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Group5Page } from './group5.page';

describe('Group5Page', () => {
  let component: Group5Page;
  let fixture: ComponentFixture<Group5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Group5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
