import { ThemeService } from '@/services';
import { AvatarComponent } from '@/shared/components/avatar/avatar.component';
import { JiraIconComponent } from '@/shared/components/icons';
import { HlmButtonDirective } from '@/shared/components/spartans/ui-button-helm/src';
import { HlmDialogService } from '@/shared/components/spartans/ui-dialog-helm/src';
import { HlmIconComponent } from '@/shared/components/spartans/ui-icon-helm/src';
import { HlmPopoverCloseDirective, HlmPopoverContentDirective } from '@/shared/components/spartans/ui-popover-helm/src';
import { HlmSheetService } from '@/shared/components/spartans/ui-sheet-helm/src/lib/hlm-sheet.service';
import { HlmTooltipComponent, HlmTooltipTriggerDirective } from '@/shared/components/spartans/ui-tooltip-helm/src';
import { RootState } from '@/stores/root-store';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideShieldQuestion, lucideSun } from '@ng-icons/lucide';
import { Store } from '@ngrx/store';
import {
  BrnPopoverCloseDirective,
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/ui-popover-brain';
import { BrnTooltipContentDirective } from '@spartan-ng/ui-tooltip-brain';
import { AddIssueModalComponent } from '../../modals/add-issue-modal/add-issue-modal.component';
import { SearchDrawerComponent } from '../../search/search-drawer/search-drawer.component';
import { NavbarIconComponent } from '../navbar-icon/navbar-icon.component';

export type NavbarIcon = 'search' | 'plus';

class NavItem {
  constructor(
    public icon: NavbarIcon,
    public tooltip: string,
    public handler: Handler
  ) { }
}

type Handler = () => void;

@Component({
  standalone: true,
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  imports: [
    CommonModule,
    AvatarComponent,
    HlmButtonDirective,
    NavbarIconComponent,
    HlmIconComponent,
    HlmTooltipComponent,
    HlmTooltipTriggerDirective,
    BrnTooltipContentDirective,
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    BrnPopoverCloseDirective,
    HlmPopoverContentDirective,
    HlmPopoverCloseDirective,
    JiraIconComponent,
  ],
  providers: [provideIcons({ lucideShieldQuestion, lucideSun, lucideMoon })],
})
export class NavbarLeftComponent implements OnInit {
  private readonly _hlmDialogService = inject(HlmDialogService);
  private readonly _hlmSheetService = inject(HlmSheetService);
  private _store = inject<Store<RootState>>(Store<RootState>);
  private _themeService = inject(ThemeService);
  public theme$ = this._themeService.theme$;

  items: NavItem[] = [];
  user$ = this._store.select(state => state.user);

  ngOnInit(): void {
    this.items = [
      new NavItem('search', 'Search issues', this.openSearchDrawler.bind(this)),
      new NavItem('plus', 'Create issue', this.openCreateIssueModal.bind(this)),
    ];
  }

  toggleTheme() {
    this._themeService.toggleDarkMode();
  }

  openCreateIssueModal() {
    this._hlmDialogService.open(AddIssueModalComponent, {
      contentClass: 'w-full max-w-full md:w-[750px]',
    });
  }

  openSearchDrawler() {
    this._hlmSheetService.open(SearchDrawerComponent, {
      context: {
        side: 'left',
      },
    });
  }
}
