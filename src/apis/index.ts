import { ChatGPTAPI } from "chatgpt";

class ChatGPTAPIWrapper {
  private api: ChatGPTAPI;

  constructor() {
    this.api = new ChatGPTAPI({
      apiKey: "",
    });
  }
}

const ApiWrapper = new ChatGPTAPIWrapper();

export default ApiWrapper;
