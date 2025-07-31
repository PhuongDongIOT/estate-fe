import { LocationDetailPage } from './_components/locations/location-detail';
import BlogDetailPage from './_components/posts/post-detail.page';
import FullpageScroll from './_components/projects/fullpage-scroll';

type PageHandler = {
  match: (slug: string) => boolean;
  render: (slug: string) => React.ReactNode;
};

const pageHandlers: PageHandler[] = [
  {
    match: (slug) => /^spx-.+/.test(slug),
    render: (slug) => <BlogDetailPage slug={slug} />
  },
  {
    match: (slug) => /^spl-.+/.test(slug),
    render: (slug) => <LocationDetailPage slug={slug} />
  }
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug = '' } = await params;

  const handler = pageHandlers.find((h) => h.match(slug));

  return handler ? handler.render(slug) : <FullpageScroll />;
}
