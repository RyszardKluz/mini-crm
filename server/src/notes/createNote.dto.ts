import { NoteAttributes as INote } from './note.interface.js';

export type CreateNoteDTO = Pick<INote, 'content' | 'id' | 'title'>;
