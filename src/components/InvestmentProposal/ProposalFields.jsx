import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiUploadCloud, FiX, FiFileText, FiImage } from "react-icons/fi";

export function SectionHeading({ children, uppercase }) {
  return (
    <h2
      className={`text-lg md:text-xl font-jost font-medium text-black mb-4 ${
        uppercase ? "uppercase tracking-wide" : ""
      }`}
    >
      {children}
    </h2>
  );
}

export function SubQuestion({ children }) {
  return (
    <p className="text-[13px] font-jost text-black/70 mb-3">{children}</p>
  );
}

export function FileField({
  label, required, optional, value, onChange, name, accept,
  hint, kind = "file", error,
}) {
  const inputRef = useRef(null);
  const Icon = kind === "image" ? FiImage : FiFileText;

  const trigger = () => inputRef.current?.click();
  const clear = (e) => {
    e.stopPropagation();
    onChange(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div>
      <FieldLabel required={required} optional={optional}>{label}</FieldLabel>
      <button
        type="button"
        onClick={trigger}
        className={`flex w-full items-center justify-between gap-3 rounded-md border border-dashed bg-white px-4 py-3 text-left transition hover:border-green100 ${
          error ? "border-red" : "border-black/25"
        }`}
      >
        <span className="flex min-w-0 items-center gap-3">
          {value ? (
            <Icon className="h-5 w-5 shrink-0 text-green100" />
          ) : (
            <FiUploadCloud className="h-5 w-5 shrink-0 text-black/50" />
          )}
          <span className="min-w-0">
            <span className="block truncate text-sm font-jost font-medium text-black/80">
              {value ? value.name : "Click to upload"}
            </span>
            {hint && !value && (
              <span className="block text-[11px] font-jost text-black/50">{hint}</span>
            )}
            {value && (
              <span className="block text-[11px] font-jost text-black/50">
                {(value.size / 1024).toFixed(1)} KB
              </span>
            )}
          </span>
        </span>
        {value && (
          <span
            role="button"
            aria-label="Remove file"
            onClick={clear}
            className="shrink-0 rounded-full p-1 text-black/40 hover:bg-black/5 hover:text-red"
          >
            <FiX className="h-4 w-4" />
          </span>
        )}
      </button>
      <input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        onChange={(e) => onChange(e.target.files?.[0] || null)}
        className="hidden"
      />
      {error && <p className="mt-1 text-[12px] font-jost text-red">{error}</p>}
    </div>
  );
}

export function FieldLabel({ children, required, optional }) {
  return (
    <label className="block text-[13px] font-jost text-black/80 mb-1.5">
      {children}
      {required && <span className="text-red ml-0.5">*</span>}
      {optional && (
        <span className="text-black/50 font-normal"> (Optional)</span>
      )}
    </label>
  );
}

export function TextField({
  label, required, optional, placeholder, type = "text",
  value, onChange, name, error,
}) {
  return (
    <div>
      <FieldLabel required={required} optional={optional}>{label}</FieldLabel>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-md border bg-white px-3 py-2.5 text-sm font-jost text-black placeholder:text-black/35 focus:outline-none ${
          error ? "border-red focus:border-red" : "border-black/15 focus:border-green100"
        }`}
      />
      {error && <p className="mt-1 text-[12px] font-jost text-red">{error}</p>}
    </div>
  );
}

export function NumberField(props) {
  return <TextField {...props} type="number" />;
}

export function TextArea({
  label, required, optional, placeholder, value, onChange, name, rows = 4, error,
}) {
  return (
    <div>
      <FieldLabel required={required} optional={optional}>{label}</FieldLabel>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full rounded-md border bg-white px-3 py-2.5 text-sm font-jost text-black placeholder:text-black/35 focus:outline-none resize-y ${
          error ? "border-red focus:border-red" : "border-black/15 focus:border-green100"
        }`}
      />
      {error && <p className="mt-1 text-[12px] font-jost text-red">{error}</p>}
    </div>
  );
}

export function SelectField({
  label, required, optional, placeholder, value, onChange, name, children, error,
}) {
  return (
    <div>
      <FieldLabel required={required} optional={optional}>{label}</FieldLabel>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full appearance-none rounded-md border bg-white px-3 py-2.5 pr-9 text-sm font-jost text-black focus:outline-none ${
            error ? "border-red focus:border-red" : "border-black/15 focus:border-green100"
          }`}
        >
          <option value="" disabled hidden>{placeholder}</option>
          {children}
        </select>
        <IoIosArrowDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/60" />
      </div>
      {error && <p className="mt-1 text-[12px] font-jost text-red">{error}</p>}
    </div>
  );
}

export function Radio({ name, value, checked, onChange, label }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <span className="relative inline-flex h-4 w-4 items-center justify-center">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="peer absolute inset-0 h-4 w-4 cursor-pointer appearance-none rounded-full border border-black/40 bg-white checked:border-red"
        />
        <span className="pointer-events-none absolute h-2 w-2 rounded-full bg-red opacity-0 peer-checked:opacity-100" />
      </span>
      <span className="text-[13px] font-jost text-black/80">{label}</span>
    </label>
  );
}

export function RadioRow({ name, value, onChange, options }) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
      {options.map((opt) => (
        <Radio
          key={opt}
          name={name}
          value={opt}
          checked={value === opt}
          onChange={(e) => onChange(e.target.value)}
          label={opt}
        />
      ))}
    </div>
  );
}

export function Checkbox({ checked, onChange, label, name, error }) {
  return (
    <div>
      <label className="flex items-start gap-2.5 cursor-pointer select-none">
        <span className="relative mt-0.5 inline-flex h-4 w-4 items-center justify-center">
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            className="peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-black/40 bg-white checked:border-red checked:bg-red"
          />
          <svg
            viewBox="0 0 16 16"
            className="pointer-events-none absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-[13px] font-jost text-black/80 leading-snug">{label}</span>
      </label>
      {error && <p className="mt-1 text-[12px] font-jost text-red">{error}</p>}
    </div>
  );
}
