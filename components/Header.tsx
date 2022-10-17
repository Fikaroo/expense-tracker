import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="w-full flex justify-start h-12 items-center gap-2">
      <ClipboardDocumentListIcon className="sm:w-9 w-6" />
      <h1 className="text-xl sm:text-3xl font-semibold whitespace-nowrap">
        Expense Tracker
      </h1>
    </header>
  );
};

export default Header;
