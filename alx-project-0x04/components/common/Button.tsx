// components/common/Button.tsx
import { ButtonProps } from "@/interface";

const Button = ({ buttonLabel, buttonSize, buttonBackgroundColor, action }: ButtonProps) => {
  const backgroundColorClass = buttonBackgroundColor ? {
    red: 'bg-red-500 hover:bg-red-600',
    blue: 'bg-blue-500 hover:bg-blue-600', 
    orange: 'bg-orange-500 hover:bg-orange-600',
    green: 'bg-green-500 hover:bg-green-600',
  }[buttonBackgroundColor] : 'bg-slate-500 hover:bg-slate-600';

  return (
    <button 
      onClick={action} 
      className={`${backgroundColorClass} ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg transition duration-300 text-white`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;