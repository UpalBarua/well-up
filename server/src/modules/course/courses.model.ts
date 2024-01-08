import { Schema, model } from "mongoose";
import { TCourses, allTopic } from "./courses.interface";

export const topicSchema = new Schema<allTopic>({
  firstTopic: {
    topicName: String,
    topicDetails: String,
  },
  secondTopic: {
    topicName: String,
    topicDetails: String,
  },
  thirdTopic: {
    topicName: String,
    topicDetails: String,
  },
  fourTopic: {
    topicName: String,
    topicDetails: String,
  },
  fiveTopic: {
    topicName: String,
    topicDetails: String,
  },
  sixTopic: {
    topicName: String,
    topicDetails: String,
  },
});

const coursesSchema = new Schema<TCourses>({
  id: String,
  course_name: String,
  course_banner: String,
  course_instructor: String,
  instructor_image: String,
  instructor_position: String,
  batch: Number,
  seat: Number,
  duration: String,
  course_start: String,
  course_description: String,
  course_topic: topicSchema,
});

export const courses = model<TCourses>("User", coursesSchema);
