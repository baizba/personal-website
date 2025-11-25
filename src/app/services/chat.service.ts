import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ChatMessageModel} from "../models/chat/chat-message.model";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  private chatHistorySubject = new BehaviorSubject<ChatMessageModel[]>([]);
  chatHistory$ = this.chatHistorySubject.asObservable();

  addMessage(msg: ChatMessageModel) {
    const current = this.chatHistorySubject.value;
    this.chatHistorySubject.next([...current, msg]);
  }

  get history(): ChatMessageModel[] {
    return this.chatHistorySubject.value;
  }
}
