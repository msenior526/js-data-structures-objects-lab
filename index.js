// Write your solution in this file!
const driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => {
    let newDriver = {...driver};
    newDriver[key] = value;
    return newDriver;
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value;
    return driver;
}

const deleteFromDriverByKey = (driver, key) => {
    let newDriver = {...driver};
    delete newDriver[`${key}`];
    return newDriver;
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[`${key}`];
    return driver;
}