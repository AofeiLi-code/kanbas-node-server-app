import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {

    app.get("/api/assignments/course/:courseId", async (req, res) => {
        try {
            const { courseId } = req.params;
            const assignments = await dao.findAssignments(courseId);
            res.status(200).send(assignments);
        } catch (error) {
            res.status(500).send({ message: "Error fetching assignments", error });
        }
    });

    app.get("/api/assignments/:assignmentId", async (req, res) => {
        try {
            const { assignmentId } = req.params;
            const assignment = await dao.findAssignmentById(assignmentId);
            if (assignment) {
                res.status(200).send(assignment);
            } else {
                res.status(404).send({ message: "Assignment not found" });
            }
        } catch (error) {
            res.status(500).send({ message: "Error fetching assignment", error });
        }
    });

    app.post("/api/assignments", async (req, res) => {
        try {
            const newAssignment = req.body;
            const createdAssignment = await dao.createAssignment(newAssignment);
            res.status(201).send(createdAssignment);
        } catch (error) {
            res.status(500).send({ message: "Error creating assignment", error });
        }
    });

    app.put("/api/assignments/:assignmentId", async (req, res) => {
        try {
            const { assignmentId } = req.params;
            const assignmentUpdates = req.body;
            const status = await dao.updateAssignment(assignmentId, assignmentUpdates);
            res.status(200).send(status);
        } catch (error) {
            res.status(500).send({ message: "Error updating assignment", error });
        }
    });

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        try {
            const { assignmentId } = req.params;
            const status = await dao.deleteAssignment(assignmentId);
            res.status(200).send(status);
        } catch (error) {
            res.status(500).send({ message: "Error deleting assignment", error });
        }
    });
}
