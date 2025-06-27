import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { assignmentStore } from "../../store"

export function Assignments() {
  const assignments  = assignmentStore((state) => state.assignments)

  const totalAssignments = assignments.length;
  const completedAssignments = assignments.filter(assignment => assignment.completed);

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{totalAssignments}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedAssignments.length} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        <Assignment />
      </div>
    </section>
  );
}
