import { NoteAttributes as INote } from './note.interface';

export type CreateNoteDTO = Pick<INote, 'content' | 'id' | 'title'>;
