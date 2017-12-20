package hu.elte.alkfejl.orarend.repository;

import hu.elte.alkfejl.orarend.model.Course;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CourseRepository extends CrudRepository<Course, Integer> {

    Optional<Course> findBySubCodeAndCourseCode(String subCode, int courseCode);

}
