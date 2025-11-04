import { NoteAttributes as INote } from './note.interface';

export type NoteResponseDTO = Pick<INote, 'content' | 'createdAt' | 'id' | 'title'>;
