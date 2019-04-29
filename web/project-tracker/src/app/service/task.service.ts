import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {API_URL} from '../../globals';
import {Pageable} from '../dto/Pageable';
import {HttpClient} from '@angular/common/http';
import {NewTask} from '../dto/NewTask';
import {EditTask} from '../dto/EditTask';
import {Task} from '../dto/Task';

@Injectable({
	providedIn: 'root'
})
export class TaskService {

	constructor(
		private http: HttpClient
	) {
	}

	create(token: string, newTask: NewTask): Observable<Task> {
		return this.http.post<Task>(API_URL + 'task/create', newTask, {headers: {token: token}});
	}

	all(token: string, projectId: number, pageable: Pageable): Observable<Task[]> {
		return this.http.get<Task[]>(API_URL + 'task/all', {
			params: pageable.toHttpParams()
				.append('projectId', projectId.toString()),
			headers: {token: token}
		});
	}

	edit(token: string, editTask: EditTask): Observable<Task> {
		return this.http.post<Task>(API_URL + 'task/edit', editTask, {headers: {token: token}});
	}
}