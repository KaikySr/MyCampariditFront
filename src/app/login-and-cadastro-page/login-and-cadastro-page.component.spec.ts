import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndCadastroPageComponent } from './login-and-cadastro-page.component';

describe('LoginAndCadastroPageComponent', () => {
  let component: LoginAndCadastroPageComponent;
  let fixture: ComponentFixture<LoginAndCadastroPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAndCadastroPageComponent]
    });
    fixture = TestBed.createComponent(LoginAndCadastroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
