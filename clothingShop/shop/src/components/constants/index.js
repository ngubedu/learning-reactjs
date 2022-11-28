export const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NOT_AUTH: 401,
  FORBIDDEN: 404,
};
export const DollarUsd = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
});
