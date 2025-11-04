import { CustomerResponseDTO } from './customerResponse.dto.js';
import { NoteResponseDTO } from '../dtos/note/noteResponse.dto.js';

export type CustomerWithNotesDTO = CustomerResponseDTO & {
  notes: NoteResponseDTO[];
};
