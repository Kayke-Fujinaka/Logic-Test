function urlSlug(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
}
const call = urlSlug(" Winter Is  Coming");
console.log(call);
