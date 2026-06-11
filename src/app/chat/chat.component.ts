import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatMessageModel} from "../models/chat/chat-message.model";
import {ChatActorEnum} from "../models/chat/chat-actor.enum";
import {ChatService} from "../services/chat.service";
import {HttpClient} from "@angular/common/http";
import {ChatResponseModel} from "../models/chat/chat-response";
import {nanoid} from "nanoid";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  chatInvisible: boolean = true;
  draft: String = ''
  loading: boolean = false;
  apiReady: boolean = false;

  private readyPollId?: ReturnType<typeof setInterval>;
  private aiChatBaseUrl: string = environment.aiChatBaseUrl;

  constructor(protected chatService: ChatService, private http: HttpClient) {
  }

  ngOnInit(): void {
    // poll the API ready endpoint every 5s; 204 => ready
    this.pollApiReady();
    this.readyPollId = setInterval(() => this.pollApiReady(), 10000);

    this.chatService.chatHistory$.subscribe(history => {
      let lastMessage = history[history.length - 1];

      //send request to AI agent and wait for answer
      if (lastMessage.chatActor == ChatActorEnum.User) {
        console.log("sending question to AI", lastMessage.text);

        const url = `${this.aiChatBaseUrl}/chat`;
        const body = {
          message: lastMessage.text,
          uiRequestId: nanoid(10),
          user: "Anonymous"
        };
        this.http.post<ChatResponseModel>(url, body)
          .subscribe({
            next: chatResponse => {
              this.chatService.addMessage(new ChatMessageModel(ChatActorEnum.AI, chatResponse.response));
              this.loading = false;
            },
            error: err => {
              console.error('Error calling AI endpoint:', err);
              this.chatService.addMessage(new ChatMessageModel(ChatActorEnum.AI, "Sorry, I couldn't get a response."));
              this.loading = false;
            }
          });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.readyPollId != null) {
      clearInterval(this.readyPollId);
    }
  }

  isInputDisabled(): boolean {
    return this.loading || !this.apiReady;
  }

  getPlaceholderText(): string {
    if (!this.apiReady) {
      return "Waiting for AI to be ready...";
    }

    if (this.loading) {
      return "Waiting for response...";
    }

    return "Type a message";
  }

  private pollApiReady(): void {
    const url = `${this.aiChatBaseUrl}/ready`;
    this.http.get(url, {observe: 'response'})
      .subscribe({
        next: response => {
          this.apiReady = response.status === 204;
        },
        error: () => {
          this.apiReady = false;
        }
      });
  }

  toggleChat(): void {
    this.chatInvisible = !this.chatInvisible;
  }

  autoResize(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  sendMessage(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        return;
      }

      if (this.draft.trim() == '') {
        event.preventDefault();
        return;
      }

      this.chatService.addMessage(new ChatMessageModel(ChatActorEnum.User, this.draft));
      this.loading = true;

      this.draft = '';
      event.preventDefault();
    }
  }

  protected readonly ChatActorEnum = ChatActorEnum;
}
