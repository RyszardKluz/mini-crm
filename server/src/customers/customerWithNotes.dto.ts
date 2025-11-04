import { CustomerResponseDTO } from './customerResponse.dto';
import { NoteResponseDTO } from '../notes/noteResponse.dto';

export type CustomerWithNotesDTO = CustomerResponseDTO & {
  notes: NoteResponseDTO[];
};
