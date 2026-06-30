export default function FloatingInput({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    required = false,
    labelClass = 'text-popx-label',
    placeholderClass = 'placeholder:text-popx-muted',
    labelBgClass = 'bg-white'
}) {
    return (
        <div className="relative mb-5 w-full font-rubik">
            
            <label className={`absolute left-3 -top-2 ${labelBgClass} px-1 text-[13px] font-normal ${labelClass}`}>
                {label}
                {required && <span className="text-red-500 ml-0.5">*</span>}
            </label>

           
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={`w-full rounded-md border border-gray-300 px-3 py-3.5 text-[14px] text-text-main outline-none focus:border-popx-purple ${placeholderClass}`}
            />
        </div>
    );
}