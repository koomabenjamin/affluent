import { customAxios } from "@/composables/axios";
import type { CollectionPayload, Endpoint, CollectionResponse, CollectionRequest } from "@/types";

export class CollectionService {

  private defaultEndpoint: Endpoint = "/collections";

  public async fetchAll(group: string | number): Promise<CollectionPayload> {
    const response = await customAxios.get(this.defaultEndpoint);
    let data: CollectionResponse = response.data;
    return data.payload;
  }

  public async save(requestBody: CollectionRequest): Promise<CollectionPayload> {
    const response = await customAxios.post(this.defaultEndpoint, requestBody);
    let data: CollectionResponse = response.data;
    return data.payload;
  }
}