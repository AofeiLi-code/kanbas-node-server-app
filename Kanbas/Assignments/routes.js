import * as dao from "./dao.js";


export default function AssignmentRoutes(app) {
    // Get assignments by course ID
    app.get("/api/assignments/course/:courseId", async (req, res) => {
        const { courseId } = req.params;
        const assignmentUpdates = req.body;
        const status = await dao.findAssignments(courseId, assignmentUpdates);
        res.send(status);
    });

    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await dao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    });

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await dao.deleteAssignment(assignmentId);
        res.send(status);
    });

    app.put("/api/assignments/:assignmentId", async (req, res) => {
        try {
            const { assignmentId } = req.params;
            const assignmentUpdates = req.body;

            let assignment = await dao.findAssignmentById(assignmentId);
            if (assignment) {

                assignment = await dao.updateAssignment(assignmentId, assignmentUpdates);
                res.status.send(assignment);
            } else {

                const newAssignment = { ...assignmentUpdates, _id: assignmentId };
                assignment = await dao.createAssignment(newAssignment);
                res.status.send(assignment);
            }
        } catch (error) {
            res.status.send({ message: "Error processing assignment", error });
        }
    });

}
