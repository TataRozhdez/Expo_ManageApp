import moment from "moment";
import { DAY_FORMAT } from "../hooks/context.config";

export const getToday = () => moment().format(DAY_FORMAT);
