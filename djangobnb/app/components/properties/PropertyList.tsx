"use client";

import { useEffect, useState } from "react";

import PropertyListItem from "./PropertyListItem";
import apiService from "@/app/services/apiService";

export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
};

interface PropertyListProps {
  landlord_id?: string | null;
}

const PropertyList: React.FC<PropertyListProps> = ({ landlord_id }) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const getProperties = async () => {
    let url = "/api/properties/";

    if (landlord_id) {
      url += `?landlord_id=${landlord_id}`;
    }

    const tmpProperties = await apiService.get(url);

    setProperties(tmpProperties.data);
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
    getProperties();
  }, []);
  return (
    <>
      {properties.map((property) => {
        return <PropertyListItem key={property.id} property={property} />;
      })}
    </>
  );
};

export default PropertyList;
