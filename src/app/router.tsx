import { createBrowserRouter } from "react-router";
import { TodayPage } from "@/Pages/TodayPage";
import { AppShell } from "./AppShell";
import { ErrorPage } from "@/Pages/ErrorPage";
import { AllHabitsPage } from "@/Pages/AllHabitsPage";
import { StatsPage } from "@/Pages/StatsPage";
import { CalenderPage } from "@/Pages/CalenderPage";
import { ProfilePage } from "@/Pages/ProfilePage";
import { NotFoundPage } from "@/Pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <TodayPage /> },
      { path: "habits", element: <AllHabitsPage /> },
      { path: "stats", element: <StatsPage /> },
      { path: "calender", element: <CalenderPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
