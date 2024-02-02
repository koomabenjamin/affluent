import { customAxios } from "@/composables/axios";
import { CollectionPayload, Endpoint, CollectionResponse, CollectionRequest } from "@/types";

export class CollectionService {

  private defaultEndpoint: Endpoint = "/v1/collections";

  public async fetchCollections(): Promise<CollectionPayload> {
    const response = await customAxios.post(this.defaultEndpoint + '/all');
    let data: CollectionResponse = response.data;
    return data.payload;
  }
  // public async restore():Promise<AdhesiveTypePayload>{
  //     const response =  await customAxios.post(this.defaultEndpoint + '/restore_all');
  //     let data: AdhesiveTypeResponse = response.data;
  //     return data.payload;
  // }
  public async save(requestBody: CollectionRequest): Promise<CollectionPayload> {
    const response = await customAxios.post(this.defaultEndpoint, requestBody);
    let data: CollectionResponse = response.data;
    return data.payload;
  }
}