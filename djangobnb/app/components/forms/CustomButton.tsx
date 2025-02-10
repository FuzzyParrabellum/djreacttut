// Dans interface on définit les types des variables qu'on va utiliser j'ai
// l'impression
interface CustomButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}
// le point d'interrogation après onClick signifie qu'est facultatif

// ici React.FC permet de transformer le component en un fonctionnal Component.
const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark rounded-xl transition text-white text-center cursor-pointer ${className}`}
    >
      {label}
    </div>
  );
};

export default CustomButton;
