type TAction = {
  type: string;
  payload: Object;
};

export const createAction = (
  type: string,
  payload: Object | boolean
): TAction => ({
  type,
  payload,
});
