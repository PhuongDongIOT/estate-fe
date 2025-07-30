import { parseAsString, SearchParams, createSearchParamsCache } from 'nuqs/server';
import BlogDetailPage from './_components/post-detail.page';
import FullpageScroll from './_components/projects/fullpage-scroll';

const slugSearchParams = {
  slug: parseAsString.withDefault(""),
}
const searchParamsCache = createSearchParamsCache(slugSearchParams)

function isSPRPrefix(code: string): boolean {
  const pattern = /^SPR-.+/;

  return pattern.test(code);
}

type PageProps = {
  searchParams: Promise<SearchParams>;
}

const Page = async ({ searchParams }: PageProps) => {
  const { slug } = await searchParamsCache.parse(searchParams)

  const isSPR = isSPRPrefix(slug);

  return isSPR ? <BlogDetailPage slug={slug} /> : <FullpageScroll />;
};

export default Page;
