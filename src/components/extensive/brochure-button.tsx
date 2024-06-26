"use client";
import useClientTranslations from "@/lib/hooks/use-client-translations";
import { Button } from "../ui/button";
import Link from "next/link";

export function BrochureButton() {
  const { t, i18n } = useClientTranslations();

  return (
    <Button asChild>
      <Link href={`${window.location.origin}/brochures/${i18n.language}.pdf`} target="_blank">
        brochures
      </Link>
    </Button>
  );
}
