package io.steviemul.libraries.exceptions;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 * Exception handler that knows how to
 * transform a LibraryValidationException
 * into a ResponseEntity to return to the client.
 */
@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

  @ExceptionHandler({LibraryValidationException.class})
  public ResponseEntity<Object> handleLibraryValidationException(
      LibraryValidationException e, WebRequest request) {

    return new ResponseEntity<>(e.getValidationMessages(), e.getStatus());
  }
}
