import Link from 'next/link';

type Topic = {
  title: string;
  href: string;
};

type TopicListProps = {
  title: string;
  topics: Topic[];
  moreLink?: string;
};

export function HighlightTopicList({ title, topics, moreLink }: TopicListProps) {
  return (
    <div className="text-sm text-gray-800 space-y-1">
      <h3 className="font-semibold text-black mb-1">{title}</h3>
      <ul className="space-y-1">
        {topics.map((topic, index) => (
          <li key={index}>
            <Link href={topic.href} className="hover:underline cursor-pointer">
              {topic.title}
            </Link>
          </li>
        ))}
        {moreLink && (
          <li>
            <Link href={moreLink} className="text-red-600 hover:underline font-medium">
              Xem thêm
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
