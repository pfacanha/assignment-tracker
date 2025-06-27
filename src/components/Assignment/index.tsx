import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import { assignmentStore } from "../../store";
import "./day.picker.css"

export function Assignment() {
  const { assignments, toggleAssignmentCompletion, deleteAssignment } = assignmentStore((s) => s);
  
  return (
    <>
      {assignments.map((assignment) => (
        <div key={assignment.id} className={styles.assignment}>
          <button
            className={styles.checkContainer}
            onClick={() => toggleAssignmentCompletion(assignment.id, !assignment.completed)}>
            {assignment.completed ? <BsCheckCircleFill /> : <BsCircle />}
          </button>

          <p className={assignment.completed ? styles.textCompleted : ""}>
            {assignment.title}
          </p>

          <button
            className={styles.deleteButton}
            onClick={() => deleteAssignment(assignment.id)}>
            <TbTrash size={20} />
          </button>
        </div>
      ))}
    </>
  );
}
