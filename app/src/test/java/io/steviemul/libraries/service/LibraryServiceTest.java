package io.steviemul.libraries.service;

import io.steviemul.libraries.data.entity.Library;
import io.steviemul.libraries.data.repository.LibraryRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class LibraryServiceTest {

  @Autowired
  private LibraryService libraryService;

  @Test
  void testSetup() {
    assertNotNull(libraryService);
  }

  @Test
  void getLibraries() {
    List<Library> libraries = libraryService.getLibraries(null);

    assertTrue(libraries.size() > 0);
  }

  @Test
  void getLibrariesByName() {
    List<Library> libraries = libraryService.getLibrariesByName("re");

    assertEquals(2, libraries.size());
  }

  @Test
  void getLibrary() {
    Library lib = libraryService.getLibrary(1);

    assertEquals("spring-boot-starter-web", lib.getName());
  }

  @Test
  void addLibrary() {

    Library lib = createLibrary(
        "testAddLib", 10, "junit",
        "http://test.add", "Maven", "1.0.0");

    Library added = libraryService.addLibrary(lib);

    assertTrue(added.getLibId() > 0);
  }

  @Test
  void updateLibrary() {

    Library lib = libraryService.getLibrary(3);

    String newValue = lib.getName() + "-override";

    lib.setName(newValue);

    libraryService.updateLibrary(lib);

    lib = libraryService.getLibrary(3);

    assertEquals(newValue, lib.getName());
  }

  @Test
  void deleteLibrary() {

    List<Library> libraries = libraryService.getLibraries();

    int size = libraries.size();

    libraryService.deleteLibrary(5);

    libraries = libraryService.getLibraries();

    assertEquals(size - 1, libraries.size());
  }

  private Library createLibrary(
      String name, int downloadCount, String author,
      String url, String repository, String version) {

    Library lib = new Library();

    lib.setName(name);
    lib.setDownloadCount(downloadCount);
    lib.setAuthor(author);
    lib.setUrl(url);
    lib.setRepository(repository);
    lib.setVersion(version);

    return lib;
  }
}