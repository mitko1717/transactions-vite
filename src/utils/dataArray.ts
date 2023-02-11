import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { DATA } from "./DATA";

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axios);
  mock.onGet(`/data`).reply(200, DATA);
};

export { mockNetWorkResponse };
