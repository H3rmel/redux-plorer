import { useEffect, useState } from "react";

import { MainLayout } from "@layouts/Index";

import { getTrips } from "@api/trips";

import { toast } from "react-toastify";

import { AirplaneTilt } from "phosphor-react";

export const Home = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    loadTrips();
  }, []);

  const loadTrips = async () => {
    try {
      const response = await getTrips();

      if (response) setTrips(response);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <MainLayout pageTitle="Home">
      <ul className="home-list">
        {trips.map((trip) => (
          <li key={trip.id} className="trip-card">
            <img src={trip.image} alt={`${trip.title}'s city`} loading="lazy"  />
            <div>
              <h3>Viagem para {trip.title}</h3>
              <span className={trip.status ? "available" : "unavailable"}>
                <strong>Status:</strong> {trip.status ? "Disponível" : "Indisponível"}
              </span>
              <p>{trip.description}</p>
            </div>
            <button>
              <AirplaneTilt size={20} weight="bold" /> Reservar
            </button>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};
