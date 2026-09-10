import { useRouter } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { useReaderStore } from "@/lib/reader-store";

export function HtmlContent({ html }: { html: string }) {
  const router = useRouter();
  const markQuiz = useReaderStore((s) => s.markQuiz);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const onToggle = (event: Event) => {
      const el = event.target as HTMLDetailsElement | null;
      if (el?.classList.contains("quiz") && el.open) {
        markQuiz(el.querySelector("summary")?.textContent?.slice(0, 80) ?? "quiz");
      }
    };
    root.addEventListener("toggle", onToggle, true);
    return () => root.removeEventListener("toggle", onToggle, true);
  }, [html, markQuiz]);

  return (
    <div
      ref={ref}
      className="miolo-html"
      dangerouslySetInnerHTML={{ __html: html }}
      onClick={(event) => {
        const anchor = (event.target as HTMLElement).closest("a");
        if (!anchor) return;
        const href = anchor.getAttribute("href");
        if (!href || href.startsWith("http") || href.startsWith("mailto:")) return;
        if (href.startsWith("#")) return;
        if (href.startsWith("/")) {
          event.preventDefault();
          router.history.push(href);
        }
      }}
    />
  );
}
