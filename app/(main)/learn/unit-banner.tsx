import { NotebookText } from "lucide-react";
import Link from "next/link";
import { lessons, units } from "@/db/schema";

type UnitProps = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;
  activeLessonPercentage: number;
};
import { Button } from "@/components/ui/button";

type UnitBannerProps = {
  id: number;
  title: string;
  description: string;
};

export const UnitBanner = ({ id, title, description }: UnitBannerProps) => {
  if (id != 2)
    return (
      <div className="flex w-full items-center justify-between rounded-xl bg-purple-500 p-5 text-white">
        <div className="space-y-2.5">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>

        <Link href="/theory/1">
          <Button
            size="lg"
            variant="secondary"
            className="hidden border-2 border-b-4 active:border-b-2 xl:flex"
          >
            <NotebookText className="mr-2" />
            Theory {id} {/*slug todo */}
          </Button>
        </Link>
      </div>
    );
  else
    return (
      <div className="flex w-full items-center justify-between rounded-xl bg-purple-500 p-5 text-white">
        <div className="space-y-2.5">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>

        <Link href="/theory/2">
          <Button
            size="lg"
            variant="secondary"
            className="hidden border-2 border-b-4 active:border-b-2 xl:flex"
          >
            <NotebookText className="mr-2" />
            Theory {id} {/*slug todo */}
          </Button>
        </Link>
      </div>
    );
};
