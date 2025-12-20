export const calculateDueDate = (due_date) => {
    const today = new Date();
    const due = new Date(due_date);

    const diffInMs = due - today;
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays < 0) {
        return 100; // Overdue - Immediate action
    } else if (diffInDays === 0) {
        return 100; // Due Today - Top priority
    } else if (diffInDays === 1) {
        return 90; // Due Tomorrow - High priority
    } else if (diffInDays <= 3) {
        return 60; // 2-3 Days - Safe buffer
    } else if (diffInDays <= 7) {
        return 40; // This Week - Planning phase
    } else {
        return 10; // Future - Backlog
    }
};

export const calculateEstimatedHours = (estimated_hours) => {
    if (estimated_hours <= 1) return 100; // Super quick
    if (estimated_hours <= 3) return 80;  // Normal
    if (estimated_hours <= 6) return 50;  // Involved
    return 20; // Heavy lift
};

export const calculateImportance = (importance) => {
    switch (importance) {
        case 5: return 100;
        case 4: return 80;
        case 3: return 50; // Dropped mid-tier slightly to distinguish high imp
        case 2: return 30;
        default: return 10;
    }
};


export const priorityAlgo = (due_date, estimated_hours, importance) => {
    const urgencyScore = calculateDueDate(due_date);
    const effortScore = calculateEstimatedHours(estimated_hours);
    const importanceScore = calculateImportance(importance);

    // Human-Centric Logic:
    // 1. Deadline is King (0.65) - If it's due, it's due.
    // 2. Importance matters (0.25) - Don't miss vital tasks.
    // 3. Effort is secondary (0.10) - Quick wins are nice, but not if you miss a deadline.
    
    const priorityScore = (urgencyScore * 0.65) + (importanceScore * 0.25) + (effortScore * 0.10);

    return Math.round(priorityScore);
};