import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './component/auth/auth.component';
import {RegisterComponent} from './component/register/register.component';
import {FeedComponent} from './component/feed/feed.component';
import {ProfileComponent} from './component/profile/profile.component';
import {ProjectComponent} from './component/project/project.component';
import {NewProjectComponent} from './component/new-project/new-project.component';

const routes: Routes = [
	{
		path: 'auth',
		component: AuthComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'feed',
		component: FeedComponent
	},
	{
		path: 'profile',
		component: ProfileComponent
	},
	{
		path: 'project/create',
		component: NewProjectComponent
	},
	{
		path: ':login/:name',
		component: ProjectComponent
	},
	{
		path: ':login/:name/overview',
		redirectTo: ':login/:name'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
