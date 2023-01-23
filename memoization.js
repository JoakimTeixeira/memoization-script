const once = (originalFunction) => {
    let hasBeenCalled = false;
    let result;
    return (...args) => {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            result = originalFunction(...args);
        }
        return result;
    };
};
const sum = (a, b) => a + b;

const onceSum1 = once(sum);
console.log(onceSum1(1, 3));
console.log(onceSum1(5, 3));

const onceSum2 = once(sum);
console.log(onceSum2(2, 7));
console.log(onceSum2(5, 2));

const onceSum3 = once(sum);
console.log(onceSum3(3, 4));
console.log(onceSum3(4, 1)); 
