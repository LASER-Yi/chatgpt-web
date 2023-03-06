import { ChatGPTAPI } from "chatgpt";

class ChatGPTAPIWrapper {
  private api: ChatGPTAPI | null;

  constructor() {
    this.api = null;
  }

  public initialize(apiKey: string) {
    this.api = new ChatGPTAPI({
      apiKey,
    });
  }
}

const ApiWrapper = new ChatGPTAPIWrapper();

export default ApiWrapper;
