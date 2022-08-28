import { config } from 'dotenv';
config();

const hostname: string | undefined = process.env.HOSTNAME;
const port: number | undefined = Number(process.env.PORT);

export {
    hostname,
    port
};