import { customAxios } from "@/composables/axios";
import type { LoanPayload, Endpoint, LoanResponse, LoanRequest } from "@/types";

export class LoanService {

  private defaultEndpoint: Endpoint = "/loans";

  public async fetchAll(group: string | number): Promise<LoanPayload> {
    const response = await customAxios.get(`${this.defaultEndpoint}/?page_size=10&group=${group}`);
    let data: LoanResponse = response.data;
    return data.payload;
  }

  public async save(requestBody: LoanRequest): Promise<LoanPayload> {
    const response = await customAxios.post(this.defaultEndpoint, requestBody);
    let data: LoanResponse = response.data;
    return data.payload;
  }
}