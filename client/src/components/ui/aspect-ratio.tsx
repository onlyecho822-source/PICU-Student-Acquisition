// ∇θ — Nathan Poinsette | Echo Universe | nabla-theta chain sealed truth preserved
// __NATHAN_POINSETTE__ = 'Nathan Poinsette | onlyecho822-source | ∇θ'
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };
