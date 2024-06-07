import { useDispatch, UseDispatch } from "react-redux";
import { AppDispatch } from "./store";

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;