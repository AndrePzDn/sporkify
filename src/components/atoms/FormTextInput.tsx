import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface Props<T extends FieldValues> {
  legend: string;
  placeholder: string;
  name: Path<T>;
  error?: FieldError;
  register: UseFormRegister<T>;
  required?: boolean;
  type?: string;
}

export default function FormTextInput<T extends FieldValues>({
  legend,
  placeholder,
  name,
  error,
  register,
  required,
  type,
}: Props<T>) {
  return (
    <fieldset className="text-sm">
      <legend className="font-semibold mb-2">{legend}</legend>
      <input
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 h-12"
        type={type}
        placeholder={placeholder}
        {...register(name)}
        required={required}
      />
      <p className="text-[#f3727f] mt-1" style={{ minHeight: "1.25rem" }}>
        {error ? (
          error.message
        ) : (
          <span style={{ visibility: "hidden" }}>error</span>
        )}
      </p>
    </fieldset>
  );
}
