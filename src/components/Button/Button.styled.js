import styled from "styled-components";
import { colors, borderRadius } from "../../theme";

export const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 0.95rem 2.5rem;
  border-radius: ${borderRadius};
  font-size: 1.05rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  /* Gradient + Neumorphism shadow */
  background: linear-gradient(145deg, #4f46e5, #6366f1);
  box-shadow: 6px 6px 15px ${colors.shadowDark},
    -6px -6px 15px ${colors.shadowLight};

  &:hover {
    box-shadow: inset 4px 4px 10px ${colors.shadowDark},
      inset -4px -4px 10px ${colors.shadowLight};
    transform: translateY(-2px) scale(1.02);
    background: linear-gradient(145deg, #6366f1, #4f46e5);
  }

  &:active {
    transform: translateY(1px) scale(0.97);
    box-shadow: inset 3px 3px 8px ${colors.shadowDark},
      inset -3px -3px 8px ${colors.shadowLight};
  }

  &:focus-visible {
    outline: 3px solid rgba(79, 70, 229, 0.3);
  }
`;
