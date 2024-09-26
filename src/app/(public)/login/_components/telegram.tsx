"use client";

import { LoginButton } from "@telegram-auth/react";

const TelegramButton = () => (
  <LoginButton
    botUsername="werfitbot"
    authCallbackUrl="/dashboard"
    buttonSize="medium"
    cornerRadius={4}
    lang="en"
    showAvatar
  />
);

export { TelegramButton };
