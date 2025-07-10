import { useState, type ReactNode } from "react";
import DialogTemplate from "./DialogTemplate";
import Button from "../atoms/Button";

interface Props {
  title: string;
  children: ReactNode;
  triggerLabel: string;
  icon?: ReactNode;
  formId: string;
}

export default function DialogFormTemplate({
  title,
  children,
  triggerLabel,
  icon,
  formId,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="flex justify-end mb-4">
        <Button
          text={triggerLabel}
          variant="primary"
          onClick={() => setIsOpen(true)}
          form={formId}
          icon={icon}
          className="px-4"
        />
      </nav>
      <DialogTemplate
        title={title}
        onClose={() => setIsOpen(false)}
        open={isOpen}
      >
        {children}
        <footer className="flex justify-end gap-2 mt-4">
          <Button
            text="Close"
            variant="secondary"
            onClick={() => setIsOpen(false)}
          />
          <Button text="Save" variant="primary" type="submit" form={formId} />
        </footer>
      </DialogTemplate>
    </>
  );
}
