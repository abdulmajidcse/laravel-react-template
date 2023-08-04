export default function SidebarHeading({ title }: { title: string }) {
  return (
    <>
      <li className="mb-1">
        <span className="block my-1 text-sm p-2 pl-0 font-semibold uppercase">
          {title}
        </span>
      </li>
    </>
  );
}
