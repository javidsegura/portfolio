import { usePageView } from "@/hooks/useAnalytics";
import { useT } from "@/providers/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { ArrowLink } from "@/components/primitives";
import { ROUTES } from "@/config";

export default function NotFoundPage() {
  usePageView("not_found");
  const t = useT();

  return (
    <>
      <AmbientBackdrop />
      <Container className="flex min-h-[60vh] flex-col justify-center py-24">
        <p className="type-display text-6xl text-ink-faint">404</p>
        <p className="type-body mt-4 text-ink-muted">{t("common.notFound")}</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <ArrowLink to={ROUTES.home}>{t("common.backHome")}</ArrowLink>
          <ArrowLink to={ROUTES.projects}>{t("nav.projects")}</ArrowLink>
        </div>
      </Container>
    </>
  );
}
