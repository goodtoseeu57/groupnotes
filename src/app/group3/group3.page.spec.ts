import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Group3Page } from './group3.page';

describe('Group3Page', () => {
  let component: Group3Page;
  let fixture: ComponentFixture<Group3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Group3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
