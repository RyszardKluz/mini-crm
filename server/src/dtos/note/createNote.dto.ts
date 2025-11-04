import { NoteAttributes as INote } from '../../interfaces/note.interface.js';

export type CreateNoteDTO = Pick<INote, 'content' | 'id' | 'title'>;
