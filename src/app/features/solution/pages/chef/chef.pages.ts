import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentChef } from "../../components/chef/content/content.chef";

@Component({
  selector: 'pages-chef',
  imports: [ContentChef],
  templateUrl: './chef.pages.html',
  styleUrl: './chef.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChefPages { }
