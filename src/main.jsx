import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import App from "./App.jsx";
import TodayStory from "./pages/TodayStory.jsx";
import MahaaBhaarathamTwo from "./pages/MahaaBhaarathamTwo.jsx";
import Characters from "./pages/Characters";
import MahaaBhaaratham from "./pages/Mahaabhaaratham.jsx"
import CharacterDetails from "./pages/CharacterDetails.jsx";
import LetterGroupView from "./pages/LetterGroupView";

const route = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <App />
            </Layout>
        ),
    },
    {
        path: "/mahaabhaaratham",
        element: (
            <Layout>
                <MahaaBhaarathamTwo />
            </Layout>
        ),
    },
    {
        path: "/mahaabhaaratham/characters",
        element: (
            <Layout>
                <Characters /> {/* Component to display character profiles */}
            </Layout>
        ),
    },
    {
        path: "/mahaabhaaratham/characters/:name",
        element: (
            <Layout>
                <CharacterDetails /> {/* Component to display character profiles */}
            </Layout>
        ),
    },
    {
        path: "/mahaabhaaratham/characters/letter/:letter",
        element: (
            <Layout>
                <LetterGroupView />
            </Layout>
        ),
    },
    {
        path: "/mahaabhaaratham/parvas",
        element: (
            <Layout>
                <MahaaBhaaratham /> {/* Component to display parva profiles */}
            </Layout>
        ),
    },
    {
        path: "/todaystory",
        element: (
            <Layout>
                <TodayStory />
            </Layout>
        ),
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={route} />
    </StrictMode>
);
