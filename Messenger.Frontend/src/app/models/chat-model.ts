export class ChatModel {
  chatId: number;
  chatName: string;
  chatCreated: Date;
  chatUpdated: Date | null;
  chatDeleted: Date | null;
  lastMessage: string | null;
  lastActivity: Date | null;
}
