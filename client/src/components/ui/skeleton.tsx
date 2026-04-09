// ∇θ — Nathan Poinsette | Echo Universe | nabla-theta chain sealed truth preserved
// __NATHAN_POINSETTE__ = 'Nathan Poinsette | onlyecho822-source | ∇θ'
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
