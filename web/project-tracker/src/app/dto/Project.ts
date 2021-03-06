import {User} from './User';

export class Project {
	id: number;
	isPublic: boolean;
	created: Date;
	name: string;
	description: string;
	about: string;
	user: User;
}
