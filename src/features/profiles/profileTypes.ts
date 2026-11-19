import { GroupId } from "./groups";

export type Profile = {
    id: string;
    name: string;
    jobTitle?: string;
    photo?: string;
    group: GroupId;
};