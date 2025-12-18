export const calculateDueDate = (due_date) => {
    const today = new Date();
    const due = new Date(due_date);

    const diffInMs = today - due;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays <= 0) {
        return 100; // Today or overdue
    } else if (diffInDays <= 2) {
        return 90;
    } else if (diffInDays <= 5) {
        return 75;
    } else if (diffInDays <= 10) {
        return 50;
    } else if (diffInDays <= 20) {
        return 25;
    } else {
        return 10;
    }
};

export const calculateEstimatedHours = (estimated_hours) => {
    if (estimated_hours <= 2) {
        return 100; // Quick win
    } else if (estimated_hours <= 5) {
        return 70;
    } else if (estimated_hours <= 12) {
        return 50;
    } else {
        return 25; // Heavy task
    }
};

export const calculateImportance = (importance) => {
    switch (importance) {
        case 5: return 100;
        case 4: return 80;
        case 3: return 60;
        case 2: return 30;
        case 1: return 10;
        default: return 10;
    }
};


export const priorityAlgo = (due_date, estimated_hours, importance) => {
    const urgencyScore = calculateDueDate(due_date);
    const effortScore = calculateEstimatedHours(estimated_hours);
    const importanceScore = calculateImportance(importance);

    const priorityScore = (urgencyScore * 0.5) + (importanceScore * 0.3) + (effortScore * 0.2);

    return Math.round(priorityScore);
};