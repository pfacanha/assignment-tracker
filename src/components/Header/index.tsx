import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { TAssignment, assignmentStore } from "../../store"

export function Header() {
  const { title, setTitle, createAssignment } = assignmentStore((s) => s)
  
  const newAssignment: TAssignment = {
    id: parseInt(crypto.randomUUID()),
    title: title.trim(),
    completed: false,
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createAssignment(newAssignment);

    setTitle("");
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form 
        className={styles.newAssignmentForm}
        onSubmit={handleSubmit}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />

        <button
          type="submit"
          disabled={!title}>
          Create <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  );
}
