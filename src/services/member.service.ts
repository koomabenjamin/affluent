import { customAxios } from "@/composables/axios";
import type { MemberPayload, Endpoint, MemberResponse, MemberRequest } from "@/types/members";

export class MemberService {

  private defaultEndpoint: Endpoint = "/v1/members";

  public async fetchAllMembers(): Promise<MemberPayload> {
    const response = await customAxios.get(`${this.defaultEndpoint}/?page_size=10`);
    let data: MemberResponse = response.data;
    return data.payload;
  }

  public async fetchAll(group: string | number): Promise<MemberPayload> {
    const response = await customAxios.get(`${this.defaultEndpoint}/?page_size=10&member=${group}`);
    let data: MemberResponse = response.data;
    return data.payload;
  }

  public async save(requestBody: MemberRequest): Promise<MemberPayload> {
    const response = await customAxios.post(this.defaultEndpoint, requestBody);
    let data: MemberResponse = response.data;
    return data.payload;
  }
}