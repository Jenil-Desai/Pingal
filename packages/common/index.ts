export interface SignupIncomingMessage {
  ip: string
  publicKey: string
  signature: string
  callbackId: string
}

export interface SignupOutgoingMessage {
  validatorId: string
  callbackId: string
}

export interface ValidatorIncomingMessage {
  status: "Good" | "Bad"
  validatorId: string
  callbackId: string
  latency: number
  websiteId: string
}

export interface ValidatorOutgoingMessage {
  url: string
  callbackId: string
  websiteId: string
}

export type IncomingMessage = {
  type: 'signup'
  data: SignupIncomingMessage
} | {
  type: 'validate'
  data: ValidatorIncomingMessage
}

export type OutgoingMessage = {
  type: 'signup'
  data: SignupOutgoingMessage
} | {
  type: 'validate'
  data: ValidatorOutgoingMessage
}
