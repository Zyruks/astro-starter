// This is an example types file. Please replace these example types with your actual type definitions.

// Example of a simple type for a user
export type User = {
  id: string;
  name: string;
  email: string;
};

// Example of a union type for possible role values
export type UserRole = 'admin' | 'editor' | 'viewer';

// Example of an interface for a more complex object, incorporating previous types
export interface DetailedUser extends User {
  role: UserRole;
  createdAt: Date;
  lastLogin: Date | null;
}

// Example of a type for function arguments
export type AddUserParams = {
  name: string;
  email: string;
  role: UserRole;
};

// Example of a generic type for a response format
export type ApiResponse<T> = {
  status: 'success' | 'error';
  message: string;
  data?: T;
};
