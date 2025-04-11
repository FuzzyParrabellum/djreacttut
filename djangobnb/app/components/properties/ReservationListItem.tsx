import Image from "next/image";
import { ReservationType } from "./ReservationList";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";
import { PropertyType } from "./PropertyList";

interface ReservationProps {
  reservation: ReservationType;
  property: PropertyType;
}

const ReservationListItem: React.FC<ReservationProps> = ({
  reservation,
  property,
}) => {
  const router = useRouter();

  //   const property = await apiService.get(`/api/properties/${property_id}`);

  return (
    <>
      <div
        className="col-span-1"
        // perso - Div de l'image de la propriété
      >
        <div className="relative overflow-hidden aspect-square rounded-xl">
          <Image
            src={property.image_url ? property.image_url : "/Beach_1.jpg"}
            fill
            className="hover:scale-110 object-cover transition h-full w-full"
            alt="Beach house"
          />
        </div>
      </div>
      <div
        className="col-span-1 md:col-span-3"
        // perso - Div des infos de la réservation
      >
        <h2 className="mb-4 text-xl">{property.title}</h2>
        <p className="mb-2">
          <strong>Check-in date : </strong>
          {reservation.start_date}
        </p>
        <p className="mb-2">
          <strong>Check-out date : </strong>
          {reservation.end_date}
        </p>
        <p className="mb-2">
          <strong>Number of nights : </strong>
          {reservation.number_of_nights}
        </p>
        <p className="mb-2">
          <strong>Total price : </strong>${reservation.total_price}
        </p>
        <div
          className="mt-6 inline-block mt-6 cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl"
          onClick={() => router.push(`/properties/${property.id}`)}
        >
          Go to property
        </div>
      </div>
    </>
  );
};

export default ReservationListItem;
