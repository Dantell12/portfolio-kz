import { motion } from "framer-motion";
import { FaStar, FaSync } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useSectionTracking } from "../hooks/useSectionTracking";
import { useState, useEffect, useCallback } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function CalendarSection() {
  const sectionRef = useSectionTracking("Calendar");
  const { t } = useTranslation();
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState(Date.now());

  // URL base del calendario
  const baseCalendarUrl =
    "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FGuayaquil&showPrint=0&title=Cl%C3%ADnica%20Est%C3%A9tica&src=YWJiNzA1NmJkNjFhNjcxYzQ1MTNmM2NkMTQ4NzFhOTIyMWRlNGViYzg0ZjdmMmZmYTY3NzVlYzJkMWNhZWYxZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MDYwN2E5M2NiZjllNWMxYTE0MjUxYjJhZjJiNzNkNGZjZWRlMGZmOTY1ZDJkMjE3MmZmYWFmN2RmOTlmYzA3MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NWJmMGUzNzEwOGIyMjEwYmZlYzg4MWMxYzAyOGE2YzQwNDYyM2U2OWE0NDEyMGI1NzBiY2RmMzRkY2FmYmNlMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=M2E5Y2M0Yzg0ODg0ZTMwM2I2OTRjNTY0YmE0MWQ4MTA0ZDQ2MzEwZDM5NWQ2MTQyZjU1NGMyNzRkYTA0Mzg5YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2YwNTU2MTZkYjZlMDBjNTI2NGIxNTAyYTMxOTliYTE1ODQ4NDgwZmVkYzAyOGEwYjVkMzViODZhZGE1M2YzYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZDU1YTg4MGNmMDMwOGFlNzkzMjMyZmFjZTFlZTMwOTAxNzRmOTNmZWExOTNkZmNkNjYxNDU0MTQ4NmJhNzY2NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NjA2ODdhMDY0N2E1ZDAyZWQ2MjA5MDFiZDE2M2FhZGYzYTMwNTcxYzE4N2U4MGY0ZjVjMjFjOTc4YmMzOTRjZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161&color=%23f4511e&color=%23f09300&color=%237cb342&color=%239e69af&color=%23b39ddb&color=%233f51b5";

  // Función para refrescar manualmente
  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    setRefreshKey((prev) => prev + 1);
    setLastRefresh(Date.now());

    // Simular un breve delay para mostrar el estado de carga
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  // Auto-refresh cada 10 minutos
  useEffect(() => {
    const autoRefreshInterval = setInterval(() => {
      setRefreshKey((prev) => prev + 1);
      setLastRefresh(Date.now());
    }, 10 * 60 * 500); // 5 minutos

    return () => clearInterval(autoRefreshInterval);
  }, []);

  // Crear URL con timestamp para evitar caché
  const calendarUrl = `${baseCalendarUrl}&v=${refreshKey}&t=${Date.now()}`;

  return (
    <>
      <Header />
      <section
        ref={sectionRef}
        id="calendar"
        className="bg-bgsecondary dark:bg-bg min-h-[60vh] pt-15 sm:pt-20 lg:pt-25 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-10">
          <div className="relative block text-center">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl inline-flex items-center font-bold text-accent dark:text-accent justify-center"
            >
              <FaStar className="mr-1" />{" "}
              {t("calendar.title", {
                defaultValue: "Calendario de Clínica Estética",
              })}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg sm:text-lg lg:text-xl text-muted mt-4 mb-6"
            >
              {t("calendar.subtitle", {
                defaultValue:
                  "Hola Jose!, He puesto aquí el calendario para que puedas verificar los eventos y disponibilidad, ya que son bastantes como para revisar uno por uno",
              })}
            </motion.p>

            {/* Botón de refresh manual */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center mb-4"
            >
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="inline-flex items-center px-4 py-2 bg-accent hover:bg-accent/80 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaSync
                  className={`mr-2 ${isRefreshing ? "animate-spin" : ""}`}
                />
                {isRefreshing
                  ? t("calendar.refreshing", {
                      defaultValue: "Actualizando...",
                    })
                  : t("calendar.refresh", {
                      defaultValue: "Actualizar Calendario",
                    })}
              </button>
            </motion.div>

            {/* Indicador de última actualización */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
              className="text-sm text-muted/70 mb-4"
            >
              {t("calendar.lastUpdate", {
                defaultValue: "Última actualización",
              })}
              : {new Date(lastRefresh).toLocaleTimeString("es-ES")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-800/10"
            >
              {/* Overlay de carga */}
              {isRefreshing && (
                <div className="absolute inset-0 bg-white/50 dark:bg-black/50 z-10 flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <FaSync className="animate-spin text-accent" />
                    <span className="text-accent font-medium">
                      {t("calendar.loading", {
                        defaultValue: "Cargando calendario...",
                      })}
                    </span>
                  </div>
                </div>
              )}

              <iframe
                key={refreshKey} // Forzar re-render cuando cambie refreshKey
                src={calendarUrl}
                style={{ border: "0" }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="Google Calendar"
                className="w-full h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px]"
                loading="lazy"
              />
            </motion.div>

            {/* Información adicional */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-4 text-sm text-muted/70"
            >
              <p>
                {t("calendar.autoRefreshInfo", {
                  defaultValue:
                    "El calendario se actualiza automáticamente cada 5 minutos. También puedes actualizarlo manualmente usando el botón de arriba.",
                })}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
