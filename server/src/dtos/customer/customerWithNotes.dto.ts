import { CustomerResponseDTO } from './customerResponse.dto.js';
import { NoteResponseDTO } from '../note/noteResponse.dto.js';

export type CustomerWithNotesDTO = CustomerResponseDTO & {
  notes: NoteResponseDTO[];
};
