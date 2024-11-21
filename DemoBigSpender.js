let sales = 1200;
let inventoryCost = 1200;
let monthlySummaryMessage = "";

if (sales > inventoryCost) {
  monthlySummaryMessage = "We made more than we spent!";
}
if (sales < inventoryCost) {
  monthlySummaryMessage = "Oops, spent more than we made...";
}
if (sales == inventoryCost) {
  monthlySummaryMessage = "We broke even! Hurray!";
}

console.log(monthlySummaryMessage);
