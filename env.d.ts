declare namespace NodeJS {
    interface ProcessEnv {
      TELEGRAM_BOT_TOKEN: string;
      TELEGRAM_CHAT_ID: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }