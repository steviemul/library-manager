package io.steviemul.libraries.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Exception object representing validation errors
 * on a Library object.
 */
public class LibraryValidationException extends ResponseStatusException {

  private static final String NAME = "name";
  private static final String MESSAGE = "message";

  private List<Map<String, String>> errors = new ArrayList<>();
  private boolean hasErrors = false;

  public LibraryValidationException(HttpStatus status) {
    super(status);
  }

  public LibraryValidationException addFieldError(String fieldName, String message) {

    Map<String, String> error = new HashMap<>();

    error.put(NAME, fieldName);
    error.put(MESSAGE, message);

    errors.add(error);

    hasErrors = true;

    return this;
  }

  public boolean isHasErrors() {
    return hasErrors;
  }

  public List<Map<String, String>> getValidationMessages() {
    return errors;
  }
}
