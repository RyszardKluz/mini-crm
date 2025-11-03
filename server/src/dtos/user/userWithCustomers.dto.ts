import { UserResponseDTO } from './userResponse.dto.js';
import { CustomerWithNotesDTO } from '../customer/customerWithNotes.dto.js';

export type UserWithClientsDTO = UserResponseDTO & {
  clients: CustomerWithNotesDTO[];
};
