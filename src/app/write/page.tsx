import BookMeta from "./book-meta";
import BookEditor from "./book-editor";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Write() {
  return (
    <>
      <Card className="container bg-muted/30 backdrop-blur-2xl my-8  h-auto grid grid-cols-3 gap-8  max-sm:grid-cols-1 py-6 ">
        <BookMeta />
        <BookEditor className="col-span-2 max-sm:col-span-1" />
        <Button>
          click me
        </Button>
      </Card>
    </>
  );
}
