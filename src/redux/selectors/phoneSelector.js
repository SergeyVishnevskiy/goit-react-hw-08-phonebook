import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;
export const getError = (state) => state.contacts.error;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
);
