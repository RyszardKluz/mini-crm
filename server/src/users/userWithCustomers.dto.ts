import { UserResponseDTO } from './userResponse.dto.js';
import { CustomerWithNotesDTO } from '../customers/customerWithNotes.dto.js';

export type UserWithClientsDTO = UserResponseDTO & {
  clients: CustomerWithNotesDTO[];
};
