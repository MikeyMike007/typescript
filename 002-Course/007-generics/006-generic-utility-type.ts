interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  const courseGoal: Partial<CourseGoal> = {} // Partial makes all properties optional
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date
  return courseGoal as CourseGoal // Return as CourseGoal and not Partial CourseGoal
}

// READONLY

const names: Readonly<string[]> = ['Max', 'Anna']
// names.push('Manu') // ERROR SINCE READONLY
console.log(names)
