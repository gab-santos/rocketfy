import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  opacity: ${props => (props.done ? 0.6 : 1)};

  /* Determina a habilidade de um componente esticar mais do que necessário, como está 0 ele terá um tamalho fixo mesmo que a tela seja redimensionada. */
  flex-grow: 0;
  /* Determina a habilidade de um componente encolher mais do que necessário, como está 0 ele terá um tamalho fixo mesmo que a tela seja redimensionada. */
  flex-shrink: 0;
  /* Determina o tamalho base de um componente, neste caso a Largura pois o componente-pai está com Display: flex. */
  flex-basis: 320px;
  /* Pode ser escrito assim: */
  /* flex: 0 0 320px; */

  /* O estilo será aplicado apenas na div que tiver uma div antes dela. */
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 12px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
