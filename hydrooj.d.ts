declare module 'hydrooj' {
  export const Handler: any;
  export const PERM: any;
  export const PRIV: any;
  export const ProblemModel: any;
  export const SystemModel: any;
  export const UserModel: any;
  export const db: any;
}

declare module 'hydrooj/src/model/document' {
  const DocumentModel: any;
  export = DocumentModel;
}
