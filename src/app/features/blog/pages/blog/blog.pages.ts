import { Component, ChangeDetectionStrategy, inject, computed } from "@angular/core"
import { HeaderBlog } from "@features/blog/components/blog/header/header.blog"
import { BlogService } from "@features/blog/services/blog.service"
import { DaisyListChildList } from "@shared/components/ui/daisy/components/list/daisy-list-child/daisy-list-child.list"
import { DaisyListUi } from "@shared/components/ui/daisy/daisy-list/daisy-list.ui"

@Component({
  selector: 'pages-blog',
  imports: [DaisyListUi, DaisyListChildList, HeaderBlog],
  templateUrl: './blog.pages.html',
  styleUrl: './blog.pages.scss',
  providers:[BlogService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPages {

  readonly #blogService = inject(BlogService)

  protected readonly news = computed(() => this.#blogService.lastedNews().reverse())

}
