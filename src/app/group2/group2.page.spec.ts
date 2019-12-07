import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Group2Page } from './group2.page';

describe('Group2Page', () => {
  let component: Group2Page;
  let fixture: ComponentFixture<Group2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Group2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
