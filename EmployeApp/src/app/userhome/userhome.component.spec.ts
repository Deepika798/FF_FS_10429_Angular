import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhomeComponent } from './userhome.component';
import {​​​​​​​​ HttpClientTestingModule, HttpTestingController }​​​​​​​​ from '@angular/common/http/testing';
import {​​​​​​​​HttpClientModule}​​​​​​​​ from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
describe('UserhomeComponent', () => {
  let component: UserhomeComponent;
  let fixture: ComponentFixture<UserhomeComponent>;
  beforeEach(() =>TestBed.configureTestingModule({​​​​​​​​
    imports: [HttpClientTestingModule], 
    providers: [UserhomeComponent]
      }​​​​​​​​));
    
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ UserhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
