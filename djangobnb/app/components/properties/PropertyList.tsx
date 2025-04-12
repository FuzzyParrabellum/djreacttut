"use client";

import { useEffect, useState } from "react";

import PropertyListItem from "./PropertyListItem";
import apiService from "@/app/services/apiService";

export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
  is_favorite: boolean;
};

interface PropertyListProps {
  landlord_id?: string | null;
  favorites?: boolean | null;
}

const PropertyList: React.FC<PropertyListProps> = ({
  landlord_id,
  favorites,
}) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const markFavorite = (id: string, is_favorite: boolean) => {
    const tmpProperties = properties.map((property: PropertyType) => {
      if (property.id == id) {
        property.is_favorite = is_favorite;

        if (is_favorite) {
          console.log("added to list of favorited properties");
        } else {
          console.log("removed from list");
        }
      }

      return property;
    });

    setProperties(tmpProperties);
  };

  const getProperties = async () => {
    let url = "/api/properties/";

    if (landlord_id) {
      url += `?landlord_id=${landlord_id}`;
    } else if (favorites) {
      url += `?is_favorites=true`;
    }

    const tmpProperties = await apiService.get(url);

    // setProperties(tmpProperties.data);
    setProperties(
      tmpProperties.data.map((property: PropertyType) => {
        if (tmpProperties.favorites.includes(property.id)) {
          property.is_favorite = true;
        } else {
          property.is_favorite = false;
        }
        // IMPORTANT doit inclure ce return à la fin d'un map sinon bug
        return property;
      })
    );
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
        return (
          <PropertyListItem
            key={property.id}
            property={property}
            markFavorite={(is_favorite: any) => {
              markFavorite(property.id, is_favorite);
            }}
          />
        );
      })}
    </>
  );
};

export default PropertyList;
