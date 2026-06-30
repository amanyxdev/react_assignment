export default function Button({ label, onClick, variant = 'primary', type = 'button' }) {

    const baseStyles = "w-full py-4 text-center font-medium rounded-md text-[16px] transition-all duration-200 active:scale-[0.99]";

    const variants = {

        primary: "bg-popx-purple text-white hover:bg-[#5b4cc4]",


        secondary: "bg-popx-lavender text-text-main hover:opacity-90"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]}`}
        >
            {label}
        </button>
    );
}