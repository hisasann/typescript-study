/**
 * TaggedUnion
 */
function processAB(value) {
    switch (value.kind) {
        case 'type-a':
            return value.typeAValue;
        case 'type-b':
            return value.typeBValue;
        default:
            throw new Error('Undefined type.');
    }
}
processAB({
    kind: 'type-a',
    typeAValue: 1,
});
processAB({
    kind: 'type-b',
    typeBValue: 'a',
});
export {};
