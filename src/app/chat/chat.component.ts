import {Component, OnInit} from '@angular/core';
import {ChatMessageModel} from "../models/chat/chat-message.model";
import {ChatActorEnum} from "../models/chat/chat-actor.enum";
import {ChatService} from "../services/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatInvisible: boolean = true;
  draft: String = ''

  constructor(protected chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.chatHistory$.subscribe(history => {
      let lastMessage = history[history.length - 1];

      //send request to AI agent and wait for answer
      if(lastMessage.chatActor == ChatActorEnum.User) {
        console.log("sending history to AI", lastMessage.text);
        setTimeout(() => {
          this.chatService.addMessage(new ChatMessageModel(ChatActorEnum.AI, "That's what she said."));
          console.log("AI answered");
          console.log(this.chatService.history);
        }, 1000);
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

      this.chatService.addMessage(new ChatMessageModel(ChatActorEnum.User, this.draft));

      this.draft = '';
      event.preventDefault();
    }
  }

}
