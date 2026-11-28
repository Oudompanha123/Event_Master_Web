import type { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/kit/card";

type PageSectionProps = {
  title: ReactNode;
  description?: ReactNode;
  /** search box, create button... stacks under the title on phones */
  actions?: ReactNode;
  className?: string;
  children: ReactNode;
};

/** Dashboard content card: title row (with actions) above a table or list. */
export function PageSection({ title, description, actions, className, children }: PageSectionProps) {
  return (
    <Card className={cn("gap-5 rounded-3xl border-slate-100 py-5 shadow-none sm:py-6", className)}>
      <CardHeader className="flex flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 space-y-1">
          <CardTitle className="text-lg font-semibold text-primary-text xl:text-xl">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
        {actions && <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto lg:min-w-[28rem] lg:justify-end">{actions}</div>}
      </CardHeader>
      <CardContent className="px-4 sm:px-6">{children}</CardContent>
    </Card>
  );
}
