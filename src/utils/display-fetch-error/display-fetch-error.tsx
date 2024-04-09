import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { HTTPResponseStatus } from '../../const';

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

    switch (responseCode) {
      case HTTPResponseStatus.Server404:
        responseData.details.map((detail) => detail.messages.map((message) => toast.error(`${responseCode}: ${message}`)));
        break;
      case HTTPResponseStatus.Server500:
        toast.error(`${responseCode}: Internal Server Error`);
        break;
      default:
        toast.error(`${responseCode}: ${responseData.message}`);
    }
  }
};
