import app from './app';
import { PORT, DB_URI } from './app/config';
import mongoose from 'mongoose';

const main = async () => {
  try {
    await mongoose.connect(DB_URI as string);
    app.listen(PORT, () => {
      console.log(`[server] started on http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.log(`[server] failed to start: ${error}`);
    process.exit(0);
  }
};

main();
