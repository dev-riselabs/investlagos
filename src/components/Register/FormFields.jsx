import { IoIosArrowDown } from "react-icons/io";

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

export function TextField({ label, required, optional, placeholder, type = "text", value, onChange, name }) {
  return (
    <div>
      <FieldLabel required={required} optional={optional}>{label}</FieldLabel>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-black/15 bg-white px-3 py-2.5 text-sm font-jost text-black placeholder:text-black/35 focus:border-green100 focus:outline-none"
      />
    </div>
  );
}

export function SelectField({ label, required, optional, placeholder, value, onChange, name, children }) {
  return (
    <div>
      <FieldLabel required={required} optional={optional}>{label}</FieldLabel>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded-md border border-black/15 bg-white px-3 py-2.5 pr-9 text-sm font-jost text-black placeholder:text-black/35 focus:border-green100 focus:outline-none"
        >
          <option value="" disabled hidden>{placeholder}</option>
          {children}
        </select>
        <IoIosArrowDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/60" />
      </div>
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

export function RadioGroup({ name, value, onChange, options, columns = 4 }) {
  const gridCls =
    columns === 2
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
      : columns === 3
      ? "grid-cols-2 md:grid-cols-3"
      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";
  return (
    <div className={`grid ${gridCls} gap-x-4 gap-y-3`}>
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

export function Checkbox({ checked, onChange, label, name }) {
  return (
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
  );
}

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
