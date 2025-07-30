import BlogDetailPage from './_components/post-detail.page';
import FullpageScroll from './_components/projects/fullpage-scroll';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug = '' } = await params;
  const isSPR = isSPRPrefix(slug);

  return isSPR ? <BlogDetailPage slug={slug} /> : <FullpageScroll />;
}

function isSPRPrefix(code: string): boolean {
  return /^SPR-.+/.test(code);
}
