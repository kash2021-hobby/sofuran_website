import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useContext, createContext, useEffect } from "react";
import { X, Menu, MapPin, Mail, Facebook } from "lucide-react";
const appCss = "/assets/styles-uttJv7CO.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const studentsImg = "/assets/students-BOx3sf8m.jpeg";
const sofuraLogo = "data:image/png;base64,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";
const LangContext = createContext({ lang: "en", setLang: () => {
}, t: (en) => en });
function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = (en, as) => lang === "en" ? en : as;
  return /* @__PURE__ */ jsx(LangContext.Provider, { value: { lang, setLang, t }, children });
}
const useLang = () => useContext(LangContext);
const NAV = [
  { to: "/", en: "Home", as: "ঘৰ" },
  { to: "/about", en: "About", as: "আমাৰ বিষয়ে" },
  { to: "/magazine", en: "Magazine", as: "আলোচনী" },
  { to: "/exam", en: "Scholarship Exam", as: "বৃত্তি পৰীক্ষা" },
  { to: "/gallery", en: "Gallery", as: "ছবিৰ চিত্ৰশালা" },
  { to: "/contact", en: "Contact", as: "যোগাযোগ" }
];
function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-3", children: /* @__PURE__ */ jsx("img", { src: sofuraLogo, alt: "SOFURA", className: "h-12 w-auto" }) }),
      /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-1", children: NAV.map((n) => /* @__PURE__ */ jsx(
        Link,
        {
          to: n.to,
          className: "rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary [&.active]:bg-primary [&.active]:text-primary-foreground",
          activeProps: { className: "active" },
          activeOptions: { exact: n.to === "/" },
          children: t(n.en, n.as)
        },
        n.to
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setLang(lang === "en" ? "as" : "en"),
            className: "rounded-full border-2 border-gold bg-gold/10 px-3 py-1.5 text-xs font-bold text-primary hover:bg-gold/20 transition",
            "aria-label": "Toggle language",
            children: [
              /* @__PURE__ */ jsx("span", { className: lang === "en" ? "text-primary" : "text-muted-foreground", children: "EN" }),
              /* @__PURE__ */ jsx("span", { className: "mx-1 text-muted-foreground", children: "|" }),
              /* @__PURE__ */ jsx("span", { className: lang === "as" ? "text-primary" : "text-muted-foreground", children: "অস" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setOpen(!open),
            className: "lg:hidden rounded-full p-2 hover:bg-secondary",
            "aria-label": "Menu",
            children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsx("nav", { className: "lg:hidden border-t border-border bg-background px-4 py-3 space-y-1", children: NAV.map((n) => /* @__PURE__ */ jsx(
      Link,
      {
        to: n.to,
        onClick: () => setOpen(false),
        className: "block rounded-xl px-4 py-3 text-sm font-medium hover:bg-secondary [&.active]:bg-primary [&.active]:text-primary-foreground",
        activeProps: { className: "active" },
        activeOptions: { exact: n.to === "/" },
        children: t(n.en, n.as)
      },
      n.to
    )) })
  ] });
}
function Footer() {
  const { t } = useLang();
  return /* @__PURE__ */ jsxs("footer", { className: "mt-24 border-t border-border relative overflow-hidden bg-primary/40 text-primary-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: studentsImg,
          alt: "Students taking exam in a village school",
          className: "h-full w-full object-cover",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/40 to-primary/30" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("img", { src: sofuraLogo, alt: "SOFURA", className: "h-16 w-auto" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm opacity-80 max-w-xs", children: t(
          "A 40-year journey of literature and education in Assam.",
          "অসমত সাহিত্য আৰু শিক্ষাৰ ৪০ বছৰীয়া যাত্ৰা।"
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg mb-3 text-gold", children: t("Explore", "অন্বেষণ") }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm opacity-90", children: NAV.slice(1).map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: n.to, className: "hover:text-gold transition", children: t(n.en, n.as) }) }, n.to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg mb-3 text-gold", children: t("Contact", "যোগাযোগ") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm opacity-90", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 mt-0.5 shrink-0 text-gold" }),
            " Guwahati, Assam, India"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 mt-0.5 shrink-0 text-gold" }),
            " sofura.trust@gmail.com"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Facebook, { className: "h-4 w-4 mt-0.5 shrink-0 text-gold" }),
            " facebook.com/sofura"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 py-4 text-center text-xs opacity-70", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " SOFURA Educational Trust. All rights reserved."
    ] })
  ] });
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SOFURA Educational Trust — Inspiring Young Minds Since 1982" },
      { name: "description", content: "SOFURA Educational Trust: Assamese children's magazine and statewide Talent Discovery & Scholarship Exam, honoring the legacy of Dr. Bhabendranath Saikia." },
      { property: "og:title", content: "SOFURA Educational Trust — Inspiring Young Minds Since 1982" },
      { property: "og:description", content: "SOFURA Educational Trust: Assamese children's magazine and statewide Talent Discovery & Scholarship Exam, honoring the legacy of Dr. Bhabendranath Saikia." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "SOFURA Educational Trust — Inspiring Young Minds Since 1982" },
      { name: "twitter:description", content: "SOFURA Educational Trust: Assamese children's magazine and statewide Talent Discovery & Scholarship Exam, honoring the legacy of Dr. Bhabendranath Saikia." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8898ae25-82cf-4422-9e47-d88c1205e43e/id-preview-3b5fb686--43c6db64-7970-48f4-adb8-e2712cbcbd22.lovable.app-1780738873163.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8898ae25-82cf-4422-9e47-d88c1205e43e/id-preview-3b5fb686--43c6db64-7970-48f4-adb8-e2712cbcbd22.lovable.app-1780738873163.png" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Montserrat:wght@400;500;600;700&family=Fredoka:wght@500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
const $$splitComponentImporter$5 = () => import("./magazine-B9dOTEQe.js");
const Route$5 = createFileRoute("/magazine")({
  head: () => ({
    meta: [{
      title: "Sofura Magazine — Assamese Children's Monthly Since 1982"
    }, {
      name: "description",
      content: "Stories, poems and Phuloni translations from Assam's beloved children's monthly magazine."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./gallery-3ng--PzM.js");
const Route$4 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — SOFURA Exam Centres Across Assam"
    }, {
      name: "description",
      content: "Photo gallery from SOFURA exam centres across Guwahati, Jorhat, Dibrugarh, Silchar, Tezpur and beyond."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./exam-Bql700S5.js");
const Route$3 = createFileRoute("/exam")({
  head: () => ({
    meta: [{
      title: "Sofura Talent Discovery & Scholarship Examination — SOFURA"
    }, {
      name: "description",
      content: "Statewide scholarship exam for classes 2 to 9 across Assam. Discover talent, earn recognition, shape your future."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-BodmAchD.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — SOFURA Educational Trust"
    }, {
      name: "description",
      content: "Get in touch with the SOFURA Educational Trust, Guwahati, Assam."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DQiJsXFL.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — SOFURA Educational Trust"
    }, {
      name: "description",
      content: "The 40-year story of SOFURA, founded in 1982 to nurture young Assamese minds through literature and education."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-9hDBmNmy.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "SOFURA Educational Trust — Inspiring Young Minds Since 1982"
    }, {
      name: "description",
      content: "SOFURA: Assam's beloved children's magazine and statewide Talent Discovery & Scholarship Exam since 1982."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const MagazineRoute = Route$5.update({
  id: "/magazine",
  path: "/magazine",
  getParentRoute: () => Route$6
});
const GalleryRoute = Route$4.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$6
});
const ExamRoute = Route$3.update({
  id: "/exam",
  path: "/exam",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ExamRoute,
  GalleryRoute,
  MagazineRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  router as r,
  useLang as u
};
