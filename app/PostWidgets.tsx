import { getLatestTitles } from "../services";
import WidgetCard from "./WidgetCard";

type Props = {};

const PostWidgets = async (props: Props) => {
  const titles = await getLatestTitles();

  return (
    <div className="w-full rounded-lg p-3 space-y-2  bg-orange-50">
      <h1>Latest posts</h1>
      <nav className="h-full w-full">
        {titles.map((title) => (
          <WidgetCard
            key={title.slug}
            slug={title.slug}
            title={title.title}
            author={title.author}
          />
        ))}
      </nav>
    </div>
  );
};

export default PostWidgets;
