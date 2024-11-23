import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {

    app.get("/api/enrollments/user/:userId", (req, res) => {
        const { userId } = req.params;
        const enrollments = dao.findEnrollmentsByUser(userId);
        res.json(enrollments);
    });

    app.post("/api/enrollments", (req, res) => {
        const enrollment = req.body;
        const newEnrollment = dao.createEnrollment(enrollment);
        res.status(201).json(newEnrollment);
    });

    app.delete("/api/enrollments/:id", (req, res) => {
        const { id } = req.params;
        const success = dao.deleteEnrollment(id);
        if (success) {
            res.sendStatus(204);
        } else {
            res.status(404).send({ message: "Enrollment not found" });
        }
    });
}
