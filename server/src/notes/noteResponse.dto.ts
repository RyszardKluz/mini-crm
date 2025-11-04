import { NoteAttributes as INote } from '../../interfaces/note.interface.js';

export type NoteResponseDTO = Pick<INote, 'content' | 'createdAt' | 'id' | 'title'>;
