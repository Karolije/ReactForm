// Form.styled.js
import styled from "styled-components";
import { colors, borderRadius } from "../../theme";

/* --------------------- CONTAINER & TITLE --------------------- */
export const Container = styled.div`
  position: relative;
  max-width: ${({ step }) => (step === 3 ? "600px" : "400px")};
  margin: 2rem auto;
  min-height: 500px;
  background: ${colors.background};
  padding: 2.5rem;
  border-radius: ${borderRadius};
  box-shadow: 8px 8px 20px ${colors.shadowDark},
    -8px -8px 20px ${colors.shadowLight};
  display: flex;
  flex-direction: column;
  transition: max-width 0.3s ease;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #4f46e5, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

/* --------------------- INPUT --------------------- */
export const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 0.85rem 1rem;
  border-radius: ${borderRadius};
  background: ${colors.background};
  box-shadow: inset 6px 6px 15px ${colors.shadowDark},
    inset -6px -6px 15px ${colors.shadowLight};
  font-size: 0.95rem;
  width: 100%;
  max-width: 330px;
  margin: 0 auto 1.5rem auto;
  display: block;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${colors.placeholder};
    font-weight: 500;
  }

  &:focus {
    box-shadow: inset 4px 4px 10px ${colors.shadowDark},
      inset -4px -4px 10px ${colors.shadowLight},
      0 0 0 3px rgba(79, 70, 229, 0.25);
    background: #f9f9ff;
  }

  &:hover {
    box-shadow: inset 5px 5px 12px ${colors.shadowDark},
      inset -5px -5px 12px ${colors.shadowLight};
  }
`;

/* --------------------- SELECT --------------------- */
export const StyledSelect = styled.select`
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 0.85rem 1rem;
  border-radius: ${borderRadius};
  background: ${colors.background};
  box-shadow: inset 6px 6px 15px ${colors.shadowDark},
    inset -6px -6px 15px ${colors.shadowLight};
  font-size: 0.95rem;
  width: 100%;
  max-width: 330px;
  margin: 0 auto 1.5rem auto;
  display: block;
  font-family: inherit;
  line-height: 1.2;
  color: ${({ $hasValue }) => ($hasValue ? colors.text : colors.placeholder)};
  appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23666' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;

  &:focus {
    box-shadow: inset 4px 4px 10px ${colors.shadowDark},
      inset -4px -4px 10px ${colors.shadowLight},
      0 0 0 3px rgba(79, 70, 229, 0.25);
  }

  option {
    background: ${colors.background};
    color: ${colors.text};
  }

  option[value=""] {
    color: ${colors.placeholder};
  }
`;

/* --------------------- CHECKBOX --------------------- */
export const StyledCheckbox = styled.button`
  border: none;
  outline: none;
  padding: 0.85rem 1.5rem;
  border-radius: ${borderRadius};
  background: ${colors.background};
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ $checked }) =>
    $checked
      ? `inset 4px 4px 10px ${colors.shadowDark}, inset -4px -4px 10px ${colors.shadowLight}`
      : `4px 4px 10px ${colors.shadowDark}, -4px -4px 10px ${colors.shadowLight}`};

  &:active {
    box-shadow: inset 2px 2px 6px ${colors.shadowDark},
      inset -2px -2px 6px ${colors.shadowLight};
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary || "#6366f1"};
  }
`;

/* --------------------- BUTTON --------------------- */
export const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 0.85rem 2rem;
  border-radius: ${borderRadius};
  background: ${colors.background};
  font-size: 0.95rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #fff;
  box-shadow: 6px 6px 15px ${colors.shadowDark},
    -6px -6px 15px ${colors.shadowLight};
  background: linear-gradient(145deg, #4f46e5, #6366f1);

  &:hover {
    box-shadow: inset 4px 4px 10px ${colors.shadowDark},
      inset -4px -4px 10px ${colors.shadowLight};
    transform: translateY(-2px);
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

/* --------------------- ERROR & BUTTON WRAPPER --------------------- */
export const ButtonWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const ErrorText = styled.p`
  color: #e53935;
  font-size: 0.85rem;
  margin-top: -0.8rem;
  margin-bottom: 1rem;
`;

/* --------------------- GENDER --------------------- */
export const GenderGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const GenderOptions = styled.div`
  display: flex;
  gap: 1rem;
`;

/* --------------------- SUMMARY --------------------- */
export const SummaryGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const SummaryItem = styled.li`
  background: ${colors.background};
  box-shadow: inset 4px 4px 10px ${colors.shadowDark},
    inset -4px -4px 10px ${colors.shadowLight};
  border-radius: ${borderRadius};
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const SummaryItemWide = styled(SummaryItem)`
  grid-column: span 2;
`;

export const Label = styled.span`
  font-size: 0.85rem;
  color: ${colors.placeholder};
  margin-bottom: 0.3rem;
`;

export const Value = styled.span`
  font-size: 1rem;
  color: ${colors.text};
  font-weight: 600;
`;
