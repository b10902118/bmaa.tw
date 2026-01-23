import RecentCourses from "../Home/RecentCourses";
import Title from "../../components/Title";

const RecentCoursesPage = () => {
  return (
    <>
      <Title title={title} color="green" />
      <RecentCourses />
    </>
  );
};

export const title = "近期課程";
export default RecentCoursesPage;
