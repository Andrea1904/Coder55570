import coursesModel from "../models/courses.js";

export default class Courses {
  constructor() {
    console.log("Estamos trabajando con bd mongo");
  }

  getAll = async () => {
    let courses = await coursesModel.find().lean().populate("students");
    return courses;
  };

  saveCourses = async (course) => {
    let result = await coursesModel.create(course);
    return result;
  };

  getBy = async (id) => {
    let result = await coursesModel.findOne({ _id: id }).populate("students");
    return result;
  };

  updateCourse = async (id, course) => {
    delete course._id;
    let result = await coursesModel.updateOne({ _id: id }, { $set: course });
    return result;
  };
}
