import Database from "../Database/index.js";

import model from "./model.js";

export function findAssignments(courseId) {
    return model.find({ course: courseId });
}

export function findAssignmentById(assignmentId) {
    return model.findById(assignmentId);
}

export function createAssignment(assignment) {
    return model.create(assignment);
}

export function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
}
