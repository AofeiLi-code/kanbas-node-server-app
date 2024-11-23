import Database from "../Database/index.js";

export function findEnrollmentsByUser(userId) {
    return Database.enrollments.filter((enrollment) => enrollment.user === userId);
}

export function createEnrollment(enrollment) {
    const newEnrollment = { ...enrollment, _id: Date.now().toString() };
    Database.enrollments.push(newEnrollment);
    return newEnrollment;
}

export function deleteEnrollment(enrollmentId) {
    const index = Database.enrollments.findIndex((enrollment) => enrollment._id === enrollmentId);
    if (index !== -1) {
        Database.enrollments.splice(index, 1);
        return true;
    }
    return false;
}
