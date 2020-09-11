package io.steviemul.libraries.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Class directs Client side routes to the root index.html
 *
 * <p>
 * This allows for page refreshes or direct navigation to different urls
 * that are handled as client side routes
 *  e.g. /add /detail/{libraryId}
 *
 * </p>
 */
@Controller
public class PageController {

  private static final String ROOT_FORWARD = "forward:/";

  @RequestMapping(value = "/add")
  public String add() {
    return ROOT_FORWARD;
  }

  @RequestMapping(value = "/detail/{id}")
  public String detail() {
    return ROOT_FORWARD;
  }
}
