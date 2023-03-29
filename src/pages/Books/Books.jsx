import { useDispatch, useSelector } from "react-redux";

import { MainLayout } from "@layouts/Index";

import { Trash } from "phosphor-react";

import { removeBookTrip } from "@bookActions";

export const Books = () => {
  const dispatch = useDispatch();
  const bookTrips = useSelector((state) => state.bookTrip);

  const handleRemove = (id) => {
    dispatch(removeBookTrip(id));
  };

  return (
    <MainLayout pageTitle="Reservas">
      <h2 className="books-heading">
        Você solicitou {bookTrips.length} reservas!
      </h2>
      <ul className="home-list">
        {bookTrips.map((bookTrip) => (
          <li key={bookTrip.id} className="book-card">
            <img
              src={bookTrip.image}
              alt={`${bookTrip.title}'s city`}
              loading="lazy"
            />
            <h3>{bookTrip.title}</h3>
            <span>Quantidade: {bookTrip.amount}</span>
            <button onClick={() => handleRemove(bookTrip.id)}>
              <Trash size={20} weight="bold" />
            </button>
          </li>
        ))}
      </ul>
      <button className="submit-btn">Solicitar reservas</button>
    </MainLayout>
  );
};
