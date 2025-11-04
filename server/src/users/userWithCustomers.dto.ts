import { UserResponseDTO } from './userResponse.dto';
import { CustomerWithNotesDTO } from '../customers/customerWithNotes.dto';

export type UserWithClientsDTO = UserResponseDTO & {
  clients: CustomerWithNotesDTO[];
};
