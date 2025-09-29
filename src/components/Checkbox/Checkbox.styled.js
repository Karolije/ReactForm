import styled from "styled-components";
import { colors, borderRadius } from "../../theme";

export const StyledCheckbox = styled.button`
  border: none;
  outline: none;
  padding: 1rem 2rem;
  border-radius: ${borderRadius};
  background: ${colors.background};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
  text-align: center;
  font-weight: 500;

  /* Subtelny Neumorphism */
  box-shadow: ${({ $checked }) =>
    $checked
      ? `inset 3px 3px 6px ${colors.shadowDark}, inset -3px -3px 6px ${colors.shadowLight}`
      : `3px 3px 6px ${colors.shadowDark}, -3px -3px 6px ${colors.shadowLight}`};

  color: ${({ $checked }) => ($checked ? "#fff" : "#333")};
  background: ${({ $checked }) => ($checked ? "#4f46e5" : colors.background)};

  &:hover {
    box-shadow: ${({ $checked }) =>
      $checked
        ? `inset 2px 2px 5px ${colors.shadowDark}, inset -2px -2px 5px ${colors.shadowLight}`
        : `4px 4px 8px ${colors.shadowDark}, -4px -4px 8px ${colors.shadowLight}`};
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: inset 2px 2px 5px ${colors.shadowDark},
      inset -2px -2px 5px ${colors.shadowLight};
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(79, 70, 229, 0.25);
  }
`;
