package io.steviemul.libraries.data.repository;

import io.steviemul.libraries.data.entity.Library;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LibraryRepository extends JpaRepository<Library, Long> {

  /**
   * Query method to return libraries by name. This method is case sensitive
   *
   * @param name
   * @return a List of libraries who's name contain the passed in param
   */
  public List<Library> findByNameContaining(String name);

  /**
   * Query method to return libraries by name. This method is case insensitive
   *
   * @param name
   * @return a List of libraries who's name contain the passed in param
   */
  public List<Library> findByNameContainingIgnoreCase(String name);
}
