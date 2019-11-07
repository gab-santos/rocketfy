import React from "react";

import { MdAdd } from "react-icons/md";

import Card from "../Card";
import { Container } from "./styles";

export default function List({ index: listIndex, data }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd color="#fff" size={24} />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}
