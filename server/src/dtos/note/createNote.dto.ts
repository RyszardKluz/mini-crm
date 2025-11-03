import {
  NoteAttributes as INote,
  NoteAttributes,
} from '../../interfaces/note.interface.js';

export type CreateNoteDTO = Pick<INote, 'content' | 'id' | 'title'>;
