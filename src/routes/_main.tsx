import { createFileRoute, Outlet, } from "@tanstack/react-router";

export const Route = createFileRoute("/_main")({
  // beforeLoad: ({ context, location }) => {
  //   if (!context.auth.isAuthenticated) {
  //     throw redirect({
  //       to: "/login",
  //       search: {
  //         redirect: location.href,
  //       },
  //     });
  //   }
  // },
  component: MainLayout,
});

function MainLayout() {
  return (
    <main className="flex flex-row w-screen h-screen overflow-clip bg-syka-gray100 scrollbar-none">
      <Outlet />
    </main>
  );
}
