import useServerTranslations from "@/lib/hooks/use-server-translations";
import React from "react";

type MapSectionProps = {
  params: any;
};

const MapSection = async ({ params }: MapSectionProps) => {
  const { t } = await useServerTranslations(params.locale);

  return (
    <div id="doveSiamo" className="py-10 md:py-20 flex flex-col md:flex-row justify-between gap-10">
      <div className="flex flex-col flex-1 justify-start">
        <h2 className="text-2xl md:text-xl font-semibold mb-10">{t("whereTitle")}</h2>
        <p className="text-lg md:text-lg leading-relaxed">{t("whereSubTitle")}</p>
      </div>
      <div className="flex-1 h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.9927982070412!2d12.384010076852515!3d41.89301197124015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f5f76b4f009dd%3A0xe829599ac076cb74!2sVia.cornelia%20377!5e0!3m2!1sen!2sit!4v1713362150311!5m2!1sen!2sit"
          loading="lazy"
          className="h-full w-full rounded-md"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;