// import { MenuDesktop } from '@/components/layouts/menu-desktop/menu-desktop';
import { LocationDetailPage } from './_components/locations/location-detail';
import BlogDetailPage from './_components/posts/post-detail.page';
import LadingScrollPage from './_components/projects/landing-scroll.page';
import { ProjectDetailPage } from './_components/projects/project-detail.page';
import ListPage from './_components/socials/list.page';
import UserDetailPage from './_components/users/user-detai.page';

type PageHandler = {
  match: (slug: string) => boolean;
  isMenu?: boolean;
  render: (slug: string) => React.ReactNode;
};

const pageHandlers: PageHandler[] = [
  {
    match: (slug) => /^spx-.+/.test(slug),
    isMenu: true,
    render: (slug) => <BlogDetailPage slug={slug} />
  },
  {
    match: (slug) => /^spl-.+/.test(slug),
    isMenu: true,
    render: (slug) => <LocationDetailPage slug={slug} />
  },
  {
    match: (slug) => /^spp-.+/.test(slug),
    isMenu: true,
    render: (slug) => <ProjectDetailPage slug={slug} />
  },
  {
    match: (slug) => /^spk-.+/.test(slug),
    isMenu: false,
    render: (slug) => <ListPage slug={slug} />
  },
  {
    match: (slug) => /^spu-.+/.test(slug),
    isMenu: false,
    render: (slug) => <UserDetailPage slug={slug} />
  }
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug = '' } = await params;

  const handler = pageHandlers.find((h) => h.match(slug));

  const nodeComponent: React.ReactNode = handler ? (
    <>
      {/* <MenuDesktop /> */}
      {handler.render(slug)}
    </>
  ) : (
    <LadingScrollPage />
  );

  return nodeComponent;
}
