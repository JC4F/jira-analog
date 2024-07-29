import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-markting',
  standalone: true,
  template: `
    <div
      class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
    >
      <a hlmBtn variant="outline" routerLink="/project">Go to project</a>
    </div>
  `,
  imports: [HlmButtonDirective],
})
export default class MarketingComponent { }
