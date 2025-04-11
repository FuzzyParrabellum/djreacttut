"use client";

import { useEffect, useState } from "react";

import ReservationListItem from "./ReservationListItem";
import apiService from "@/app/services/apiService";
import { PropertyType } from "./PropertyList";

export type ReservationType = {
  id: string;
  start_date: string;
  end_date: string;
  number_of_nights: number;
  total_price: number;
  property: PropertyType;
};

interface ReservationListProps {
  reserver_id: string | null;
}

const ReservationList: React.FC<ReservationListProps> = ({ reserver_id }) => {
  const [reservations, setReservations] = useState<ReservationType[]>([]);
  const getReservations = async () => {
    let url = `/api/auth/reservations/`;

    const tmpReservations = await apiService.get(url);

    setReservations(tmpReservations.data);
    // CI-DESSOUS comment faisait de manière naïve avant d'avoir crée la
    // fonction apiService, qui retourne aussi une promesse
    // const url = "http://localhost:8000/api/properties/";
    // await fetch(url, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log("json", json);
    //     setProperties(json.data);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
  };

  // Ce UseEffect ne va se load que quand la page sera loaded
  useEffect(() => {
    // apiService.get("/api/properties/");
    getReservations();
  }, []);
  return (
    <>
      <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
        {reservations.map((reservation) => {
          return (
            <ReservationListItem
              key={reservation.id}
              reservation={reservation}
              property={reservation.property}
            />
          );
        })}
      </div>
    </>
  );
};

export default ReservationList;
