import { SvgDefinitionsComponent } from '@/shared/components/svg-definitions/svg-definitions.component';
import { ProjectActions } from '@/stores/project/projects.actions';
import { RootState } from '@/stores/root-store';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavigationComponent } from './project/_components/navigation/navigation/navigation.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, SvgDefinitionsComponent, NavigationComponent],
  template: `
    <div class="w-[100vw] h-[100vh] flex">
      <app-navigation />
      <div class="overflow-auto flex-1">
        <router-outlet></router-outlet>
      </div>
    </div>
    <svg-definitions />
  `,
})
export default class ProjectComponent implements OnInit {
  expanded: boolean;

  constructor(private _store: Store<RootState>) {
    this.expanded = true;
  }

  ngOnInit(): void {
    this._store.dispatch(ProjectActions.fetchProject());
  }
}
