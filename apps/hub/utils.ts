import nacl from "tweetnacl";
import nacl_util from "tweetnacl-util";
import { PublicKey } from "@solana/web3.js";
import axios from "axios";

export interface LocationReponse {
  ipVersion: number
  ipAddress: string
  latitude: number
  longitude: number
  countryName: string
  countryCode: string
  timeZone: string
  zipCode: string
  cityName: string
  regionName: string
  continent: string
  continentCode: string
  isProxy: boolean
  currency: Currency
  language: string
  timeZones: string[]
  tlds: string[]
}

export interface Currency {
  code: string
  name: string
}


export async function getLocationFromIp(ip: string) {
  const reponse = await axios.get<LocationReponse>(`https://freeipapi.com/api/json/${ip}`);

  return reponse.data.regionName;
}

export async function verifyMessage(message: string, publicKey: string, signature: string) {
  const messageBytes = nacl_util.decodeUTF8(message);
  const result = nacl.sign.detached.verify(
    messageBytes,
    new Uint8Array(JSON.parse(signature)),
    new PublicKey(publicKey).toBytes(),
  );

  return result;
}
