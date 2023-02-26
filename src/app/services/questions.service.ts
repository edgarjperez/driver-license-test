import { Injectable } from '@angular/core';
import { Question } from '../shared/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  questions: Question[];

  constructor() {
    this.questions = [
      {
        id: 1,
        question:
          '¿Cuál es la velocidad máxima permitida en una zona urbana en Colombia?',
        answers: [
          { answer: '30 km/h', correct: false },
          { answer: '50 km/h', correct: true },
          { answer: '70 km/h', correct: false },
        ],
      },
      {
        id: 2,
        question:
          '¿Cuál es la distancia mínima que un conductor debe mantener al adelantar a otro vehículo en una carretera de dos carriles?',
        answers: [
          { answer: '0,5 metros', correct: false },
          { answer: '1 metro', correct: true },
          { answer: '2 metros', correct: false },
        ],
      },
      {
        id: 3,
        question:
          '¿En qué situaciones se permite el uso del teléfono celular mientras se conduce en Colombia?',
        answers: [
          { answer: 'En cualquier situación', correct: false },
          { answer: 'Solo en caso de emergencia', correct: true },
          {
            answer: 'Si se utiliza un dispositivo manos libres',
            correct: false,
          },
        ],
      },
      {
        id: 4,
        question:
          '¿Qué significa la señal de tráfico que muestra una flecha verde que apunta hacia la derecha?',
        answers: [
          { answer: 'Girar a la izquierda', correct: false },
          { answer: 'Girar a la derecha', correct: true },
          { answer: 'Continuar en línea recta', correct: false },
        ],
      },
      {
        id: 5,
        question:
          '¿Qué deben hacer los conductores al acercarse a una zona escolar en Colombia?',
        answers: [
          { answer: 'Aumentar la velocidad', correct: false },
          {
            answer:
              'Reducir la velocidad y prestar atención a los estudiantes y peatones',
            correct: true,
          },
          { answer: 'Ignorar la zona escolar', correct: false },
        ],
      },
      {
        id: 6,
        question: '¿Cuándo deben usarse las señales de giro en Colombia?',
        answers: [
          { answer: 'Solo por la noche', correct: false },
          {
            answer: 'Para indicar cambios de carril, giros y paradas',
            correct: true,
          },
          { answer: 'Solo en situaciones de emergencia', correct: false },
        ],
      },
    ];
  }

  getQuestions(): Question[] {
    return [...this.questions];
  }
}
