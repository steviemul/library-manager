package io.steviemul.libraries.data.entity;

import javax.persistence.*;

/**
 * Entity object representing a Library item
 */
@Entity
@Table(name="LIBRARY")
public class Library {

  @Id
  @Column(name="LIB_ID")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long libId;

  @Column(name="NAME")
  private String name;

  @Column(name="DOWNLOAD_COUNT")
  private int downloadCount;

  @Column(name="AUTHOR")
  private String author;

  @Column(name="URL")
  private String url;

  @Column(name="REPOSITORY")
  private String repository;

  @Column(name="VERSION")
  private String version;

  @Column(name="NOTES")
  private String notes;

  public long getLibId() {
    return libId;
  }

  public void setLibId(int libId) {
    this.libId = libId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getDownloadCount() {
    return downloadCount;
  }

  public void setDownloadCount(int downloadCount) {
    this.downloadCount = downloadCount;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public String getRepository() {
    return repository;
  }

  public void setRepository(String repository) {
    this.repository = repository;
  }

  public String getVersion() {
    return version;
  }

  public void setVersion(String version) {
    this.version = version;
  }

  public String getNotes() {
    return notes;
  }

  public void setNotes(String notes) {
    this.notes = notes;
  }
}
