package io.steviemul.libraries.service;

import io.steviemul.libraries.data.entity.Library;
import io.steviemul.libraries.data.repository.LibraryRepository;
import io.steviemul.libraries.exceptions.LibraryValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

/**
 * Service class exposing various operations
 * that can be performed against the library repository.
 */
@Component
public class LibraryService {

  @Autowired
  private LibraryRepository libraryRepository;

  private static final String NAME = "name";

  public List<Library> getLibraries() {
    return getLibraries(null);
  }

  /**
   * Method returns all Libraries from the LibraryRepository
   *
   * @param name (may be null) passing in a value will return a filtered list of
   *             Libraries, whose name contains the value passed in. Query is case insensitive
   *
   * @return all Library entity objects or a filtered list corresponding to specified name
   */
  public List<Library> getLibraries(String name) {

    if (isEmpty(name)) {
      return libraryRepository.findAll(Sort.by(Sort.Direction.ASC, NAME));
    }

    return getLibrariesByName(name);
  }

  public List<Library> getLibrariesByName(String name) {

    return libraryRepository.findByNameContainingIgnoreCase(name);
  }

  /**
   * Method returns a Library entity object corresponding to the specified id
   *
   * @param id the id to query by
   *
   * @return the Library entity object as specified by the id
   */
  public Library getLibrary(long id) {
    return libraryRepository.findById(id).get();
  }

  /**
   * Method adds the specified library object to the LibraryRepository
   *
   * @param library the library to add
   *
   * @return the successfully added library
   *
   * @throws ResponseStatusException if the library object contains validation exceptions
   */
  public Library addLibrary(Library library) throws ResponseStatusException {

    validateLibrary(library);

    return libraryRepository.save(library);
  }

  /**
   * Method updates the specified library object in the LibraryRepository
   *
   * @param library the library to update
   *
   * @return the successfully updated library
   *
   * @throws ResponseStatusException if the library does not exist contains validation exceptions
   */
  public Library updateLibrary(Library library) throws ResponseStatusException {

    assertExists(library.getLibId());

    validateLibrary(library);

    return libraryRepository.save(library);
  }

  /**
   * Method deletes the specified library from the LibraryRepository
   * @param libId the library id to delete
   *
   * @throws ResponseStatusException if the specified library does not exist
   */
  public void deleteLibrary(long libId) throws ResponseStatusException {

    Optional<Library> library = libraryRepository.findById(libId);

    assertExists(libId);

    libraryRepository.delete(library.get());
  }

  /**
   * Method validates the specified library to ensure required fields have been specified
   *
   * @param library the library to validate
   * @throws LibraryValidationException if any required fields have not been specified
   */
  private void validateLibrary(Library library) throws LibraryValidationException {

    LibraryValidationException validationException = new LibraryValidationException(HttpStatus.BAD_REQUEST);

    if (isEmpty(library.getName())) {
      validationException.addFieldError("name", "Name is required");
    }

    if (isEmpty(library.getAuthor())) {
      validationException.addFieldError("author", "Author is required");
    }

    if (isEmpty(library.getRepository())) {
      validationException.addFieldError("repository", "Repository is required");
    }

    if (isEmpty(library.getUrl())) {
      validationException.addFieldError("url", "URL is required");
    }

    if (isEmpty(library.getVersion())) {
      validationException.addFieldError("version", "Version is required");
    }

    if (validationException.isHasErrors()) {
      throw validationException;
    }
  }

  private boolean isEmpty(String input) {
    return input == null || input.length() == 0;
  }

  private void assertExists(long libId) throws ResponseStatusException {
    Optional<Library> lib = libraryRepository.findById(libId);

    if (!lib.isPresent()) {
      throw new ResponseStatusException(
          HttpStatus.NOT_FOUND, "library not found"
      );
    }
  }
}
