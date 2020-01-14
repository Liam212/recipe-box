import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .card {
      color: ${({ theme }) => theme.text};
      background: ${({ theme }) => theme.cardBody};
      width: 18rem;
      margin: 10px 10px 10px 10px;
      box-shadow: ${({ theme }) => theme.cardShadow};
  }
  .card-footer {
    background: ${({ theme }) => theme.cardFooter};
  }
  .modal-theme {
    background: ${({ theme }) => theme.cardBody};
  }
  `