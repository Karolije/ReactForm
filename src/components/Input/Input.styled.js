import styled from "styled-components";
import { colors, borderRadius } from "../../theme";

export const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 0.8rem 1rem; /* mniejsze pady */
  border-radius: ${borderRadius};
  background: ${colors.background};

  /* Neumorphism shadow */
  box-shadow: inset 4px 4px 10px ${colors.shadowDark},
    inset -4px -4px 10px ${colors.shadowLight};

  font-size: 0.95rem; /* trochę mniejsza czcionka */
  width: 100%;
  max-width: 340px; /* lekko węższe */
  margin: 0 auto 1rem auto; /* mniejszy odstęp między inputami */
  display: block;
  transition: all 0.25s ease;

  &::placeholder {
    color: #aaa;
    opacity: 1;
    font-weight: 500;
    font-size: 0.9rem; /* mniejsza placeholder czcionka */
  }

  &:focus {
    /* Glow effect + soft neumorphism */
    box-shadow: inset 3px 3px 8px ${colors.shadowDark},
      inset -3px -3px 8px ${colors.shadowLight},
      0 0 0 2px rgba(79, 70, 229, 0.25);
    background: #f9f9ff;
  }

  &:hover {
    box-shadow: inset 4px 4px 10px ${colors.shadowDark},
      inset -4px -4px 10px ${colors.shadowLight};
  }
`;
