import { getUserId } from "../lib/actions";
import ReservationList from "../components/properties/ReservationList";
import Image from "next/image";

const MyReservationsPage = async () => {
  // on récupère l'id de l'utilisateur avec get userId OU on arrive sur cette
  // page avec déjà un id en paramètre
  const userId = await getUserId();
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My reservations</h1>

      {/* Pour chaque réservation effectuée par l'utilisateur, on utilise un 
      component comme ReservationList.tsx qui indique la réservation de 
      l'utilisateur */}

      <div className="space-y-4">
        <ReservationList reserver_id={userId} />
      </div>
    </main>
  );
};

export default MyReservationsPage;
