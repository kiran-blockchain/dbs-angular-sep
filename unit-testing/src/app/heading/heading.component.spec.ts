import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingComponent } from './heading.component';
describe('HeadingComponent Class ', () => {
  let headingInstance:any;
  let fixture :ComponentFixture<HeadingComponent>;
  //let us create a dummy angular module
  //let us add the component to the dummy module Declarations
  //let us add the component to the html
  //let us see the output of the component
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingComponent ],
    })
    .compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(HeadingComponent);
    headingInstance = fixture.componentInstance;
    fixture.detectChanges();//two way binding and interpolation
  })

  it('should be existing and can be instantiated', () => {
    expect(headingInstance).toBeDefined();
  });
  
  it('should be having property called title', () => { 
    expect(headingInstance.title).toBe('Unit Testing');
  });
  
  it("should be having a method changeTitle", () => {
    headingInstance.changeTitle();
    expect(headingInstance.title).toBe('I am good');
  });

  it("title-on html ",()=>{
    let compiledHtml = fixture.nativeElement;
    let getPTag= compiledHtml.querySelector('p').textContent;
    console.log("Component PTag", getPTag);
    expect(getPTag).toBe('Unit Testing');
  });
  it("Handle Click ",()=>{
    let compiledHtml = fixture.nativeElement;
    let getButton= compiledHtml.querySelector('button');
    getButton.click();
    fixture.detectChanges();
    let getPTag= compiledHtml.querySelector('p').textContent;
    expect(getPTag).toBe('I am good');
    
  });

})