export type DataType = {
  name: string;
  login: string;
  password: string;
  url: string;
};
export type DataTypeWithId = DataType & { id:string };
