import { getLS } from './workInLS';

const store = {
  offset: 0,
  count: 3,
};

export const getActualCards = () => {
  const cards = getLS('cart') || [];
  if (!cards?.length) return [];

  return cards.slice(store.offset, store.offset + store.count);
};

export const getCardsByPage = page => {
  const cards = getLS('cart');

  if (!cards?.length) return [];

  const currentOffset = page * store.count;

  const length = cards.length;

  offset =
    currentOffset + store.count >= length
      ? length - store.count
      : currentOffset + 1;

  return getActualCards();
};
