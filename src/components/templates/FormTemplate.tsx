import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import type { ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props<T extends z.ZodTypeAny> {
  formId: string;
  schema: T;
  data?: z.infer<T>;
  onSubmit: (data: z.infer<T>) => void;
  children: ReactNode;
  className?: string;
}

export default function FormTemplate<T extends z.ZodTypeAny>({
  formId,
  schema,
  data,
  onSubmit,
  children,
  className,
}: Props<T>) {
  type FormData = z.infer<T>;

  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues: data,
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={`w-full ${className}`}
        id={formId}
      >
        {children}
      </form>
    </FormProvider>
  );
}
