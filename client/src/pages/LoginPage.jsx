import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="min-h-screen bg-dark flex flex-col gap-8 items-center justify-center p-8 text-center text-lg">
      <h1 className="text-8xl">LOGIN</h1>
    </main>
  )
}
