import {ChatActorEnum} from "./chat-actor.enum";

export class ChatMessageModel {
  constructor(
    public readonly chatActor: ChatActorEnum,
    public readonly text: String
  ) {}
}
