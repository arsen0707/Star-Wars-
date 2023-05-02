import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleListComponent } from './people-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';



describe('PeoplelistComponent', () => {
  let component: PeopleListComponent;
  let fixture: ComponentFixture<PeopleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleListComponent ],
      imports: [ HttpClientModule,NgxPaginationModule ],
     
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
