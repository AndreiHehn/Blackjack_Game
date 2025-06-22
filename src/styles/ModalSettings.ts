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
  }

  .sectionLine {
    width: 100%;
    height: 0;
    border: none;
    border-top: 1px solid #aa0505;
  }

  .username {
    margin-top: 10px;
    display: flex;
    gap: 10px;

    .userNameText {
      font-size: 14px;
      font-weight: 600;
    }

    .usernameInput {
      background-color: #ffffff;
      height: 24px;
      border: 1px solid;
      border-color: #71717a;
      border-radius: 4px;
      padding: 5px;
      font-family: "Segoe UI";
      color: #2f3640;

      &:hover {
        border-color: #2f3640;
      }

      &:focus {
        outline: none;
        border-color: #aa0505;
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
    }
  }

  .modalFooter {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
`;
