import BlogDetailPage from './_components/post-detail.page';
import FullpageScroll from './_components/projects/fullpage-scroll';

function isSPRPrefix(code: string): boolean {
  const pattern = /^SPR-.+/;

  return pattern.test(code);
}

type PageProps = {
  params: {
    slug: string;
  };
};
const Page = ({ params }: PageProps) => {
  const { slug } = params;

  const isSPR = isSPRPrefix(slug);

  return isSPR ? <BlogDetailPage slug={slug} /> : <FullpageScroll />;
};

export default Page;
