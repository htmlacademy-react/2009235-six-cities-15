import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

type ErrorResponse = {
  errorType: string;
  message: string;
  details: [{
    property: string;
    value: string;
    messages: [string];
  }];
};

export const displayFetchError = (err: unknown) => {
  if (err instanceof AxiosError) {
    const responseCode = err.response?.status;
    const responseData = err.response?.data as ErrorResponse;

    switch (true) {
      case(responseCode === 400):
        responseData.details.map((detail) => detail.messages.map((message) => toast.error(`${responseCode}: ${message}`)));
        break;
      default:
        toast.error(`${responseCode}: ${responseData.message}`);
    }
  }
};
