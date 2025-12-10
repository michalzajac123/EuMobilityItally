const InputField = ({
  icon: Icon,
  label,
  placeholder,
  type = "text",
  ...props
}) => (
  <div className="flex flex-col">
    <label className="text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <div className="relative">
      <div className="absolute left-3 top-3 text-gray-400">
        <Icon size={20} />
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--green-text-color)] focus:border-transparent transition-all duration-200 hover:border-gray-400"
        {...props}
      />
    </div>
  </div>
);
export default InputField;