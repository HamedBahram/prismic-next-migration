import HamburgerIcon from "@/assets/svg/hamburger.svg";
import CloseIcon from "@/assets/svg/close.svg";
import clsx from "clsx";

interface Props {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function MenuToggle({ isOpen, onClick, className }: Props) {
  return (
    <button
      className={clsx("lg:hidden w-12 h-12 relative -mr-2 z-20", className)}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <HamburgerIcon
        className={clsx(
          "h-8 w-8 absolute top-2 left-2 transition-opacity",
          isOpen && "opacity-0"
        )}
      />
      <CloseIcon
        className={clsx(
          "h-8 w-8 absolute top-2 left-2 transition-opacity",
          !isOpen && "opacity-0"
        )}
      />
    </button>
  );
}
