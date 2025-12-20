export class ChatResponseModel {
  constructor(
    public readonly documents: String[],
    public readonly distances: String[]
  ) {}
}
