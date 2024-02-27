"use-client";
import priceListFieldKeys from "@/src/utils/priceFieldKeys";
import { useTranslations } from "next-intl";

const Prices = () => {
  const t = useTranslations("priceList");

  return (
    <div
      className="min-h-screen w-full px-10 bg-[#ffde59]"
      style={{
        backgroundImage: `url(/assets/bg-image.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8">Price List</h1>
        {Object.entries(priceListFieldKeys).map(
          ([categoryKey, serviceKeys]) => {
            return (
              <div key={categoryKey} className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4">
                  {categoryKey}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full sm:max-w-2xl md:max-w-3xl lg:max-w-none border-collapse">
                    <thead>
                      <tr className="bg-[#231F20]">
                        <th className="px-2 lg:px-4 py-2 lg:py-3 text-left text-xs lg:text-sm font-semibold text-white uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-2 lg:px-4 py-2 lg:py-3 text-left text-xs lg:text-sm font-semibold text-white uppercase tracking-wider">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviceKeys.map((serviceKey) => (
                        <tr
                          key={serviceKey}
                          className="border-b border-gray-200 bg-[#231F20]"
                        >
                          <td className="px-2 lg:px-4 py-3 text-xs lg:text-sm font-bold text-white">
                            {t(`${categoryKey}.${serviceKey}.service` as any)}
                          </td>
                          <td className="px-2 lg:px-4 py-3 text-xs lg:text-sm font-bold text-white">
                            {t(`${categoryKey}.${serviceKey}.price` as any)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Prices;
