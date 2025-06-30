import * as React from "react";

export interface WebUIButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const WebButton: React.FC<WebUIButtonProps> = ({ children, onClick }) => (
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={onClick}>
    {children}
  </button>
);
