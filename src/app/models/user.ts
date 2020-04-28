// USER
export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  age: number;
  groupId?: number;
  role?: string;
  created_at?: string;
  updated_at?: string;
}