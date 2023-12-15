import Link from "next/link";

// import { SideNav } from "../(components)/SideNav";
export default function Dashboard({ children }) {
  return (
    <section>
      <div>
        <Link href="/company">COmpany</Link>
        <Link href="/profile">Profile</Link>
      </div>
      {children}
    </section>
  );
}
