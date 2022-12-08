import {atom } from "recoil";


export const storeState = atom({
    key: "store",
    default: []
});

export const storeLocation = atom({
    key: "location",
    default: []
});
