package in.stackroute.planage.product.products.service.impl;

import in.stackroute.planage.product.products.model.Products;
import in.stackroute.planage.product.products.model.Teams;
import in.stackroute.planage.product.products.repository.ProductsRepository;
import in.stackroute.planage.product.products.repository.TeamsRepository;
import in.stackroute.planage.product.products.service.ITeams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TeamsService implements ITeams {

    @Autowired
    private TeamsRepository teamsRepository;

    @Override
    public List<Teams> getTeams() {
        return teamsRepository.findAll();
    }

    @Override
    public Teams addTeamMember(Teams team) {
        teamsRepository.save(team);
        return team;
    }

    @Override
    public void deleteTeamMember(int id){
        teamsRepository.deleteById(id);

    }



}
