import { HttpMockAdapterFactory } from "@/utils/Http/HttpMockAdapterFactory";
import { CalculatorHttpRepository } from "./CalculatorHttpRepository";

const httpMock = HttpMockAdapterFactory.getInstance();

httpMock.onGet(
  process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/financial-control/compound-interest?initialCapital=:initialCapital&annualContribution=:annualContribution&rateInterest=:rateInterest&period=:period",
  () => {
    return Promise.resolve({
      status: 200,
      response: [
        {
          totalCapital: "11500.00",
          initialCapital: "10000.00",
          contribution: "1000.00",
          interest: "500.00",
        },
        {
          totalCapital: "13075.00",
          initialCapital: "10000.00",
          contribution: "2000.00",
          interest: "1075.00",
        },
        {
          totalCapital: "14728.75",
          initialCapital: "10000.00",
          contribution: "3000.00",
          interest: "1728.75",
        },
        {
          totalCapital: "16465.19",
          initialCapital: "10000.00",
          contribution: "4000.00",
          interest: "2465.19",
        },
        {
          totalCapital: "18288.45",
          initialCapital: "10000.00",
          contribution: "5000.00",
          interest: "3288.45",
        },
        {
          totalCapital: "20202.87",
          initialCapital: "10000.00",
          contribution: "6000.00",
          interest: "4202.87",
        },
        {
          totalCapital: "22213.01",
          initialCapital: "10000.00",
          contribution: "7000.00",
          interest: "5213.01",
        },
        {
          totalCapital: "24323.66",
          initialCapital: "10000.00",
          contribution: "8000.00",
          interest: "6323.66",
        },
        {
          totalCapital: "26539.85",
          initialCapital: "10000.00",
          contribution: "9000.00",
          interest: "7539.85",
        },
        {
          totalCapital: "28866.84",
          initialCapital: "10000.00",
          contribution: "10000.00",
          interest: "8866.84",
        },
        {
          totalCapital: "31310.18",
          initialCapital: "10000.00",
          contribution: "11000.00",
          interest: "10310.18",
        },
        {
          totalCapital: "33875.69",
          initialCapital: "10000.00",
          contribution: "12000.00",
          interest: "11875.69",
        },
        {
          totalCapital: "36569.47",
          initialCapital: "10000.00",
          contribution: "13000.00",
          interest: "13569.47",
        },
        {
          totalCapital: "39397.95",
          initialCapital: "10000.00",
          contribution: "14000.00",
          interest: "15397.95",
        },
        {
          totalCapital: "42367.85",
          initialCapital: "10000.00",
          contribution: "15000.00",
          interest: "17367.85",
        },
        {
          totalCapital: "45486.24",
          initialCapital: "10000.00",
          contribution: "16000.00",
          interest: "19486.24",
        },
        {
          totalCapital: "48760.55",
          initialCapital: "10000.00",
          contribution: "17000.00",
          interest: "21760.55",
        },
        {
          totalCapital: "52198.58",
          initialCapital: "10000.00",
          contribution: "18000.00",
          interest: "24198.58",
        },
        {
          totalCapital: "55808.51",
          initialCapital: "10000.00",
          contribution: "19000.00",
          interest: "26808.51",
        },
        {
          totalCapital: "59598.93",
          initialCapital: "10000.00",
          contribution: "20000.00",
          interest: "29598.93",
        },
        {
          totalCapital: "63578.88",
          initialCapital: "10000.00",
          contribution: "21000.00",
          interest: "32578.88",
        },
        {
          totalCapital: "67757.82",
          initialCapital: "10000.00",
          contribution: "22000.00",
          interest: "35757.82",
        },
        {
          totalCapital: "72145.71",
          initialCapital: "10000.00",
          contribution: "23000.00",
          interest: "39145.71",
        },
        {
          totalCapital: "76753.00",
          initialCapital: "10000.00",
          contribution: "24000.00",
          interest: "42753.00",
        },
        {
          totalCapital: "81590.65",
          initialCapital: "10000.00",
          contribution: "25000.00",
          interest: "46590.65",
        },
        {
          totalCapital: "86670.18",
          initialCapital: "10000.00",
          contribution: "26000.00",
          interest: "50670.18",
        },
        {
          totalCapital: "92003.69",
          initialCapital: "10000.00",
          contribution: "27000.00",
          interest: "55003.69",
        },
        {
          totalCapital: "97603.87",
          initialCapital: "10000.00",
          contribution: "28000.00",
          interest: "59603.87",
        },
        {
          totalCapital: "103484.07",
          initialCapital: "10000.00",
          contribution: "29000.00",
          interest: "64484.07",
        },
        {
          totalCapital: "109658.27",
          initialCapital: "10000.00",
          contribution: "30000.00",
          interest: "69658.27",
        },
      ],
    });
  }
);

export class UserMockRepository extends CalculatorHttpRepository {}
