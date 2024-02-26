import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen w-full px-10 bg-[#ffde59]"
      style={{
        backgroundImage: `url(/assets/bg-image.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
