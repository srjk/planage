package in.stackroute.planage.promanager.exception;

public class ProductNotFound extends RuntimeException {

  private static final long serialVersionUID = 1L;

  public ProductNotFound(String id) {
    super("Product found : " + id);
  }
}

