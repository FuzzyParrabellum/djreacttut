import Image from "next/image";
import Link from "next/link";

import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
import apiService from "@/app/services/apiService";

import { getUserId } from "@/app/lib/actions";

// perso
const pluralize: (topluralize: string) => string = function (
  topluralize: string
): string {
  const integerized_string = parseInt(topluralize);
  const pluralized = integerized_string > 1 ? "s" : "";
  return pluralized;
};

// params est un mot-clé spécifique à react
const PropertyDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  // perso
  const { id } = await params;

  const property = await apiService.get(`/api/properties/${id}`);
  const userId = await getUserId();
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/Beach_1.jpg"
          sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
          className="object-cover h-full w-full"
          alt="Beach house"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">
            {property.data.title ? property.data.title : "NO TITLE"}
          </h1>
          <span className="mb-6 block text-lg text-gray-600">
            {property.data.guests} guest{pluralize(property.data.guests)} -{" "}
            {property.data.bedrooms} bedroom
            {pluralize(property.data.bedrooms)} - {property.data.bathrooms}{" "}
            bathroom
            {pluralize(property.data.bathrooms)}
          </span>

          <hr />

          <Link
            href={`/landlords/${property.data.landlord.id}`}
            className="py-6 flex items-center space-x-4"
          >
            {property.data.landlord.avatar_url && (
              <Image
                src={`${property.data.landlord.avatar_url}`}
                width={50}
                height={50}
                className="rounded-full"
                alt="The user profile picture"
              />
            )}

            <p>
              <strong>
                {property.data.landlord.name
                  ? property.data.landlord.name
                  : "anonymous"}
              </strong>{" "}
              is your host
            </p>
          </Link>

          <hr />

          <p className="mt-6 text-lg">{property.data.description}</p>
        </div>

        <ReservationSideBar property={property.data} userId={userId} />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
