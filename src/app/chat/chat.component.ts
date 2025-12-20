import {Component, OnInit} from '@angular/core';
import {ChatMessageModel} from "../models/chat/chat-message.model";
import {ChatActorEnum} from "../models/chat/chat-actor.enum";
import {ChatService} from "../services/chat.service";
import {HttpClient} from "@angular/common/http";
import {ChatResponseModel} from "../models/chat/chat-response";
import {nanoid} from "nanoid";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatInvisible: boolean = true;
  draft: String = ''

  constructor(protected chatService: ChatService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.chatService.chatHistory$.subscribe(history => {
      let lastMessage = history[history.length - 1];

      //send request to AI agent and wait for answer
      if (lastMessage.chatActor == ChatActorEnum.User) {
        console.log("sending history to AI", lastMessage.text);

        const url = "http://127.0.0.1:8000/chat";
        const body = {
          message: lastMessage.text,
          uiRequestId: nanoid(10),
          user: "Anonymous"
        };
        this.http.post<ChatResponseModel>(url, body)
          .subscribe({
            next: response => {
              this.chatService.addMessage(new ChatMessageModel(ChatActorEnum.AI, response.documents[0]));
            },
            error: err => {
              console.error('Error calling AI endpoint:', err);
              this.chatService.addMessage(new ChatMessageModel(ChatActorEnum.AI, "Sorry, I couldn't get a response."));
            }
          });


      }
    })
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

      this.draft = '';
      event.preventDefault();
    }
  }

  protected readonly ChatActorEnum = ChatActorEnum;
}
