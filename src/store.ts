import { create } from 'zustand';

export type TAssignment = {
    id: number;
    title: string;
    completed: boolean;
}

interface State {
    assignments: TAssignment[];
    title: string;
    setTitle: (title: string) => void;
    createAssignment: (currentAssignment: TAssignment) => void;
    deleteAssignment: (id: number) => void;
    toggleAssignmentCompletion: (id: number, completed: boolean) => void;
}

export const assignmentStore = create<State>((set) => ({
    assignments: [],
    title: "",
    setTitle: (title) => set({ title }),
    createAssignment: (currentAssignment) =>
        set((state) => ({
        assignments: [...state.assignments, currentAssignment]
        })),
    deleteAssignment: (id) =>
        set((state) => ({
        assignments: state.assignments.filter((assignment) => assignment.id !== id)
        })),
    toggleAssignmentCompletion: (id, completed) =>
        set((state) => ({
        assignments: state.assignments.map((assignment) => assignment.id === id ? { ...assignment, completed } : assignment
        ),
        })),
}));
