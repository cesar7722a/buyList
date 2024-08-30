import { CircleAlert, X } from "lucide-react";

type CardAlertProps = {
  closedToast: () => void;
};

export function CardAlert({ closedToast }: CardAlertProps) {
  return (
    <div className="flex items-center gap-2 p-3 rounded-xl py-2 bg-[#C93847]">
      <span className="p-2">
        <CircleAlert className="text-white size-5" />
      </span>
      <p className="flex-1 font-semibold text-white">
        O item foi removido da lista
      </p>
      <button className="p-2" onClick={closedToast}>
        <X className="text-white size-5" />
      </button>
    </div>
  );
}
