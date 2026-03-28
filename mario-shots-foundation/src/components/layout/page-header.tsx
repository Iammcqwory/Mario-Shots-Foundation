import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description: string;
  className?: string;
  descriptionClassName?: string;
};

export function PageHeader({
  title,
  description,
  className,
  descriptionClassName,
}: PageHeaderProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
      <p className={cn("text-xl text-zinc-600 max-w-3xl mx-auto", descriptionClassName)}>
        {description}
      </p>
    </div>
  );
}
