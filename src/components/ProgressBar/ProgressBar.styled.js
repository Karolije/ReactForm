import styled from "styled-components";
import { colors, borderRadius } from "../../theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 12px;
  background: ${colors.background};
  border-radius: ${borderRadius};
  margin-bottom: 2rem;
  box-shadow: inset 4px 4px 10px ${colors.shadowDark},
    inset -4px -4px 10px ${colors.shadowLight};
  overflow: hidden;
`;

export const Filler = styled.div`
  height: 100%;
  width: ${(props) => props.percent}%;
  background: linear-gradient(90deg, #6c63ff, #4f46e5);
  border-radius: ${borderRadius};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: width 0.4s ease-in-out, background 0.4s ease;
`;
