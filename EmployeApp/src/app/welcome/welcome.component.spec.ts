import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WelcomeComponent } from './welcome.component';
import {​​​​​​​​ HttpClientTestingModule, HttpTestingController }​​​​​​​​ from '@angular/common/http/testing';
import {​​​​​​​​HttpClientModule}​​​​​​​​ from '@angular/common/http';
describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  beforeEach(() =>TestBed.configureTestingModule({​​​​​​​​
    imports: [HttpClientTestingModule], 
    providers: [WelcomeComponent]
      }​​​​​​​​));
    
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
