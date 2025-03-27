import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [CommonModule, FormsModule] 
})
export class AppComponent {
  tasks: string[] = []; 
  newTask: string = ''; 

  
  addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask);
      this.newTask = ''; 
    }
  }

  
  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  
  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    alert('Lista salva com sucesso!');
  }

  
  loadTasks(): void {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }
}
