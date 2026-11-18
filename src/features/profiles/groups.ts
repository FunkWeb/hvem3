export const GROUPS = [
    {id: "aft", label: "AFT", heading: "Aktive deltakere i AFT", orgUnitPath: "/Deltagere/AFT"},
    {id: "lko", label: "LKO", heading: "Lærekandidater", orgUnitPath: "/Deltagere/LKO"},
    {id: "ffu", label: "FFU", heading: "Ukraina Kandidater", orgUnitPath: "/Deltagere/FFU"},
    {id: "ansatte", label: "Ansatte", heading: "Ansatte", orgUnitPath: "/Ansatte"}
] as const;

export type GroupId = (typeof GROUPS)[number]["id"];
