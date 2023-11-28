import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;
  private apiUrl = 'http://localhost:3000/users';

  constructor(
    private fb: FormBuilder, 
    private logService: LogService,
    private http: HttpClient
  ) {
    this.userForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.logService.log('Formulário Enviado: ' + JSON.stringify(this.userForm.value));
      this.http.post(this.apiUrl, this.userForm.value).subscribe(
        response => {
          console.log('Sucesso:', response);
        },
        error => {
          console.error('Erro ao enviar o formulário:', error);
        }
      );
    }
  }
}

