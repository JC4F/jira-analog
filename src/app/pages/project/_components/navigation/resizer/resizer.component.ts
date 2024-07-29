import { HlmButtonDirective } from '@/shared/components/spartans/ui-button-helm/src';
import { SvgIconComponent } from '@/shared/components/svg-icon/svg-icon.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resizer',
  standalone: true,
  templateUrl: './resizer.component.html',
  imports: [SvgIconComponent, HlmButtonDirective],
})
export class ResizerComponent {
  @Input() expanded: boolean;

  get icon() {
    return this.expanded ? 'chevron-left' : 'chevron-right';
  }
}
