package in.stackroute.planage.product.exception;

/*
* This class will send a messagen in response body whenever a user will request for a board that is not in database.
 */
public class ProductNotFoundException extends RuntimeException {
    public ProductNotFoundException(String message){
        super(message);
    }
}
