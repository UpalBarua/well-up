export type allTopic = {
  firstTopic: {
    topicName: string;
    topicDetails: string;
  };
  secondTopic: {
    topicName: string;
    topicDetails: string;
  };
  thirdTopic: {
    topicName: string;
    topicDetails: string;
  };
  fourTopic: {
    topicName: string;
    topicDetails: string;
  };
  fiveTopic: {
    topicName: string;
    topicDetails: string;
  };
  sixTopic: {
    topicName: string;
    topicDetails: string;
  };
};

export type TCourses = {
  id: string;
  course_name: string;
  course_banner: string;
  course_instructor: string;
  instructor_image: string;
  instructor_position: string;
  batch: number;
  seat: number;
  duration: string;
  course_start: string;
  course_description: string;
  course_topic: allTopic;
};
