import Aside from "./Aside";

export default function Sidebar({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* mobile menu display blur wrapper in sidebar */}
      <div
        className={`min-h-screen w-full fixed top-0 left-0 z-20 lg:hidden bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 ${
          !show ? "hidden" : ""
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed z-20 inset-0 top-[3.8125rem] right-auto w-[17rem] pb-10 px-4 overflow-y-auto bg-white dark:bg-slate-800 border-r border-slate-900/10 dark:border-slate-300/10 shadow-2xl transition-all duration-300 awesome-scrollbar ${
          show ? "lg:left-0" : "-left-[20rem]"
        }`}
      >
        <Aside />
      </div>
    </>
  );
}
