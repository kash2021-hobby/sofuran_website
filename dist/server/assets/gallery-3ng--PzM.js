import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { X } from "lucide-react";
import { f as founderImg } from "./founder-CX2MkPXN.js";
import { m as magazineImg } from "./magazine-s532Ycvh.js";
import { u as useLang } from "./router-BGJwVRbk.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
const heroImg = "/assets/hero-students-BYRCS33_.jpg";
const YEARS = ["All", "2024", "2023", "2022", "2021"];
const REGIONS = ["All", "Guwahati", "Jorhat", "Dibrugarh", "Silchar", "Tezpur"];
const PHOTOS = [{
  src: heroImg,
  year: "2024",
  region: "Guwahati",
  caption: "Guwahati Centre — 2024"
}, {
  src: magazineImg,
  year: "2024",
  region: "Jorhat",
  caption: "Jorhat Centre — 2024"
}, {
  src: heroImg,
  year: "2023",
  region: "Dibrugarh",
  caption: "Dibrugarh Centre — 2023"
}, {
  src: magazineImg,
  year: "2023",
  region: "Silchar",
  caption: "Silchar Centre — 2023"
}, {
  src: heroImg,
  year: "2022",
  region: "Tezpur",
  caption: "Tezpur Centre — 2022"
}, {
  src: magazineImg,
  year: "2022",
  region: "Guwahati",
  caption: "Guwahati Centre — 2022"
}, {
  src: heroImg,
  year: "2021",
  region: "Jorhat",
  caption: "Jorhat Centre — 2021"
}, {
  src: magazineImg,
  year: "2021",
  region: "Dibrugarh",
  caption: "Dibrugarh Centre — 2021"
}];
const ARCHIVES = [{
  src: founderImg,
  caption: "Editorial meeting, Guwahati — 1985"
}, {
  src: founderImg,
  caption: "Magazine launch — 1982"
}, {
  src: founderImg,
  caption: "First scholarship ceremony — 1989"
}];
function Gallery() {
  const {
    t
  } = useLang();
  const [year, setYear] = useState("All");
  const [region, setRegion] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const filtered = useMemo(() => PHOTOS.filter((p) => (year === "All" || p.year === year) && (region === "All" || p.region === region)), [year, region]);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-gold", children: t("Gallery", "চিত্ৰশালা") }),
    /* @__PURE__ */ jsx("h1", { className: "mt-2 font-serif text-5xl font-bold text-primary md:text-6xl", children: t("Moments from Across Assam", "অসমজুৰি স্মৃতি") }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
      /* @__PURE__ */ jsx(Select, { label: t("Year", "বছৰ"), value: year, onChange: setYear, options: YEARS }),
      /* @__PURE__ */ jsx(Select, { label: t("Region", "অঞ্চল"), value: region, onChange: setRegion, options: REGIONS }),
      /* @__PURE__ */ jsxs("div", { className: "ml-auto self-end text-sm text-muted-foreground", children: [
        filtered.length,
        " ",
        t("photos", "ফটো")
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4", children: [
      filtered.map((p, i) => /* @__PURE__ */ jsxs("button", { onClick: () => setLightbox({
        src: p.src,
        caption: p.caption
      }), className: "group relative overflow-hidden rounded-2xl border border-border bg-card aspect-square focus:outline-none focus:ring-2 focus:ring-gold", children: [
        /* @__PURE__ */ jsx("img", { src: p.src, alt: p.caption, loading: "lazy", className: "h-full w-full object-cover transition duration-500 group-hover:scale-110" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-left opacity-0 transition group-hover:opacity-100", children: /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-white", children: p.caption }) })
      ] }, i)),
      filtered.length === 0 && /* @__PURE__ */ jsx("div", { className: "col-span-full rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground", children: t("No photos match these filters.", "এই ফিল্টাৰৰ বাবে ফটো নাই।") })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-20", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between gap-4", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-gold", children: t("1980s", "১৯৮০ৰ দশক") }),
        /* @__PURE__ */ jsx("h2", { className: "mt-1 font-serif text-3xl font-bold text-primary md:text-4xl", children: t("Historical Archives", "ঐতিহাসিক সংগ্ৰহ") })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3", children: ARCHIVES.map((a, i) => /* @__PURE__ */ jsxs("button", { onClick: () => setLightbox({
        src: a.src,
        caption: a.caption
      }), className: "group overflow-hidden rounded-2xl border border-border bg-card text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden bg-secondary", children: /* @__PURE__ */ jsx("img", { src: a.src, alt: a.caption, loading: "lazy", className: "h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsx("div", { className: "p-4 text-sm font-medium text-primary", children: a.caption })
      ] }, i)) })
    ] }),
    lightbox && /* @__PURE__ */ jsxs("div", { onClick: () => setLightbox(null), className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setLightbox(null), "aria-label": "Close", className: "absolute top-4 right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20", children: /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxs("figure", { onClick: (e) => e.stopPropagation(), className: "max-w-4xl", children: [
        /* @__PURE__ */ jsx("img", { src: lightbox.src, alt: lightbox.caption, className: "max-h-[80vh] w-full rounded-2xl object-contain" }),
        /* @__PURE__ */ jsx("figcaption", { className: "mt-4 text-center text-sm text-white/90", children: lightbox.caption })
      ] })
    ] })
  ] });
}
function Select({
  label,
  value,
  onChange,
  options
}) {
  return /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("select", { value, onChange: (e) => onChange(e.target.value), className: "rounded-2xl border-2 border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground focus:border-gold focus:outline-none min-w-[180px]", children: options.map((o) => /* @__PURE__ */ jsx("option", { children: o }, o)) })
  ] });
}
export {
  Gallery as component
};
