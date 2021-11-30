/**
 * インデックスシグネチャ
 */
// Error: Property 'address' is missing in type '{ name: string; }' but required in type '{ name: string; address: string; }'.
var user = { name: 'mitsuruog' };
console.log(user['name']); // => mitsuruog
export {};
