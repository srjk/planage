package in.stackroute.planage.product.products.service;

import in.stackroute.planage.product.products.model.Products;
import in.stackroute.planage.product.products.model.Teams;

import java.util.List;

public interface IProduct {
    public Products getProductsById(String id);
    public Products addProducts(Products products);
    public Products updateTeam(Teams team, String  id);
    public Products deleteTeam(String member_name, String id);
    public List<Products> getAllProducts() throws Exception;
    public List<Teams> getTeam(String id);
}
