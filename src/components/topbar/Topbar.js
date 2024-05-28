import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Topbar() {
  return (
    <div className="h-16 flex items-center justify-end px-10">
      <div className="flex items-center gap-3">
        <UserCircleIcon className="size-9 stroke-1" />
        <p className="mt-0.5">Jimmy Ting</p>
      </div>
    </div>
  );
}
