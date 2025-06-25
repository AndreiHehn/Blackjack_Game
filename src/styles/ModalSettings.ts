import styled from "styled-components";

export const Container = styled.div`
  .userSettings,
  .languageAndTheme {
    margin-top: 20px;
  }
  .sectionSeparator {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
  .locationText {
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
    color: var(--text-primary);
  }

  .sectionLine {
    width: 100%;
    height: 0;
    border: none;
    border-top: 1px solid var(--app-color);
  }

  .username {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    align-items: center;

    .userNameText {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-primary);
    }

    .usernameInput {
      background-color: var(--background-primary);
      height: 32px;
      border: 1px solid;
      border-color: #71717a;
      border-radius: 4px;
      padding: 5px;
      font-family: "Segoe UI";
      font-size: 16px;
      color: var(--text-primary);

      &:hover {
        border-color: var(--text-primary);
      }

      &:focus {
        outline: none;
        border-color: var(--app-color);
      }
    }
  }

  .avatar {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .avatarText {
      font-size: 14px;
      font-weight: 600;
      align-self: flex-start;
      color: var(--text-primary);
    }
  }

  .languageSelector {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    .languageText {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-primary);
    }
  }

  .themeSelector {
    margin-top: 10px;
    gap: 10px;

    .themeText {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 10px;
      color: var(--text-primary);
    }

    .radioButtons {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }

  .modalFooter {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
`;
