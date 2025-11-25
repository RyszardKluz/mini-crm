export interface NoteAttributes {
  id: string;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  customerId: string;
}
