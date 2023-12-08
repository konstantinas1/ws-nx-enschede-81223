import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { AppShellComponent } from './app-shell/app-shell.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
    })
      .overrideComponent(AppComponent, {
        remove: { imports: [AppShellComponent] },
        add: { imports: [MockAppShellComponent] },
      })
      .compileComponents();
  });

  it('should include app-shell', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.innerHTML).toContain('app-shell');
  });

  it(`should include router-outlet`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.innerHTML).toContain('router-outlet');
  });
});

@Component({
  selector: 'app-shell',
  template: '<ng-content />',
  standalone: true,
})
class MockAppShellComponent {}
