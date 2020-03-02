/**
 * Valid な Email （String）型をどう定義するか
 */
// Implementing an opaque type in typescript - https://evertpot.com/opaque-ts-types/
// TypeScript 3.7の`asserts x is T`型はどのように危険なのか - Qiita - https://qiita.com/uhyo/items/b8d2ea6fbf6214fc4194
function save(user) { }
function assertValidEmail(input) {
    if (!input.includes('@')) {
        throw new Error("The string: " + input + " is not a valid email address");
    }
}
var email = 'foo@example.org';
assertValidEmail(email);
var user = {
    firstName: 'Evert',
    lastName: 'Pot',
    email: email,
};
save(user);
