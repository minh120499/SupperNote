export interface AppRouters {
  path: string;
  index?: boolean;
  element: React.ReactNode;
  elements?: AppRouters[];
  label?: string;
}
