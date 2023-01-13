// Factory function.
function createLesson(title, description) {
  const lesson = {
    title,
    description,
  }
  return {
    information: () => {
      console.log(`Lesson: ${lesson.title}`)
      console.log(`Description: ${lesson.description}`)
    }
  }
}

// Create a new lesson with a specific title and description.
const newLesson = createLesson("Module 17 - Computer Science", "CS for JS")

// Call the information() method.
newLesson.information()

// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new Lesson();
// csForJS.information();
