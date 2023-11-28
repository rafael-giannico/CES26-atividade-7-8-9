import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

interface AuthResponse {
  token: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://yourbackend.com/api/authenticate'; // Substitua pela URL real do seu endpoint de autenticação

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<AuthResponse>(this.authUrl, { username, password }).pipe(
      tap(response => {
        localStorage.setItem('authToken', response.token); // Armazena o token de autenticação
      }),
      map(response => !!response.token), // Transforma o token em um booleano
      catchError(this.handleError('login', false)), // Trata erros de login
    );
  }
  

  logout(): void {
    localStorage.removeItem('authToken'); // Limpa o token de autenticação
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    // Aqui você pode adicionar lógica para verificar a validade do token, se necessário
    return !!token; // Retorna verdadeiro se o token existir
  }

  // Implementação genérica de tratamento de erro
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`); // log to console instead
      return of(result as T);
    };
  }
}
    