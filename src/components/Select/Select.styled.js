import styled from "styled-components";
import { colors, borderRadius } from "../../theme";

export const StyledSelect = styled.select`
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 0.8rem 1rem; /* mniejszy padding */
  border-radius: ${borderRadius};
  background: ${colors.background};

  /* Neumorphism shadow */
  box-shadow: inset 4px 4px 10px ${colors.shadowDark},
    inset -4px -4px 10px ${colors.shadowLight};

  font-size: 0.95rem; /* mniejsza czcionka jak w inputach */
  width: 100%;
  max-width: 375px; /* dopasowane do inputów */
  margin: 0 auto 1rem auto;
  display: block;
  font-family: inherit;
  line-height: 1.2;
  color: ${({ $hasValue }) => ($hasValue ? colors.text : colors.placeholder)};
  appearance: none;
  cursor: pointer;
  transition: all 0.25s ease;

  /* strzałka w dół */
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23666' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;

  &:focus {
    box-shadow: inset 3px 3px 8px ${colors.shadowDark},
      inset -3px -3px 8px ${colors.shadowLight},
      0 0 0 2px rgba(79, 70, 229, 0.25);
    background: #f9f9ff;
  }

  option {
    background: ${colors.background};
    color: ${colors.text};
  }

  option[value=""] {
    color: ${colors.placeholder};
  }
`;
