import { CircleAlert, X } from "lucide-react";

type CardAlertProps = {
  closedToast: () => void;
};

export function CardAlert({ closedToast }: CardAlertProps) {
  return (
    <div className=" flex items-center gap-2 p-3 rounded-xl py-2 bg-[#C93847] w-[627px] fixed bottom-16 left-1/2 transform -translate-x-1/2 text-white shadow-lg">
      <span className="p-2">
        <CircleAlert className="size-5" />
      </span>
      <p className="flex-1 font-semibold text-white">
        O item foi removido da lista
      </p>
      <button className="p-2" onClick={closedToast}>
        <X className="size-5" />
      </button>
    </div>
  );
}
